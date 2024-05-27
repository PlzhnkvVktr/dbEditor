import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../../models/ICategory";

interface CategoryByIdState {
    category: ICategory
    isLoading: boolean
    error: string
}

const initialState: CategoryByIdState = {
    category: {
        id: "",
        name: "",
        path: "",
        subcategories: []
    },
    isLoading: false,
    error: ""
}

export const categoryByIdSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        categoryByIdFetching(state) {
            state.isLoading = true
        },
        categoryByIdFetchingSuccess(state, action: PayloadAction<ICategory>) {
            state.isLoading = false
            state.error = ''
            state.category = action.payload
        },
        categoryByIdFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default categoryByIdSlice.reducer