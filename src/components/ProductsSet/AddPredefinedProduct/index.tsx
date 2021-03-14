import React from 'react';
import { useDispatch } from 'react-redux';
import { loadPostProductsRequest } from '../../../store/ducks/products/actions';
import { productsArray } from '../../../utils/objectsArrays';
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";


const AddPredefinedProduct = () => {
  const dispatch = useDispatch()
  const tokenStorage = localStorage.getItem('token')


  const addRandomItem = () => {
    const headerItem = {
      token: tokenStorage,
      item: productsArray[Math.floor(Math.random() * productsArray.length)]
    }

    dispatch(loadPostProductsRequest(headerItem))
  }
  
  return (
    <GiPerspectiveDiceSixFacesRandom onClick={addRandomItem}/>
  )
}

export default AddPredefinedProduct;