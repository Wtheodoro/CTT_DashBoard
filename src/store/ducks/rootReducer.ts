import { combineReducers } from 'redux'
import reducerSignIn from './signIn/reducer'
import reducerProducts from './products/reducer'

const createRootReducer = () => combineReducers({
    reducerSignIn,
    reducerProducts
})

export default createRootReducer