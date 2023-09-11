import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const dashboardApi = createApi({
    reducerPath: "dashboardApi",
    baseQuery: fetchBaseQuery({baseUrl: `https://g.mmsdev.site/api/v1`}),
    tagTypes: ["dashboard"],
    endpoints: (builder) => ({
        getOverview: builder.query({
            query: (token) => ({
                url: "/overview",
                headers: {authorization : `Bearer ${token}`},
            }),
            providesTags: ["dashboard"],
        }),
        
    })
})
export const { useGetOverviewQuery } = dashboardApi