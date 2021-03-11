import { put, call } from 'redux-saga/effects'
import service from '../../../services/api-service'
import { loadSignInSuccess, loadSignInFailure } from './actions'
import { Data, DataWithId, LoggedUserData } from './types'
import { decodeToken } from 'react-jwt'

export function* postSignIn(input: any) {
    try {
        const response: LoggedUserData = yield call(service.postSignIn, input.payload)

        yield localStorage.setItem('token', response.data.accessToken)

        const decryptedResponse: Data = yield decodeToken(response.data.accessToken)
        const { sub } = yield decryptedResponse
        
        const responseWithId:  DataWithId = yield call(service.postSignInWithId, sub)
        // yield put(loadSignInSuccess(responseWithId.data))
        yield localStorage.setItem('userName', responseWithId.data.name)
        yield localStorage.setItem('userEmail', responseWithId.data.email)
        yield localStorage.setItem('userRole', responseWithId.data.role)
        
    } catch (error) {
        console.log(error)
        yield put(loadSignInFailure())
    }
}