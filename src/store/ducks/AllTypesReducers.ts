import { ProductsInitialState } from "./products/types";
import { LogInitialState } from "./signIn/types";

interface AllTypesReducer {
    reducerSignIn: LogInitialState
    reducerProducts: ProductsInitialState
}

export default AllTypesReducer