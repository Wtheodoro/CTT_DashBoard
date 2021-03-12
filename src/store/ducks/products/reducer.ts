import Products from '../../../pages/Products'
import { ProductsEnumTypes, ProductsInitialState, ProductType } from './types'

const INITIAL_PRODUCTS_STATE: ProductsInitialState ={
    errorMessage: "",
    loading: false,
    products: []
}

const reducerProducts = (state = INITIAL_PRODUCTS_STATE, action: any) => {
    console.log(action.payload)
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
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case ProductsEnumTypes.POST_PRODUCTS_FAILURE:
            return {
                ...state,
                errorMessage: "Erro on POST from Reducer Products",
                loading: false
            }
        case ProductsEnumTypes.DELETE_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ProductsEnumTypes.DELETE_PRODUCTS_SUCCESS:
            const indexOfItem = state.products.findIndex((element: ProductType) => element.id === action.payload)
            state.products.splice(indexOfItem, 1)
            return {
                ...state,
                loading: false,
                products: [...state.products]
            }
        case ProductsEnumTypes.DELETE_PRODUCTS_FAILURE:
            return {
                ...state,
                errorMessage: "Erro on DELETE from Reducer Products",
                loading: false
            }
        default:
            return state

    }
}

export default reducerProducts