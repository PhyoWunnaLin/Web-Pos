import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const profileApi = createApi({
    reducerPath: "profileApi",
    baseQuery: fetchBaseQuery({baseUrl: `https://g.mmsdev.site/api/v1`}),
    tagTypes: ["profile"],
    endpoints: (builder) => ({
        adminProfile: builder.query({
            query: (token) => ({
                url: "/profile",
                headers: {authorization : `Bearer ${token}`},
            }),
            providesTags: ["profile"],
        }),

        editProfile: builder.mutation({
            query: ({token,newData}) => ({
                url: "/edit",
                method: "PUT",
                body: newData,
                headers: {authorization : `Bearer ${token}`},
            }),
            invalidatesTags: ["profile"],
        }),

        createUser: builder.mutation({
            query: ({token,user}) => ({
                url: "/register",
                method: "POST",
                body: user,
                headers: {authorization : `Bearer ${token}`},
            }),
            invalidatesTags: ["profile"],
        }),

        
    })
})
export const { useAdminProfileQuery, useEditProfileMutation ,useCreateUserMutation } = profileApi