import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SideBar from '../../components/SideBar';
import { loadGetProductsRequest } from '../../store/ducks/products/actions';

// import { Container } from './styles';

const Products = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadGetProductsRequest('fake header'))
  }, [])



  return (
    <>
      <SideBar />
      <h1>hi from products</h1>
    </>
  )
}

export default Products;