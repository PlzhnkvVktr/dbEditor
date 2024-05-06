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
import { API_URL } from "../../const/const";
import { IProductRequest } from "../../models/IProductRequest";

// get

export const fetchNews = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(newsSlice.actions.newsFetching())
        const response = await axios.get<INews[]>(API_URL + "news")
        dispatch(newsSlice.actions.newsFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(newsSlice.actions.newsFetchingError(e.message))
    }
}

export const fetchNewsItem = (id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(newsItemSlice.actions.newsItemFetching())
        const response = await axios.get<INews>(API_URL + "news/" + id)
        dispatch(newsItemSlice.actions.newsItemFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(newsItemSlice.actions.newsItemFetchingError(e.message))
    }
}

export const fetchProductItem = (id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productItemSlice.actions.productItemFetching())
        const response = await axios.get<IProduct>(API_URL + "products/" + id)
        dispatch(productItemSlice.actions.productItemFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(productItemSlice.actions.productItemFetchingError(e.message))
    }
}

export const fetchProductsByCategory = (category: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productByCategorySlice.actions.productByCategoryFetching())
        const response = await axios.get<IProduct[]>(API_URL + "products/category/" + category)
        dispatch(productByCategorySlice.actions.productByCategoryFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(productByCategorySlice.actions.productByCategoryFetchingError(e.message))
    }
}

export const fetchImages = () => async (dispatch: AppDispatch) =>  {
    try {
        dispatch(imageSlice.actions.imageFetching())
        const response = await axios.get<IImage[]>(API_URL + "images")
        dispatch(imageSlice.actions.imageFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(imageSlice.actions.imageFetchingError(e.message))
    }
}

export const fetchPages = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(pageSlice.actions.pageFetching())
        const response = await axios.get<IPage[]>(API_URL + "pages")
        dispatch(pageSlice.actions.pageFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(pageSlice.actions.pageFetchingError(e.message))
    }
}

export const fetchPageById = (id: string) => async(dispatch: AppDispatch) => {
    try {
        dispatch(pageByIdSlice.actions.pageFetching())
        const response = await axios.get<IPage>(API_URL + "pages/" + id)
        dispatch(pageByIdSlice.actions.pageFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(pageByIdSlice.actions.pageFetchingError(e.message))
    }
} 

// get

// post

export const postPage = (page: IPageRequest) => async(dispatch: AppDispatch) => {
    try {
        await axios.post(API_URL + "pages", {...page})
    } catch (e: any) {
        console.log("net")
    }
}

export const postNews = (news: INewsRequest) => async (dispatch: AppDispatch) => {
    try {
        await axios.post(API_URL + "news", {...news})
    } catch (e: any) {
        console.log("net")
    }
    
}

export const postProduct = (product: IProductRequest) => async(dispatch: AppDispatch) => {
    try {
        await axios.post(API_URL + "products", {...product})
    } catch (e: any) {
        console.log("net")
    }
}

export const addImage = (file: any) => async (dispatch: AppDispatch) =>  {

    const formData = new FormData()
    formData.append('file', file)

    axios.post(API_URL + "images/upload", formData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: {
            "filename": file.name
        }
      } )
}

// post

// delete

export const deletePage = (id: string) => async (dispatch: AppDispatch) => {
    try {
        await axios.delete(API_URL + "pages/" + id)
    } catch (e: any) {
        console.log("net")
    }
}

export const deleteProduct = (id: string) => async (dispatch: AppDispatch) => {
    try {
        await axios.delete(API_URL + "products/" + id)
    } catch (e: any) {
        console.log("net")
    }
}

export const deleteImage = (id: string) => async (dispatch: AppDispatch) =>  {
    try {
        await axios.delete(API_URL + "images/" + id)
    } catch (e: any) {
        dispatch(imageSlice.actions.imageFetchingError(e.message))
    }
}

export const deleteNews = (id: string) => async (dispatch: AppDispatch) => {
    try {
        await axios.delete(API_URL + "news/" + id)
    } catch (e: any) {
        console.log("net")
    }
}

// delete

// update

export const updatePage = (id: string, page: IPageRequest) => async (dispatch: AppDispatch) => {
    try {
        await axios.put(API_URL + "pages/" + id,  {...page})
    } catch (e: any) {
        console.log("net")
    }
}

export const updateNews = (id: string, news: INewsRequest) => async (dispatch: AppDispatch) => {
    try {
        await axios.put(API_URL + "news/" + id,  {...news})
    } catch (e: any) {
        console.log("net")
    }
}

export const updateProduct = (id: string, product: IProductRequest) => async (dispatch: AppDispatch) => {
    try {
        await axios.put(API_URL + "products/" + id,  {...product})
    } catch (e: any) {
        console.log("net")
    }
}

// update