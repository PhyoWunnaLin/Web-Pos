import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const saleApi = createApi({
  reducerPath: "saleApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://g.mmsdev.site/api/v1` }),
  tagTypes: ["sale"],
  endpoints: (builder) => ({
    recentVoucher: builder.query({
      query: (token) => ({
        url: "/voucher",
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
  }),
});
export const { useRecentVoucherQuery, useCheckoutMutation } = saleApi;
