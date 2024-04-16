import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";

interface ProductState {
    products: IProduct[]
    isLoading: boolean
    error: string
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: ""
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productFetching(state) {
            state.isLoading = true
        },
        productFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
            state.isLoading = false
            state.error = ''
            state.products = action.payload
        },
        productFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default productSlice.reducer