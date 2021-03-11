import { Reducer } from 'redux'
import { SignInEnumTypes, LoggedUser, LogInitialState } from './types'

const INITIAL_LOG_STATE: LogInitialState = {
    errorMessage: "",
    loading: false,
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
                // email: action.payload,
                // name: action.payload
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                role: action.payload.role
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