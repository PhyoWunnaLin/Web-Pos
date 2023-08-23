import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const saleApi = createApi({
    reducerPath: "saleApi",
    baseQuery: fetchBaseQuery({baseUrl: `https://g.mmsdev.site/api/v1`}),
    tagTypes: ["sale"],
    endpoints: (builder) => ({
       recentVoucher: builder.query({
        query: (token) => ({
            url: "/voucher-record-products",
            headers: {authorization : `Bearer ${token}`},
        }),
        providesTags: ["sale"],
       }),
        
    })
})
export const { useRecentVoucherQuery } = saleApi