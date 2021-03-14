import React from 'react';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { loadPostUserRequest } from '../../../store/ducks/users/actions';
import AddPredefinedUser from '../AddPredefinedUser';

import { Container } from './styles';

const AddUser = () => {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()

  const registerUser = (data: any) => {
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
      <form onSubmit={handleSubmit(registerUser)}>
        <h3>Novo colaborador</h3>
        <input name="name" type="text" placeholder="Nome" ref={register({ required:true })}/>
        <input name="email" type="email" placeholder="E-mail" ref={register({ required:true })}/>
        <input name="password" type="password" placeholder="Senha" ref={register({ required:true })}/>
        <input name="rePassword" type="password" placeholder="Confirme a senha" ref={register({ required:true })}/>

        <label>
          Editor
          <input type="radio" name="role" ref={register} value="editor" checked/>
        </label>
        <label>
          Admin
          <input type="radio" name="role" ref={register} value="admin"/>
        </label>

        <button>Enviar</button>
      </form>
      <div className="randomButton">
        <AddPredefinedUser />
      </div>
    </Container>
  )
}

export default AddUser;