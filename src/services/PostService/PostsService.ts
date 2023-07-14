import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
import { IPost } from "../../models/models"

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000",
    }),
    tagTypes: ["POST"],
    endpoints: (build) => ({
        fetchAllPost: build.query<IPost[], any>({
            query:(args)=> ({
                url: "/posts",
                params: {
                    _limit: args.limit,
                    category: args.category
                }
            }),
            transformResponse: (response: IPost[]) => response.reverse(),
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: "/posts",
                method: "POST",
                body: post
            }),
            invalidatesTags: ["POST"]
        }),
    })
})