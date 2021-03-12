import React from 'react';
import { ProductType } from '../../store/ducks/products/types';
import { Container } from './styles';

export interface ProductTrackProps {
  item: ProductType
}

const ProductTrack = (props: ProductTrackProps) => {

  const { image, price, title, id } = props.item
  return (
    <Container>
      <p>{id}</p>
      <img src={image} alt={title}/>
      <p>{title}</p>
      <p>{price}</p>
    </Container>
  );
}

export default ProductTrack;