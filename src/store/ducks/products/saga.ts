import { put, call } from 'redux-saga/effects'
import { loadGetProductsSuccess, loadGetProductsFailure, loadPostProductsFailure, loadDeleteProductFailuer, loadDeleteProductSuccess, loadPostProductsSuccess } from './actions'
import service from '../../../services/api-service'
import  { ProductData, ProductsData } from './types'

// GET
export function* getProducts(token: any) {
    try {
        const response: ProductsData = yield call(service.getProducts, token.payload)
        
        yield put(loadGetProductsSuccess(response.data))
    } catch (error) {
        console.log(error)
        yield put(loadGetProductsFailure())
    }
}

// POST
export function* postProducts(headerItem: any) {
    try {
        const response: ProductData = yield call(service.postProducts, headerItem.payload.token, headerItem.payload.item)
        
        console.log('from sagga', response.data)

        yield put(loadPostProductsSuccess(response.data))
    } catch (error) {
        console.log(error)
        yield put(loadPostProductsFailure())
    }
}

// DELETE
export function* deleteProducts(headerId: any) {
    try {
        yield call(service.deleteProduct, headerId.payload.token, headerId.payload.id)

        yield put(loadDeleteProductSuccess(headerId.payload.id))
    } catch (error) {
        console.log(error)
        yield put(loadDeleteProductFailuer())
    }
}