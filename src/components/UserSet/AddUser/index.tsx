import React from 'react';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { loadPostUserRequest } from '../../../store/ducks/users/actions';

import { Container } from './styles';

const AddUser = () => {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()

  const registrUser = (data: any) => {
    if (data.password === data.rePassword) {
      const headerUser = {
        token: localStorage.getItem('token'),
        user: data
      }

      dispatch(loadPostUserRequest(headerUser))
    }
  }
  return ( 
    <Container>
      <form onSubmit={handleSubmit(registrUser)}>
        <h3>Novo colaborador</h3>
        <input name="name" type="text" placeholder="Nome" ref={register({ required:true })}/>
        <input name="email" type="email" placeholder="E-mail" ref={register}/>
        <input name="password" type="password" placeholder="Senha" ref={register}/>
        <input name="rePassword" type="password" placeholder="Confirme a senha" ref={register}/>

        <label>Tipo do registro</label>
        <input type="radio" name="role" ref={register} value="editor" checked/>
        <input type="radio" name="role" ref={register} value="admin"/>

        <button>Enviar</button>
      </form>
    </Container>
  )
}

export default AddUser;