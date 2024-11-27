import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

const authRoutes = [
  "/user", 
];

const publicApiRoutes = [
  "/",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
];

export default withAuth(
  async function middleware(request) {
    const token = await getToken({ req: request });
    const pathname = request.nextUrl.pathname;

    const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));
    const isPublicApiRoute = publicApiRoutes.some((route) => pathname.startsWith(route));

    // Permitir el acceso si es una ruta pública
    if (isPublicApiRoute) {
      return NextResponse.next();
    }

    // Si no hay token y es una ruta protegida, redirigir al inicio
    if (!token && isAuthRoute) {
      const redirectUrl = new URL("/auth/login", request.url);
      redirectUrl.searchParams.set("callbackUrl", encodeURIComponent(request.nextUrl.href));
      return NextResponse.redirect(redirectUrl);
    }

    // Permitir el acceso si hay un token o la ruta no es protegida
    return NextResponse.next();
  },
  {
    callbacks: {
      async authorized({ req, token }) {
        if (authRoutes.some((route) => req.url.includes(route))) {
          return !!token
        }else{
          return true;
        }  
      },
    },
  }
);