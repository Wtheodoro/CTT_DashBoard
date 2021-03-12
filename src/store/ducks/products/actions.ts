import { action } from 'typesafe-actions'
import { ProductsEnumTypes, ProductType } from './types'

export const loadGetProductsRequest = (header: string) => action(ProductsEnumTypes.GET_PRODUCTS_REQUEST, header)

export const loadGetProductsSuccess = (payload: ProductType[]) => action(ProductsEnumTypes.GET_PRODUCTS_SUCCESS, payload)

export const loadGetProductsFailure = () => action(ProductsEnumTypes.GET_PRODUCTS_FAILURE)

export const loadPostProductsRequest = (header: string) => action(ProductsEnumTypes.POST_PRODUCTS_REQUEST, header)

export const loadPostProductsSuccess = (payload: ProductType) => action(ProductsEnumTypes.POST_PRODUCTS_SUCCESS, payload)

export const loadPostProductsFailure = () => action(ProductsEnumTypes.POST_PRODUCTS_FAILURE)