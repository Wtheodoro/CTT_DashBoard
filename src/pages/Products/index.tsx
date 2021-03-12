import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AllProducts from '../../components/AllProducts';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import { loadGetProductsRequest, loadPostProductsRequest } from '../../store/ducks/products/actions';

import { Container } from './styles';

const Products = () => {
  const dispatch = useDispatch()
  const tokenStorage = localStorage.getItem('token')

  useEffect(() => {
    if (tokenStorage) {
      dispatch(loadGetProductsRequest(tokenStorage))
    }
  }, [])

  const addItem = () => {
    const item = {
      title: 'banana',
	    price: '23,50',
	    description: "testando produto novo",
	    image: "https://exame.com/wp-content/uploads/2016/12/cachac3a7a-51-exportac3a7c3a3o-100cl.jpg?quality=70&strip=all"
    }

    const headerItem = {
      token: tokenStorage,
      item: item
    }

    dispatch(loadPostProductsRequest(headerItem))
    console.log('função addItem acionada')
  }

  return (
    <>
    <SideBar />
    <Header />
    <Container>
      <button onClick={addItem}>Adicionar pré definido</button>
      <div className="content">
        <AllProducts />
      </div>
      <img src="images/bg-stars.svg" alt="shiny starts" className="starts"/>
      <img src="images/pattern-hills.svg" alt="Hills" className="hills"/>
    </Container>
    </>
  )
}

export default Products;