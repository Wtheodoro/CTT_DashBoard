import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AllTypesReducer from '../../store/ducks/AllTypesReducers';
import { loadGetProductsRequest } from '../../store/ducks/products/actions';
import { ProductType } from '../../store/ducks/products/types';
import { loadGetUsersRequest } from '../../store/ducks/users/actions';
import { UserType } from '../../store/ducks/users/types';

import { Container } from './styles';

const Statistics = () => {
  
  const usersFromReducer: UserType[] = useSelector((state: AllTypesReducer) => state.reducerUsers.users)

  const productsFromReducer: ProductType[] = useSelector((state: AllTypesReducer) => state.reducerProducts.products)
  
  return (
    <Container>
      <h1>estatistic</h1>
      <div>
        PRODUTOS: {productsFromReducer.length}
      </div>
      <div>
        USUARIOS: {usersFromReducer.length}
      </div>
    </Container>
  )
}

export default Statistics;