import { all, takeLatest } from "redux-saga/effects";
import { SignInEnumTypes } from "./signIn/types";
import { postSignIn } from "./signIn/saga";
import { ProductsEnumTypes } from "./products/types"
import { getProducts, postProducts, deleteProducts } from './products/saga'
import { UsersEnumType } from "./users/types";
import { getUsers, postUsers, deleteUsers } from './users/saga'

export default function* rootSaga(): any {
    return yield all([
        takeLatest(SignInEnumTypes.POST_SIGNIN_REQUEST, postSignIn),

        takeLatest(ProductsEnumTypes.GET_PRODUCTS_REQUEST, getProducts),
        takeLatest(ProductsEnumTypes.POST_PRODUCTS_REQUEST, postProducts),
        takeLatest(ProductsEnumTypes.DELETE_PRODUCTS_REQUEST, deleteProducts),

        takeLatest(UsersEnumType.GET_USERS_REQUEST, getUsers),
        takeLatest(UsersEnumType.POST_USERS_REQUEST, postUsers),
        takeLatest(UsersEnumType.DELETE_USERES_REQUEST, deleteUsers)
    ])
}