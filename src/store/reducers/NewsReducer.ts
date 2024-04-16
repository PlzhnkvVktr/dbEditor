import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INews } from "../../models/INews";
import { fetchNews } from "./ActionCreators";

interface NewsState {
    news: INews[]
    isLoading: boolean
    error: string
}

const initialState: NewsState = {
    news: [],
    isLoading: false,
    error: ""
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        newsFetching(state) {
            state.isLoading = true
        },
        newsFetchingSuccess(state, action: PayloadAction<INews[]>) {
            state.isLoading = false
            state.error = ''
            state.news = action.payload
        },
        newsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default newsSlice.reducer