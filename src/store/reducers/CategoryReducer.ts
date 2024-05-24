import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../../models/ICategory";
import { ICategoryRequest } from "../../models/ICategoryRequest";

interface CategoryState {
    categories: ICategory[]
    isLoading: boolean
    error: string
}

const initialState: CategoryState = {
    categories: [],
    isLoading: false,
    error: ""
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        categoryFetching(state) {
            state.isLoading = true
        },
        categoryFetchingSuccess(state, action: PayloadAction<ICategory[]>) {
            state.isLoading = false
            state.error = ''
            state.categories = action.payload
        },
        addCategorySuccess(state) {
            state.isLoading = false
            state.error = ''
        },
        categoryFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default categorySlice.reducer