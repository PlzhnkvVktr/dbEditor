import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPage } from "../../models/IPage"

interface PageByNameState {
    page: IPage
    isLoading: boolean
    error: string
}

const initialState: PageByNameState = {
    page: {
        id: "",
        name: "",
        html: "",
        path: "",
        isVisibility: false,
        isNavbar: false
    },
    isLoading: false,
    error: ""
}

export const pageByIdSlice = createSlice({
    name: 'pages-by-name',
    initialState,
    reducers: {
        pageFetching(state) {
            state.isLoading = true
        },
        pageFetchingSuccess(state, action: PayloadAction<IPage>) {
            state.isLoading = false
            state.error = ''
            state.page = action.payload
        },
        pageFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default pageByIdSlice.reducer