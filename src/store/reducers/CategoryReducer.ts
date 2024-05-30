import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../../models/ICategory";
import { ICategoryRequest } from "../../models/ICategoryRequest";

interface CategoryState {
    categories: ICategory[]
    isLoadingCategory: boolean
    errorCategory: string
}

const initialState: CategoryState = {
    categories: [],
    isLoadingCategory: false,
    errorCategory: ""
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        categoryFetching(state) {
            state.isLoadingCategory = true
        },
        categoryFetchingSuccess(state, action: PayloadAction<ICategory[]>) {
            state.isLoadingCategory = false
            state.errorCategory = ''
            state.categories = action.payload
        },
        addCategorySuccess(state) {
            state.isLoadingCategory = false
            state.errorCategory = ''
        },
        categoryFetchingError(state, action: PayloadAction<string>) {
            state.isLoadingCategory = false
            state.errorCategory = action.payload
        }
    }
})

export default categorySlice.reducer