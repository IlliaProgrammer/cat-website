import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
import { ICustomer } from "../models/models"

export const customersApi = createApi({
    reducerPath: "customersApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000",
    }),
    endpoints: (build) => ({
        fetchAllCustomers: build.query<ICustomer[], any>({
            query:()=> ({
                url: "/customers",
            })
        })
    })
})