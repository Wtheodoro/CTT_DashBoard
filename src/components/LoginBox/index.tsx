import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';
import AllTypesReducer from '../../store/ducks/AllTypesReducers';
import { loadSignInRequest } from '../../store/ducks/signIn/actions';
import { Container } from './styles';

const LoginBox = () => {

  const errorMessage: string = useSelector((state: AllTypesReducer) => state.reducerSignIn.errorMessage)

  const tokenFromGlobal: string = useSelector((state: AllTypesReducer) => state.reducerSignIn.token)

  const tokenFromStorage = localStorage.getItem('token')

  const dispatch = useDispatch()

  const inputEmail = useRef<HTMLInputElement>(null)
  const inputPassword = useRef<HTMLInputElement>(null)

  const signIn = () => {
    const user = {
      email: inputEmail.current?.value,
      password: inputPassword.current?.value
    }
    dispatch(loadSignInRequest(user))
  }

  return (
      <Container>
        <h1>Login</h1>
         <input type="email" placeholder="E-mail" ref={inputEmail}/>
         <input type="password" placeholder="Senha" ref={inputPassword}/>
         <button onClick={signIn}>Login</button>
         {
           errorMessage &&
           <p>E-mail e/ou senha invalidos</p>
         }     
         {/* {
           tokenFromGlobal &&
           <Redirect to="/home" />
         } */}
         {
           tokenFromStorage &&
           <Redirect to="/home" />
         }
      </Container>
  )
}

export default LoginBox;