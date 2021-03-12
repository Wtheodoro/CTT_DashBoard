export enum ProductsEnumTypes {
    GET_PRODUCTS_REQUEST = '@GET_PRODUCTS_REQUEST',
    GET_PRODUCTS_SUCCESS = '@GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_FAILURE = '@GET_PRODUCTS_FAILURE',

    POST_PRODUCTS_REQUEST = '@POST_PRODUCTS_REQUEST',
    POST_PRODUCTS_SUCCESS = '@POST_PRODUCTS_SUCCESS',
    POST_PRODUCTS_FAILURE = '@POST_PRODUCTS_FAILURE',

    DELETE_PRODUCTS_REQUEST = '@DELETE_PRODUCTS_REQUEST',
    DELETE_PRODUCTS_SUCCESS = '@DELETE_PRODUCTS_SUCCESS',
    DELETE_PRODUCTS_FAILURE = '@DELETE_PRODUCTS_FAILURE'
}

export interface ProductsInitialState {
    errorMessage: string
    loading: boolean
    products: ProductType[]
}

export interface ProductType {
    id?: number
    title: string
    price: string
    description: string
    image: string
}

export interface ProductsData {
    data: ProductType[]
}

export interface ProductData {
    data: ProductsData
}