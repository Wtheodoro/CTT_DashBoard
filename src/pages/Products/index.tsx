import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AllProducts from '../../components/AllProducts';
import SideBar from '../../components/SideBar';
import { loadGetProductsRequest } from '../../store/ducks/products/actions';

// import { Container } from './styles';

const Products = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const tokenStorage = localStorage.getItem('token')

    if (tokenStorage) {
      dispatch(loadGetProductsRequest(tokenStorage))
    }
  }, [])

  return (
    <>
      <SideBar />
      <AllProducts />
    </>
  )
}

export default Products;