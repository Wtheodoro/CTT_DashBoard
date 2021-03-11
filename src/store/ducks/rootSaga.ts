import { all, takeLatest } from "redux-saga/effects";
import { SignInEnumTypes } from "./signIn/types";
import { postSignIn } from "./signIn/saga";
import { ProductsEnumTypes } from "./products/types"
import { getProducts } from './products/saga'

export default function* rootSaga(): any {
    return yield all([
        takeLatest(SignInEnumTypes.POST_SIGNIN_REQUEST, postSignIn),
        takeLatest(ProductsEnumTypes.GET_PRODUCTS_REQUEST, getProducts)
    ])
}