import { action } from 'typesafe-actions'
import { ProductsEnumTypes, ProductType } from './types'

// GETS
export const loadGetProductsRequest = (header: string) => action(ProductsEnumTypes.GET_PRODUCTS_REQUEST, header)

export const loadGetProductsSuccess = (payload: ProductType[]) => action(ProductsEnumTypes.GET_PRODUCTS_SUCCESS, payload)

export const loadGetProductsFailure = () => action(ProductsEnumTypes.GET_PRODUCTS_FAILURE)


// POSTS
export const loadPostProductsRequest = (headerItem: any) => action(ProductsEnumTypes.POST_PRODUCTS_REQUEST, headerItem)

// Descobrir o type desse payload
export const loadPostProductsSuccess = (payload: any) => action(ProductsEnumTypes.POST_PRODUCTS_SUCCESS, payload)

export const loadPostProductsFailure = () => action(ProductsEnumTypes.POST_PRODUCTS_FAILURE)


// DELETES
export const loadDeleteProductRequest = (headerId: any) => action(ProductsEnumTypes.DELETE_PRODUCTS_REQUEST, headerId)

export const loadDeleteProductSuccess = (id: number) => action(ProductsEnumTypes.DELETE_PRODUCTS_SUCCESS, id)

export const loadDeleteProductFailuer = () => action(ProductsEnumTypes.DELETE_PRODUCTS_FAILURE)