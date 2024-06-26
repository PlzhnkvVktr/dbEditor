export interface ICategory {
    id: string
    name: string
    path: string
    subcategories: ISubcategory[]
}

export interface ISubcategory {
    name: string
    path: string
    card_img: string
}