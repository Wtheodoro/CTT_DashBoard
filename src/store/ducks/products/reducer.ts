import { ProductsEnumTypes, ProductsInitialState } from './types'

const INITIAL_PRODUCTS_STATE: ProductsInitialState ={
    errorMessage: "",
    loading: false,
    products: []
}

const reducerProducts = (state = INITIAL_PRODUCTS_STATE, action: any) => {
    switch(action.type) {
        case ProductsEnumTypes.GET_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ProductsEnumTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                arrayProducts: action.payload,
                loading: false
            }
        case ProductsEnumTypes.GET_PRODUCTS_FAILURE:
            return {
                ...state,
                errorMessage: 'Erro from Reducer PRoducts',
                loading: false
            }
        default:
            return state

    }
}

export default reducerProducts