import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AllTypesReducer from '../../../store/ducks/AllTypesReducers';
import { ProductType } from '../../../store/ducks/products/types';
import ProductTrack from '../ProductTrack';

import { Container } from './styles';

const AllProducts = () => {

const [products, setProducts] = useState<ProductType[]>()
const productsFromReducer: ProductType[] = useSelector((state: AllTypesReducer) => state.reducerProducts.products)

useEffect(() => {
  setProducts(productsFromReducer)
}, [productsFromReducer])

  return (
    <Container>
      <h1>All  products</h1>
      <div className="content">
        {
          products?.map((i: ProductType) => (
            <>
              <ProductTrack item={i} key={i.id}/>
            </>
          ))
        }
      </div>
    </Container>
  )
}

export default AllProducts;