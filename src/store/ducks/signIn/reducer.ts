import { Reducer } from 'redux'
import { SignInEnumTypes, LogInitialState } from './types'

const INITIAL_LOG_STATE: LogInitialState = {
    errorMessage: "",
    loading: false,
    token: '',
    users: {
        name: '',
        email: '',
        role: ''
    }
}

const reducerSignIn = (state = INITIAL_LOG_STATE, action: any) => {
    switch(action.type) {
        case SignInEnumTypes.POST_SIGNIN_REQUEST:
            return {
                ...state
            }
        case SignInEnumTypes.POST_SIGNIN_SUCCESS:
            return {
                ...state,
                token: action.payload
                
            }
        case SignInEnumTypes.POST_SIGNIN_FAILURE:
            return {
                ...state
            }
        default :
            return state
    }
}

export default reducerSignIn