import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({baseUrl: `https://g.mmsdev.site/api/v1`}),
    tagTypes: ["admin"],
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: (token) => ({
                url: "/profile",
                headers: {authorization : `Bearer ${token}`},
            }),
            providesTags: ["admin"],
        }),

        editProfile: builder.mutation({
            query: ({token,newData}) => ({
                url: "/edit",
                method: "PUT",
                body: newData,
                headers: {authorization : `Bearer ${token}`},
            }),
            invalidatesTags: ["admin"],
        }),
        
    })
})
export const { useGetProfileQuery, useEditProfileMutation  } = adminApi