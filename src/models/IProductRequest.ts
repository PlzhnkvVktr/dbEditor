export interface IProductRequest {
    name: string,
    card_img: string
    description: string,
    characteristic: string,
    specification: string,
    additionally: string,
    category: number,
    subcategory: number,
    images: Array<string>,
}