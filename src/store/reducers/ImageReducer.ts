import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IImage } from "../../models/Image";

interface ImageState {
    images: IImage[]
    isLoading: boolean
    error: string
}

const initialState: ImageState = {
    images: [],
    isLoading: false,
    error: ""
}

export const imageSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        imageFetching(state) {
            state.isLoading = true
        },
        imageFetchingSuccess(state, action: PayloadAction<IImage[]>) {
            state.isLoading = false
            state.error = ''
            state.images = action.payload
        },
        imageFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default imageSlice.reducer