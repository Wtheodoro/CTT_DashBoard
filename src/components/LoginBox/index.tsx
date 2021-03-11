import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { loadSignInRequest } from '../../store/ducks/signIn/actions';
import { Container } from './styles';

const LoginBox = () => {
  const [hasPermission, setHasPermission] = useState<boolean>(false)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setHasPermission(true)
    }
  }, [])


  const dispatch = useDispatch()
  const inputEmail = useRef<HTMLInputElement>(null)
  const inputPassword = useRef<HTMLInputElement>(null)

  const signIn = () => {
    const user = {
      email: inputEmail.current?.value,
      password: inputPassword.current?.value
    }
    dispatch(loadSignInRequest(user))
    setHasPermission(true)
  }

  return (
      <Container>
         <h1>Hi from login box</h1>
         <input type="text" ref={inputEmail}/>
         <input type="password" ref={inputPassword}/>
         <button onClick={signIn}>Logar</button>
         {
           hasPermission &&
           <Redirect to="/home" />
         }
      </Container>
  )
}

export default LoginBox;