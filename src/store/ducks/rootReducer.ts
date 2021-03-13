import { combineReducers } from 'redux'
import reducerSignIn from './signIn/reducer'
import reducerProducts from './products/reducer'
import reducerUsers from './users/reducer'

const createRootReducer = () => combineReducers({
    reducerSignIn,
    reducerProducts,
    reducerUsers
})

export default createRootReducer