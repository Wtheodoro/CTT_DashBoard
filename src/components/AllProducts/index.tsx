import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AllTypesReducer from '../../store/ducks/AllTypesReducers';
import { ProductType } from '../../store/ducks/products/types';
import ProductTrack from '../ProductTrack';

import { Container } from './styles';

const AllProducts = () => {

const products: ProductType[] = useSelector((state: AllTypesReducer) =>state.reducerProducts.products)

  return (
    <Container>
      <h1>All  products</h1>
      {
        products.map((i: ProductType) => (
          <>
            <ProductTrack item={i}/>
          </>
        ))
      }
    </Container>
  )
}

export default AllProducts;