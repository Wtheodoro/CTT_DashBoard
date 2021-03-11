import { action } from 'typesafe-actions'
import { SignInEnumTypes, SignIn, LoggedUser } from './types'

export const loadSignInRequest = (log: SignIn) => action(SignInEnumTypes.POST_SIGNIN_REQUEST, log)

export const loadSignInSuccess = (payload: LoggedUser) => action(SignInEnumTypes.POST_SIGNIN_SUCCESS, payload)

export const loadSignInFailure = () => action(SignInEnumTypes.POST_SIGNIN_FAILURE)