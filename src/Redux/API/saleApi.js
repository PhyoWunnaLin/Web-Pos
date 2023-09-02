import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const saleApi = createApi({
  reducerPath: "saleApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://g.mmsdev.site/api/v1` }),
  tagTypes: ["sale"],
  endpoints: (builder) => ({
    recentVoucher: builder.query({
      query: ({ token, page, searchDaily }) => ({
        url: `/voucher?page=${page}`,
        method: "Get",
        body: searchDaily,
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

    monthly: builder.mutation({
      query: ({ token, searchMonthly }) => ({
        url: "/monthly-sale",
        method: "POST",
        body: searchMonthly,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["sale"],
    }),

    yearly: builder.mutation({
      query: ({ token, searchYearly }) => ({
        url: "/yearly-sale",
        method: "POST",
        body: searchYearly,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["sale"],
    }),

    custom: builder.mutation({
      query: ({ token, searchCustom }) => ({
        url: "/custom-search-by-day",
        method: "POST",
        body: searchCustom,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["sale"],
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
  useMonthlyMutation,
  useYearlyMutation,
  useCustomMutation,
  useSaleCloseMutation,
  useSaleOpenMutation
} = saleApi;
