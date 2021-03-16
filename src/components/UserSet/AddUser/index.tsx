import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { loadPostUserRequest } from '../../../store/ducks/users/actions';
import AddPredefinedUser from '../AddPredefinedUser';

import { Container } from './styles';

const AddUser = () => {
  const [passwordNotEqual, setPasswordNotEqual] = useState<boolean>(false)
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()

  const registerUser = (data: any) => {
    if (data.password === data.rePassword) {
      const headerUser = {
        token: localStorage.getItem('token'),
        user: data
      }

      dispatch(loadPostUserRequest(headerUser))
    } else {
      setPasswordNotEqual(true)
    }
  }
  return ( 
    <Container>
      <form onSubmit={handleSubmit(registerUser)}>
        <div>
          <input name="name" type="text" placeholder="Nome" ref={register({ required:true })}/>
          { errors.name && <p className="errors">*Obrigatorio</p> }
        </div>

        <div>
          <input name="email" type="email" placeholder="E-mail" ref={register({ required:true })}/>
          { errors.email && <p className="errors">*Verifique o E-mail</p> }
        </div>

        <div>
          <input name="password" type="password" placeholder="Senha" ref={register({ required:true })}/>
          { errors.password && <p className="errors">*Obrigatório</p> }
        </div>

        <div>
          <input name="rePassword" type="password" placeholder="Confirme a senha" ref={register({ required:true })}/>
          { passwordNotEqual === true && <p className="errors">*As senhas devem ser iguais</p> }
        </div>

        <label>
          Editor
          <input type="radio" name="role" ref={register} value="editor" defaultChecked/>
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