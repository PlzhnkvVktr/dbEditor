import axios from "axios";
import { AppDispatch } from "../store";
import { INews } from "../../models/INews";
import { newsSlice } from "./NewsReducer";
import { productSlice } from "./ProductReducer";
import { GetThunkAPI, createAsyncThunk } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { IProduct } from "../../models/IProduct";
import { productByCategorySlice } from "./ProductByCategoryReducer";
import { productItemSlice } from "./ProductItemReducer";
import { newsItemSlice } from "./NewsItemReducer";



export const fetchNews = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(newsSlice.actions.newsFetching())
        const response = await axios.get<INews[]>("http://127.0.0.1:8080/news")
        dispatch(newsSlice.actions.newsFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(newsSlice.actions.newsFetchingError(e.message))
    }
}

export const fetchNewsItem = (id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(newsItemSlice.actions.newsItemFetching())
        const response = await axios.get<INews>("http://127.0.0.1:8080/news/" + id)
        dispatch(newsItemSlice.actions.newsItemFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(newsItemSlice.actions.newsItemFetchingError(e.message))
    }
}


export const fetchProductItem = (id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productItemSlice.actions.productItemFetching())
        const response = await axios.get<IProduct>("http://127.0.0.1:8080/products/" + id)
        dispatch(productItemSlice.actions.productItemFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(productItemSlice.actions.productItemFetchingError(e.message))
    }
}

export const fetchProductsByCategory = (category: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productByCategorySlice.actions.productByCategoryFetching())
        const response = await axios.get<IProduct[]>("http://127.0.0.1:8080/products/category/" + category)
        dispatch(productByCategorySlice.actions.productByCategoryFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(productByCategorySlice.actions.productByCategoryFetchingError(e.message))
    }
}
