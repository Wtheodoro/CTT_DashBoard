import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AllTypesReducer from '../../store/ducks/AllTypesReducers';
import { ProductType } from '../../store/ducks/products/types';

import { Container } from './styles';

const AllProducts = () => {
// const [products, setProducts] = useState<ProductType[]>([])

const products: ProductType[] = useSelector((state: AllTypesReducer) => state.reducerProducts.products)

console.log(' from all products', products)

  return (
    <Container>
      <h1>All  products</h1>
    </Container>
  )
}

export default AllProducts;