import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const mediaApi = createApi({
    reducerPath: "mediaApi",
    baseQuery: fetchBaseQuery({baseUrl: `https://g.mmsdev.site/api/v1`}),
    tagTypes: ["media"],
    endpoints: (builder) => ({
        createPhoto: builder.mutation({
            query: ({token,photo}) => ({
                url: `/photo`,
                method: "POST",
                body: photo,
                headers: {authorization : `Bearer ${token}`},
            }),
            invalidatesTags: ["media"],
        }),

        getPhoto: builder.query({
            query: ({token}) => ({
                url: `/photo`,
                method: "GET",
                headers: {authorization : `Bearer ${token}`},
            }),
            providesTags: ["media"],
        })
        
    })
})
export const { useCreatePhotoMutation, useGetPhotoQuery } = mediaApi