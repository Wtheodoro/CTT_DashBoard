import { UsersEnumType, UsersInitialState, UserType } from './types'

const INITIAL_USERS_STATE: UsersInitialState = {
    errorMessage: "",
    loading: false,
    users: []
}

const reducerUsers = (state = INITIAL_USERS_STATE, action: any) => {
    switch(action.type) {
        case UsersEnumType.GET_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UsersEnumType.GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case UsersEnumType.GET_USERS_FAILURE:
            return {
                ...state,
                errorMessage: "Erro on GET from Reducer Users",
                loading: false
            }
        case UsersEnumType.POST_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UsersEnumType.POST_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: [...state.users, action.payload]
            }
        case UsersEnumType.POST_USERS_FAILURE:
            return {
                ...state,
                errorMessage: "Error on POST from Reducer Users",
                loading: false
            }
        case UsersEnumType.DELETE_USERES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case UsersEnumType.DELETE_USERES_SUCCESS:
            const indexOfUser = state.users.findIndex((element: UserType) => element.id === action.payload)
            state.users.splice(indexOfUser, 1)
            return {
                ...state,
                loading: false,
                users: [...state.users]
            }
        case UsersEnumType.DELETE_USERES_FAILURE:
            return {
                ...state,
                errorMessage: "Error on DELETE from Reducer Users",
                loading: false
            }
        default:
            return state
    }
}

export default reducerUsers