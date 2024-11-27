import NextAuth from "next-auth/next";
import AzureADProvider from "next-auth/providers/azure-ad";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
   providers: [
    AzureADProvider({
      clientId: `${process.env.AZURE_AD_CLIENT_ID}`,
      clientSecret: `${process.env.AZURE_AD_CLIENT_SECRET}`,
      tenantId: process.env.AZURE_AD_TENANT_ID,
      authorization: {
        params: {
          scope: 'offline_access openid profile email Application.ReadWrite.All Directory.ReadWrite.All ' +
            'Group.ReadWrite.All GroupMember.ReadWrite.All User.Read User.ReadWrite.All',
        },
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, account }) => {
      try {
        if (account?.id_token) {
          const [header, payload, sig] = account.id_token.split(".");
          const idToken = JSON.parse(Buffer.from(payload, "base64").toString("utf-8"));

          token.roles = [...idToken.roles] || [];
          token.access = account.access_token || "";

          const currentTime = Math.floor(Date.now() / 1000);
          const expirationTime = currentTime + 2 * 60 * 60;
          token.exp = expirationTime;
        }
      } catch (error) {
        console.error("Error en la función jwt:", error);
        // Puedes lanzar una excepción o realizar alguna acción específica en caso de error
      }

      return token;
    },
    session: async ({ session, token, user }) => {
      session.roles = token.roles || [];
      session.access = token.access || "";
      return session;
    },
  },
});

export { handler as GET, handler as POST };


