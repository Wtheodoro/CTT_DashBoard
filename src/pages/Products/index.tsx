import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AllProducts from '../../components/ProductsSet/AllProducts';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import { loadGetProductsRequest } from '../../store/ducks/products/actions';

import { Container } from './styles';
import AddProduct from '../../components/ProductsSet/AddProduct';
import { Redirect } from 'react-router-dom';

const Products = () => {
  const dispatch = useDispatch()
  const tokenStorage = localStorage.getItem('token')

  useEffect(() => {
    if (tokenStorage) {
      dispatch(loadGetProductsRequest(tokenStorage))
    }
  }, [])

  return (
    <Container>
      <div className="flex-all">
        <Header />
        <div className="flex">
          <SideBar />
            <div className="content">
              <AddProduct />
              <AllProducts />
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

export default Products;