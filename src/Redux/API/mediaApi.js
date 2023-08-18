import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const mediaApi = createApi({
    reducerPath: "mediaApi",
    baseQuery: fetchBaseQuery({baseUrl: `https://g.mmsdev.site/api/v1`}),
    tagTypes: ["media"],
    endpoints: (builder) => ({
        
        
    })
})
export const {  } = mediaApi