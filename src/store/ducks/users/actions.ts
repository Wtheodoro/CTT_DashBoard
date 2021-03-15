import { action } from 'typesafe-actions'
import { UsersEnumType, UserType } from './types'

// GETS
export const loadGetUsersRequest = (header: string) => action(UsersEnumType.GET_USERS_REQUEST, header)

export const loadGetUsersSuccess = (payload: UserType[]) => action(UsersEnumType.GET_USERS_SUCCESS, payload)

export const loadGetUsersFailure = () => action(UsersEnumType.GET_USERS_FAILURE)


// POST
export const loadPostUserRequest = (headerUser: any) => action(UsersEnumType.POST_USERS_REQUEST, headerUser)

export const loadPostUserSuccess = (payload: any) => action(UsersEnumType.POST_USERS_SUCCESS, payload)

export const loadPostUserFailure = () => action(UsersEnumType.POST_USERS_FAILURE)


//DELETES
export const loadDeleteUserRequest = (headerId: any) => action(UsersEnumType.DELETE_USERES_REQUEST, headerId)

export const loadDeleteUserSuccess = (id: number) => action(UsersEnumType.DELETE_USERES_SUCCESS, id)

export const loadDeleteUserFailure = () => action(UsersEnumType.DELETE_USERES_FAILURE)