import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const SideBar  = () => {
  const userRole = localStorage.getItem('userRole')

  return (
    <Container>
     <Link to="/home">Home</Link>
     {
       userRole === 'admin' &&
       <Link to="/users">Usuários</Link>
     }
     <Link to="/products">Produtos</Link>
    </Container>
  )
}

export default SideBar;