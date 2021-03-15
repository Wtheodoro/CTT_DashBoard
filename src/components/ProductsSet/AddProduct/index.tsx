import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loadPostProductsRequest } from '../../../store/ducks/products/actions';
import AddPredefinedProduct from '../AddPredefinedProduct';

import { Container } from './styles';

const AddProduct = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()


  const registerProduct = (data: any) => {
    const item = {
      title: data.title,
      price: `R$ ${data.price}`,
      description: data.description,
      image: data.image
    }

    const headerItem = {
      token: localStorage.getItem('token'),
      item: item
    }
    dispatch(loadPostProductsRequest(headerItem))
  }
  
  return (
    <Container>
      <form onSubmit={handleSubmit(registerProduct)}>
        <p>Novo produto. Todos os campos são obrigatórios.</p>
        <input name="title" type="text" placeholder="Nome do produto" ref={register({ required:true })}/>

        <input name="description" type="text" placeholder="Descrição" ref={register({ required:true })}/>

        <input name="price" type="number" step="0.01" placeholder="Preço" ref={register({ required:true })}/>

        <input name="image" type="text" placeholder="Link da imagem" ref={register({ required:true })}/>
        <button>Enviar</button>
      </form>
      <div className="randomButton">
        <AddPredefinedProduct/>
      </div>
    </Container>
  )
}

export default AddProduct;