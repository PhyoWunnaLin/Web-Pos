import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({baseUrl: `https://g.mmsdev.site/api/v1`}),
    tagTypes: ["auth"],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (user) => ({
                url: "/login",
                method: "POST",
                body: user,
            }),
            invalidatesTags: ["auth"],
        }),
        
        logout: builder.mutation({
            query: (token) => ({
                url: `/logout`,
                method: "POST",
                headers: {authorization : `Bearer ${token}`},
            }),
            invalidatesTags: ["auth"]
        })
    })
})
export const { useLoginMutation, useLogoutMutation} = authApi