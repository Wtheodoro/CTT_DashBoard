import { put, call } from 'redux-saga/effects'
import { loadGetProductsSuccess, loadGetProductsFailure } from './actions'
import service from '../../../services/api-service'
import  { ProductsData } from './types'

export function* getProducts(token: any) {
    try {
        const response: ProductsData = yield call(service.getProducts, token.payload)
        
        yield put(loadGetProductsSuccess(response.data))
    } catch (error) {
        console.log(error)
        yield put(loadGetProductsFailure())
    }
}