import React from 'react';
import { useDispatch } from 'react-redux';
import { loadDeleteProductRequest } from '../../../store/ducks/products/actions';
import { ProductType } from '../../../store/ducks/products/types';
import { Container } from './styles';
import { MdDeleteForever } from "react-icons/md";


export interface ProductTrackProps {
  item: ProductType
}

const ProductTrack = (props: ProductTrackProps) => {

  const { image, price, title, id } = props.item
  const dispatch = useDispatch()
  const userRole = localStorage.getItem('userRole')

  const deleteItem = (id?: number) => {
    const headerId = {
      token: localStorage.getItem('token'),
      id: id
    }

    dispatch(loadDeleteProductRequest(headerId))
  }

  return (
    <Container>
      <div className="track">
        <img src={image} alt={title}/>
        <p className="title">{title}</p>
        <p className="price">{price}</p>
        {
          userRole === 'admin' &&
          <MdDeleteForever onClick={()=>deleteItem(id)}/>
        }
      </div>
    </Container>
  );
}

export default ProductTrack;