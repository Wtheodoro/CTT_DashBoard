import React from 'react';
import { useDispatch } from 'react-redux';
import { loadDeleteProductRequest } from '../../store/ducks/products/actions';
import { ProductType } from '../../store/ducks/products/types';
import { Container } from './styles';

export interface ProductTrackProps {
  item: ProductType
}

const ProductTrack = (props: ProductTrackProps) => {

  const { image, price, title, id } = props.item

  const dispatch = useDispatch()

  const deleteItem = (id?: number) => {
    console.log('função deleter acionada', id)

    const headerId = {
      token: localStorage.getItem('token'),
      id: id
    }

    dispatch(loadDeleteProductRequest(headerId))
  }

  return (
    <Container>
      <p>{id}</p>
      <img src={image} alt={title}/>
      <p>{title}</p>
      <p>{price}</p>
      <button onClick={()=>deleteItem(id)}>X</button>
    </Container>
  );
}

export default ProductTrack;