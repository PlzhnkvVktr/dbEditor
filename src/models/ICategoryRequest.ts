import { ISubcategory } from "./ICategory"

export interface ICategoryRequest {
    name: string
    path: string
    subcategories: ISubcategory[]
}