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
                products: action.payload,
                loading: false
            }
        case ProductsEnumTypes.GET_PRODUCTS_FAILURE:
            return {
                ...state,
                errorMessage: 'Erro on GET from Reducer Products',
                loading: false
            }
        case ProductsEnumTypes.POST_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ProductsEnumTypes.POST_PRODUCTS_SUCCESS:
            return {
                // por enquanto isso não se altera
                ...state,
                loading: false
            }
        case ProductsEnumTypes.POST_PRODUCTS_FAILURE:
            return {
                ...state,
                errorMessage: "Erro on POST from Reducer Products",
                loading: false
            }
        default:
            return state

    }
}

export default reducerProducts