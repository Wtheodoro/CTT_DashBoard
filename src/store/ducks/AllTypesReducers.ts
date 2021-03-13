import { ProductsInitialState } from "./products/types";
import { LogInitialState } from "./signIn/types";
import { UsersInitialState } from "./users/types";

interface AllTypesReducer {
    reducerSignIn: LogInitialState
    reducerProducts: ProductsInitialState
    reducerUsers: UsersInitialState
}

export default AllTypesReducer