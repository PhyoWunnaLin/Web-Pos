import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const saleApi = createApi({
  reducerPath: "saleApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://g.mmsdev.site/api/v1` }),
  tagTypes: ["sale"],
  endpoints: (builder) => ({
    getSaleProducts: builder.query({
      query: ({token,id}) => ({
        url: `/sale-products${id && `?brand_id=${id}`}`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["sale"],
    }),

    getSaleBrands: builder.query({
      query: (token) => ({
        url: `/sale-brands`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["sale"],
    }),

    recentVoucher: builder.query({
      query: ({ token, page, date }) => ({
        url: `/voucher?page=${page}&date=${date}`,
        method: "Get",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["sale"],
    }),

    checkout: builder.mutation({
      query: ({ token, newData }) => ({
        url: "/check-out",
        method: "POST",
        body: newData,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["sale"],
    }),

    monthly: builder.query({
      query: ({ token, page, month, year }) => ({
        url: `/monthly-sale?page=${page}&month=${month}&year=${year}`,
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["sale"],
    }),

    yearly: builder.query({
      query: ({ token, year, page }) => ({
        url: `/yearly-sale?page=${page}&year=${year}`,
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["sale"],
    }),

    custom: builder.query({
      query: ({ token, from, to, page }) => ({
        url: `/custom-search-by-day?page=${page}&from=${from}&to=${to}`,
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["sale"],
    }),

    saleClose: builder.mutation({
      query: (token) => ({
        url: "/sale-close",
        method: "POST",
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["sale"],
    }),

    saleOpen: builder.mutation({
      query: (token) => ({
        url: "/sale-open",
        method: "POST",
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["sale"],
    }),
  }),
});
export const {
  useRecentVoucherQuery,
  useCheckoutMutation,
  useMonthlyQuery,
  useYearlyQuery,
  useCustomQuery,
  useSaleCloseMutation,
  useSaleOpenMutation,
  useGetSaleProductsQuery,
  useGetSaleBrandsQuery
} = saleApi;
