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

    deleteProduct: builder.mutation({
      query: ({ token, id }) => ({
        url: `/product/${id}`,
        method: "DELETE",
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["inventory"],
    }),

    createProduct: builder.mutation({
      query: ({ token, pdData }) => ({
        url: "/product",
        method: "POST",
        body: pdData,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["inventory"],
    }),

    getStocks: builder.query({
      query: (token) => ({
        url: "/stock",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["inventory"],
    }),

    createStock: builder.mutation({
      query: ({ token, newData }) => ({
        url: "/stock",
        method: "POST",
        body: newData,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["inventory"],
    }),

    getBrands: builder.query({
      query: (token) => ({
        url: "/brand",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["inventory"],
    }),

    getSingleBrand: builder.query({
      query: ({ token, id }) => ({
        url: `/brand/${id}`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["inventory"],
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
      query: ({ token, id, newData }) => ({
        url: `/brand/${id}`,
        method: "PUT",
        body: newData,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["inventory"],
    }),

    deleteBrand:builder.mutation({
      query: ({ token, id }) => ({
        url: `/brand/${id}`,
        method:"DELETE",
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags:["inventory"]
    })
  }),
});
export const {
  useGetProductsQuery,
  useGetProductDetailQuery,
  useGetStocksQuery,
  useGetBrandsQuery,
  useCreateBrandMutation,
  useEditBrandMutation,
  useGetSingleBrandQuery,
  useCreateProductMutation,
  useCreateStockMutation,
  useDeleteProductMutation,
  useDeleteBrandMutation
} = inventoryApi;
