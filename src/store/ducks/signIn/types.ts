export enum SignInEnumTypes {
    POST_SIGNIN_REQUEST = '@POST_SIGNIN_REQUEST',
    POST_SIGNIN_SUCCESS = '@POST_SIGNIN_SUCCESS',
    POST_SIGNIN_FAILURE = '@POST_SIGNIN_FAILURE'
}

export interface LogInitialState {
    errorMessage: string
    loading: boolean
    users: LoggedUser
}

export interface SignIn {
    email: string | undefined
    password: string | undefined
}

export interface LoggedUser {
    name: string
    email: string
    role: string
}

export interface LoggedUserData {
    data: Data
}

export interface Data {
    accessToken: string
}

export interface DataWithId {
    data: LoggedUser
}

export interface SignInPayload {
    payload: LoggedUser
}