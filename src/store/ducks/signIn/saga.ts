import { put, call } from 'redux-saga/effects'
import service from '../../../services/api-service'
import { loadSignInSuccess, loadSignInFailure } from './actions'
import { Data, DataWithId, LoggedUserData } from './types'
import { decodeToken } from 'react-jwt'
import api from '../../../services/api'

export function* postSignIn(input: any) {
    try {
        const response: LoggedUserData = yield call(service.postSignIn, input.payload)

        yield localStorage.setItem('token', response.data.accessToken)

        const decryptedResponse: Data = yield decodeToken(response.data.accessToken)
        const { sub } = yield decryptedResponse
        
        console.log('primeiro saga', sub)

        const responseWithId:  DataWithId = yield call(service.postSignInWithId, sub)
        console.log('nome, email e role', responseWithId.data)
        yield put(loadSignInSuccess(responseWithId.data))
        
    } catch (error) {
        console.log(error)
        yield put(loadSignInFailure())
    }
}

// function postSignInWithId(id: any) {
//     api.get(`/users/${id}`)
//         .then(response => console.log(response.data))
// }