import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({baseUrl: `https://g.mmsdev.site/api/v1`}),
    tagTypes: ["user"],
    endpoints: (builder) => ({
        getUserList: builder.query({
            query: (token) => ({
                url: "/user-lists",
                headers: {authorization : `Bearer ${token}`},
            }),
            providesTags: ["user"]
        }),

        getUserProfile: builder.query({
            query: ({token,id}) => ({
                url: `/check-profile/${id}`,
                headers: {authorization : `Bearer ${token}`},
            }),
            providesTags: ["user"]
        }),

        createUser: builder.mutation({
            query: ({token,user}) => ({
                url: "/register",
                method: "POST",
                body: user,
                headers: {authorization : `Bearer ${token}`},
            }),
            invalidatesTags: ["user"],
        }),
        
    })
})
export const { useGetUserListQuery, useGetUserProfileQuery ,useCreateUserMutation } = userApi