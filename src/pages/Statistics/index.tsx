import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Counter from '../../components/Counter';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import AllTypesReducer from '../../store/ducks/AllTypesReducers';
import { loadGetProductsRequest } from '../../store/ducks/products/actions';
import { ProductType } from '../../store/ducks/products/types';
import { loadGetUsersRequest } from '../../store/ducks/users/actions';
import { UserType } from '../../store/ducks/users/types';
import { Container } from './styles';

const Statistics = () => {
  const dispatch = useDispatch()
  const tokenStorage = localStorage.getItem('token')

  useEffect(() => {
    if (tokenStorage) {
      dispatch(loadGetProductsRequest(tokenStorage))
      dispatch(loadGetUsersRequest(tokenStorage))
    }
  }, [])
  
  const usersFromReducer: UserType[] = useSelector((state: AllTypesReducer) => state.reducerUsers.users)

  const productsFromReducer: ProductType[] = useSelector((state: AllTypesReducer) => state.reducerProducts.products)
  
  return (
    <Container>
      <div className="flex-all">
        <Header />
        <div className="flex">
          <SideBar />
          <div className="content">
            <p className="statistic-text">Esses são <strong>nossos</strong> números atuais</p>
            <Counter type="Usuários">{usersFromReducer.length}</Counter>
            <Counter type="Produtos">{productsFromReducer.length}</Counter>
          </div>
        </div>
      </div>
      <img src="images/bg-stars.svg" alt="shiny starts" className="starts"/>
      <img src="images/pattern-hills.svg" alt="Hills" className="hills"/>

      {
        !tokenStorage &&
        <Redirect to="/" />
      }
      
    </Container>
  )
}

export default Statistics;