import { put, call } from 'redux-saga/effects'
import { loadGetUsersSuccess, loadGetUsersFailure,
    loadPostUserSuccess, loadPostUserFailure,
    loadDeleteUserSuccess, loadDeleteUserFailure 
} from './actions'
import userService from '../../../services/user-service'
import { UserData, UsersData } from './types'

// GET
export function* getUsers(token: any) {
    try {
        const response: UsersData = yield call(userService.getUsers, token.payload)
        // até aqui chega
        yield put(loadGetUsersSuccess(response.data))
    } catch (error) {
        console.log(error)
        yield put(loadGetUsersFailure())      
    }
}

// Post
export function* postUsers(headerUser: any) {
    try {
        const response: UserData = yield call(userService.postUser,headerUser.payload.token ,headerUser.payload.user)
        yield put(loadPostUserSuccess(response.data))
    } catch (error) {
        console.log(error)
        yield put(loadPostUserFailure())
    }
}

// DELETE
export function* deleteUsers(headerId: any) {
    try {
        yield call(userService.deleteUser, headerId.payload.token, headerId.payload.id)
        yield put(loadDeleteUserSuccess(headerId.payload.id))
    } catch (error) {
        console.log(error)
        yield put(loadDeleteUserFailure())
    }
}