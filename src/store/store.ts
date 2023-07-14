import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { breedsApi } from "../services/BreedsService";
import { customersApi } from "../services/CustomerService";
import { postsApi } from "../services/PostService/PostsService";
import postReducer from "../services/PostService/PostService.slice"


const rootReducer = combineReducers({
    [breedsApi.reducerPath]: breedsApi.reducer,
    [customersApi.reducerPath]: customersApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    post: postReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(breedsApi.middleware, customersApi.middleware, postsApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

