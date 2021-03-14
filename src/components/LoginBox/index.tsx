import { sign } from 'crypto';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { loadSignInRequest } from '../../store/ducks/signIn/actions';
import { Container } from './styles';

const LoginBox = () => {
  const [hasPermission, setHasPermission] = useState<boolean>(false)
  const [render, setRender] = useState<boolean>(false)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setHasPermission(true)
    }
  }, [render])


  const dispatch = useDispatch()
  const inputEmail = useRef<HTMLInputElement>(null)
  const inputPassword = useRef<HTMLInputElement>(null)

  const signIn = () => {
    const user = {
      email: inputEmail.current?.value,
      password: inputPassword.current?.value
    }
    dispatch(loadSignInRequest(user))
    // setHasPermission(true)
    setRender(!render)
  }

  return (
      <Container>
        <h1>Login</h1>
         <input type="email" placeholder="E-mail" ref={inputEmail}/>
         <input type="password" placeholder="Senha" ref={inputPassword}/>
         <button onClick={signIn}>Login</button>         
         {
           hasPermission &&
           <Redirect to="/home" />
         }
      </Container>
  )
}

export default LoginBox;