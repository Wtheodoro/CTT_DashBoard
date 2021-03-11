import { action } from 'typesafe-actions'
import { ProductsEnumTypes, ProductType } from './types'

export const loadGetProductsRequest = (header: any) => action(ProductsEnumTypes.GET_PRODUCTS_REQUEST, header)

export const loadGetProductsSuccess = (payload: ProductType[]) => action(ProductsEnumTypes.GET_PRODUCTS_SUCCESS, payload)

export const loadGetProductsFailure = () => action(ProductsEnumTypes.GET_PRODUCTS_FAILURE)