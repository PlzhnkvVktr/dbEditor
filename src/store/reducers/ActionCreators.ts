import axios, { AxiosResponse } from "axios";
import { AppDispatch } from "../store";
import { INews } from "../../models/INews";
import { newsSlice } from "./NewsReducer";
import { productSlice } from "./ProductReducer";
import { GetThunkAPI, createAsyncThunk } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { IProduct } from "../../models/IProduct";
import { productByCategorySlice } from "./ProductByCategoryReducer";
import { productItemSlice } from "./ProductItemReducer";
import { newsItemSlice } from "./NewsItemReducer";
import { INewsRequest } from "../../models/INewsRequest";
import { imageSlice } from "./ImageReducer";
import { IImage } from "../../models/Image";
import { pageSlice } from "./PagesReducer";
import { IPage } from "../../models/IPage";
import { IPageRequest } from "../../models/IPageRequest";
import { pageByIdSlice } from "./PageByIdReducer";



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

export const postNews = (news: INewsRequest) => async (dispatch: AppDispatch) => {
    try {
        await axios.post("http://127.0.0.1:8080/news", {...news})
    } catch (e: any) {
        console.log("net")
    }
    
}

export const deleteNews = (id: string) => async (dispatch: AppDispatch) => {
    try {
        await axios.delete("http://127.0.0.1:8080/news/" + id)
    } catch (e: any) {
        console.log("net")
    }
}

export const updateNews = (id: string, news: INewsRequest) => async (dispatch: AppDispatch) => {
    try {
        await axios.put("http://127.0.0.1:8080/news/" + id,  {...news})
    } catch (e: any) {
        console.log("net")
    }
}

export const fetchImages = () => async (dispatch: AppDispatch) =>  {
    try {
        dispatch(imageSlice.actions.imageFetching())
        const response = await axios.get<IImage[]>("http://127.0.0.1:8080/images")
        dispatch(imageSlice.actions.imageFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(imageSlice.actions.imageFetchingError(e.message))
    }
}

export const deleteImage = (id: string) => async (dispatch: AppDispatch) =>  {
    try {
        await axios.delete("http://127.0.0.1:8080/images/" + id)
    } catch (e: any) {
        dispatch(imageSlice.actions.imageFetchingError(e.message))
    }
}

export const addImage = (file: any) => async (dispatch: AppDispatch) =>  {

    const formData = new FormData()
    formData.append('file', file)

    axios.post("http://127.0.0.1:8080/images/upload", formData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: {
            "filename": file.name
        }
      } )
}

export const fetchPages = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(pageSlice.actions.pageFetching())
        const response = await axios.get<IPage[]>("http://127.0.0.1:8080/pages")
        dispatch(pageSlice.actions.pageFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(pageSlice.actions.pageFetchingError(e.message))
    }
}
 
export const postPage = (page: IPageRequest) => async(dispatch: AppDispatch) => {
    try {
        await axios.post("http://127.0.0.1:8080/pages", {...page})
    } catch (e: any) {
        console.log("net")
    }
}
 
export const fetchPageById = (id: string) => async(dispatch: AppDispatch) => {
    try {
        dispatch(pageByIdSlice.actions.pageFetching())
        const response = await axios.get<IPage>("http://127.0.0.1:8080/pages/" + id)
        dispatch(pageByIdSlice.actions.pageFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(pageByIdSlice.actions.pageFetchingError(e.message))
    }
}