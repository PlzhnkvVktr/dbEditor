import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newsReducer from "./reducers/NewsReducer";
import productReducer from "./reducers/ProductReducer";
import productByCategoryReducer from "./reducers/ProductByCategoryReducer";
import productItemReducer from "./reducers/ProductItemReducer";
import newsItemReducer from "./reducers/NewsItemReducer";
import imageReducer from "./reducers/ImageReducer";
import pageReducer from "./reducers/PagesReducer";
import pageByIdReducer from "./reducers/PageByIdReducer";
import categoryReducer from "./reducers/CategoryReducer";
import categotyByIdReducer from "./reducers/CategoryByIdReducer";

const rootReducer = combineReducers({
    newsReducer,
    productReducer,
    productByCategoryReducer,
    productItemReducer,
    newsItemReducer,
    imageReducer,
    pageReducer,
    pageByIdReducer,
    categoryReducer,
    categotyByIdReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type ppStore = ReturnType<typeof setupStore>
export type AppDispatch = ppStore['dispatch']