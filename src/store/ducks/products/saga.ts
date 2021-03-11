import { put, call } from 'redux-saga/effects'
import { loadGetProductsSuccess, loadGetProductsFailure } from './actions'
import service from '../../../services/api-service'
import  { ProductsData } from './types'

export function* getProducts() {
    try {
        const response: ProductsData = yield call(service.getProducts)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}