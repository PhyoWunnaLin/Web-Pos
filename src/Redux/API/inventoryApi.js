import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const inventoryApi = createApi({
  reducerPath: "inventoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://g.mmsdev.site/api/v1` }),
  tagTypes: ["inventory"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (token) => ({
        url: "/product",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["inventory"],
    }),

    getProductDetail: builder.query({
      query: ({ token, id }) => ({
        url: `/product/${id}`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["inventory"],
    }),

    getStocks: builder.query({
      query: ({ token }) => ({
        url: "/stock",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["inventory"],
    }),

    getBrands: builder.query({
      query: (token) => ({
        url: "/brand",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["inventory"],
    }),

    getSingleBrand:builder.query({
      query:({token,id}) => ({
        url:`/brand/${id}`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags:['inventory']
    }),

    createBrand: builder.mutation({
      query: ({ token, newData }) => ({
        url: "/brand",
        method: "POST",
        body: newData,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["inventory"],
    }),

    editBrand: builder.mutation({
      query: ({ token, id ,newData }) => ({
        url: `/brand/${id}`,
        method: "PUT",
        body: newData,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["inventory"],
    }),
  }),
});
export const {
  useGetProductsQuery,
  useGetProductDetailQuery,
  useGetStocksQuery,
  useGetBrandsQuery,
  useCreateBrandMutation,
  useEditBrandMutation,
  useGetSingleBrandQuery
} = inventoryApi;
