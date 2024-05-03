import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";

interface ProductItemState {
    product: IProduct
    isLoading: boolean
    error: string
}

const initialState: ProductItemState = {
    product: {
        id: "",
        name: "",
        card_img: "",
        description: "",
        characteristic: "",
        specification: "",
        additionally: "",
        category: 0,
        subcategory: 0,
        images: []
    },
    isLoading: false,
    error: ""
}

export const productItemSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        productItemFetching(state) {
            state.isLoading = true
        },
        productItemFetchingSuccess(state, action: PayloadAction<IProduct>) {
            state.isLoading = false
            state.error = ''
            state.product = action.payload
        },
        productItemFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default productItemSlice.reducer