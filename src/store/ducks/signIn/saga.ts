import { put, call } from 'redux-saga/effects'
import loginService from '../../../services/login-service'
import { loadSignInFailure, loadSignInSuccess, loadSingOutFailure, loadSingOutSuccess } from './actions'
import { Data, DataWithId, LoggedUserData, TokenUserType } from './types'
import { decodeToken } from 'react-jwt'

export function* postSignIn(input: any) {
    try {
        const response: LoggedUserData = yield call(loginService.postSignIn, input.payload)

        yield localStorage.setItem('token', response.data.accessToken)

        const decryptedResponse: Data = yield decodeToken(response.data.accessToken)
        const { sub } = yield decryptedResponse
        
        const responseWithId:  DataWithId = yield call(loginService.postSignInWithId, sub)
        const { name, role } = yield responseWithId.data

        yield localStorage.setItem('userName', name)
        yield localStorage.setItem('userRole', role )

        const tokenUser: TokenUserType = yield {
            token: response.data.accessToken,
            name: name,
            role: role
        }

        yield put(loadSignInSuccess(tokenUser))
        
    } catch (error) {
        console.log(error)
        yield put(loadSignInFailure(error))
    }
}

export function* SignOut() {
    try {
        yield put(loadSingOutSuccess())
    } catch (error) {
        console.log(error)
        yield put(loadSingOutFailure())
    }
}