import { action } from 'typesafe-actions'
import { SignInEnumTypes, SignIn } from './types'

export const loadSignInRequest = (log: SignIn) => action(SignInEnumTypes.POST_SIGNIN_REQUEST, log)

export const loadSignInSuccess = (payload: any) => action(SignInEnumTypes.POST_SIGNIN_SUCCESS, payload)

export const loadSignInFailure = (err: string) => action(SignInEnumTypes.POST_SIGNIN_FAILURE, err)

//SIGNOUT
export const loadSingOutRequest = () => action(SignInEnumTypes.SIGNOUT_REQUEST)

export const loadSingOutSuccess = () => action(SignInEnumTypes.SIGNOUT_SUCCESS)

export const loadSingOutFailure = () => action(SignInEnumTypes.SIGNOUT_FAILURE)