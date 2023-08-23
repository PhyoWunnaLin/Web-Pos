import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const saleApi = createApi({
    reducerPath: "saleApi",
    baseQuery: fetchBaseQuery({baseUrl: `https://g.mmsdev.site/api/v1`}),
    tagTypes: ["sale"],
    endpoints: (builder) => ({
       
        
    })
})
export const {   } = saleApi