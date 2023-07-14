import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
import { IBreed } from "../models/models"

export const breedsApi = createApi({
    reducerPath: "breedsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000",
    }),
    endpoints: (build) => ({
        fetchAllBreeds: build.query<IBreed[], { limit: number, page: number }>({
            query:(args)=> ({
                url: "/breeds",
                params: {
                    _limit: args.limit,
                    _page: args.page,
                }
            })
        })
    })
})