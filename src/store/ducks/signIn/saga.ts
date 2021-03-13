import { put, call } from 'redux-saga/effects'
import loginService from '../../../services/login-service'
import { loadSignInFailure, loadSignInSuccess } from './actions'
import { Data, DataWithId, LoggedUserData } from './types'
import { decodeToken } from 'react-jwt'

export function* postSignIn(input: any) {
    try {
        const response: LoggedUserData = yield call(loginService.postSignIn, input.payload)

        yield localStorage.setItem('token', response.data.accessToken)
        yield put(loadSignInSuccess(response.data.accessToken))

        const decryptedResponse: Data = yield decodeToken(response.data.accessToken)
        const { sub } = yield decryptedResponse
        
        const responseWithId:  DataWithId = yield call(loginService.postSignInWithId, sub)
        
        yield localStorage.setItem('userName', responseWithId.data.name)
        yield localStorage.setItem('userEmail', responseWithId.data.email)
        yield localStorage.setItem('userRole', responseWithId.data.role)
        
    } catch (error) {
        console.log(error)
        yield put(loadSignInFailure())
    }
}