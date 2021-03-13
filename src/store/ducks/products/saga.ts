import { put, call } from 'redux-saga/effects'
import productService from '../../../services/product-service'
import  { ProductData, ProductsData } from './types'
import { loadGetProductsSuccess, loadGetProductsFailure,
    loadPostProductsFailure, loadDeleteProductFailuer,
    loadDeleteProductSuccess, loadPostProductsSuccess } 
from './actions'

// GET
export function* getProducts(token: any) {
    try {
        const response: ProductsData = yield call(productService.getProducts, token.payload)
        
        yield put(loadGetProductsSuccess(response.data))
    } catch (error) {
        console.log(error)
        yield put(loadGetProductsFailure())
    }
}

// POST
export function* postProducts(headerItem: any) {
    try {
        const response: ProductData = yield call(productService.postProducts, headerItem.payload.token, headerItem.payload.item)
        yield put(loadPostProductsSuccess(response.data))
    } catch (error) {
        console.log(error)
        yield put(loadPostProductsFailure())
    }
}

// DELETE
export function* deleteProducts(headerId: any) {
    try {
        yield call(productService.deleteProduct, headerId.payload.token, headerId.payload.id)

        yield put(loadDeleteProductSuccess(headerId.payload.id))
    } catch (error) {
        console.log(error)
        yield put(loadDeleteProductFailuer())
    }
}