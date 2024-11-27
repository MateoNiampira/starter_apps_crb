import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => "user",
        }),
        createUser: builder.mutation({
            query: (body) => ({
                url: `user`,
                method: "POST",
                body: body,
            }),
        }),
        updateUser: builder.mutation({
            query: (update) => ({
                url: `user`,
                method: "PUT",
                body: update,
            }),
        }),
        updateListOfUsers: builder.mutation({
            query: (updates) => ({
                url: `user`,
                method: "PATCH",
                body: updates,
            }),
        }),
    }),
});

export const { useGetUserQuery, useUpdateUserMutation, useUpdateListOfUsersMutation } = userApi;
