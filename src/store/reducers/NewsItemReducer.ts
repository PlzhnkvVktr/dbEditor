import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INews } from "../../models/INews";
import { fetchNews } from "./ActionCreators";

interface NewsItemState {
    newsItem: INews
    isLoading: boolean
    error: string
}

const initialState: NewsItemState = {
    newsItem: {
        id: "",
        title: "",
        message: "",
        timestamp: 0
    },
    isLoading: false,
    error: ""
}

export const newsItemSlice = createSlice({
    name: 'newsItem',
    initialState,
    reducers: {
        newsItemFetching(state) {
            state.isLoading = true
        },
        newsItemFetchingSuccess(state, action: PayloadAction<INews>) {
            state.isLoading = false
            state.error = ''
            state.newsItem = action.payload
        },
        newsItemFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default newsItemSlice.reducer