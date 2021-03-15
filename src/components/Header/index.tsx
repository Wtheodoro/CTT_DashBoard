import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { loadSingOutRequest } from '../../store/ducks/signIn/actions';
import { Container } from './styles';

const Header = () => {
  const [userName, setUserName] = useState<string>()
  const [userRole, setUserRole] = useState<string>()

  const dispatch = useDispatch()

  useEffect(() => {
    const userNameStorage = localStorage.getItem('userName')
    const userRoleStorage = localStorage.getItem('userRole')

    if (userNameStorage && userRoleStorage) {
      setUserName(userNameStorage)
      setUserRole(userRoleStorage)
    }
  }, [])

  const clearStorage = () => {
    localStorage.clear()
    dispatch(loadSingOutRequest())
  }

  return (
    <Container>
      <p>{userName}</p>
      <p>{userRole}</p>
      <Link to="/" onClick={clearStorage}>Logout</Link>
    </Container>
  );
}

export default Header;