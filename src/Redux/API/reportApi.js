import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const reportApi = createApi({
    reducerPath: "reportApi",
    baseQuery: fetchBaseQuery({baseUrl: `https://g.mmsdev.site/api/v1`}),
    tagTypes: ["report"],
    endpoints: (builder) => ({
        getStockReport: builder.query({
            query: ({token,page,stockLevel}) => ({
                url: `/report/stock?page=${page}&${stockLevel}`,
                headers: {authorization : `Bearer ${token}`},
            }),
            providesTags: ["report"],
        }),

        getStockBrandReport: builder.query({
            query: (token) => ({
                url: "/report/brand",
                headers: {authorization : `Bearer ${token}`},
            }),
            providesTags: ["report"],
        }),

        getSaleReport: builder.query({
            query: (token) => ({
                url: "/report/sale",
                headers: {authorization : `Bearer ${token}`},
            }),
            providesTags: ["report"],
        }),
        
    })
})
export const { useGetStockReportQuery, useGetStockBrandReportQuery, useGetSaleReportQuery } = reportApi