import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const Key = "likedPost"

interface LikedPost {
    favourites: any[]
}

const initialState: LikedPost = {
    favourites: JSON.parse(localStorage.getItem(Key) ?? '[]')
}

export const  postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        addFavourite(state, action: PayloadAction<any>){
            state.favourites.push(action.payload)
            localStorage.setItem(Key, JSON.stringify(state.favourites))
        },
        deleteFavourite(state, action: PayloadAction<any>){
            state.favourites = state.favourites.filter(f => f!==action.payload)
            localStorage.setItem(Key, JSON.stringify(state.favourites))
        }
    }
})

export const postActions = postSlice.actions
export default postSlice.reducer;
