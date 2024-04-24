import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPage } from "../../models/IPage";

interface PageState {
    pages: IPage[]
    isLoading: boolean
    error: string
}

const initialState: PageState = {
    pages: [],
    isLoading: false,
    error: ""
}

export const pageSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        pageFetching(state) {
            state.isLoading = true
        },
        pageFetchingSuccess(state, action: PayloadAction<IPage[]>) {
            state.isLoading = false
            state.error = ''
            state.pages = action.payload
        },
        pageFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default pageSlice.reducer