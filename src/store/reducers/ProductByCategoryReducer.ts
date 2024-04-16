import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IProduct } from "../../models/IProduct"

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

export const productByCategorySlice = createSlice({
    name: 'productsByCategory',
    initialState,
    reducers: {
        productByCategoryFetching(state) {
            state.isLoading = true
        },
        productByCategoryFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
            state.isLoading = false
            state.error = ''
            state.products = action.payload
        },
        productByCategoryFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default productByCategorySlice.reducer