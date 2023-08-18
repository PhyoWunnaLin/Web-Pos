import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const inventoryApi = createApi({
    reducerPath: "inventoryApi",
    baseQuery: fetchBaseQuery({baseUrl: `https://g.mmsdev.site/api/v1`}),
    tagTypes: ["inventory"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (token) => ({
                url: "/product",
                headers: {authorization : `Bearer ${token}`},
            }),
            providesTags: ["inventory"],
        })
    })
})
export const { useGetProductsQuery } = inventoryApi