import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ButtonLink from '../../components/ButtonLink';
import Instructions from '../../components/Instructions';


import { Container } from './styles';

const Home = () => {
  const token = localStorage.getItem('token')
  const userName = localStorage.getItem('userName')
  const userRole = localStorage.getItem('userRole')
  
  return (
    <Container>
      <div className="content">
        <Instructions name={userName} role={userRole}/>
        {
          userRole === 'admin' &&
          <ButtonLink linkTo='/users'>Usuários</ButtonLink>
        }
        <ButtonLink linkTo='/products'>Produtos</ButtonLink>
        <ButtonLink linkTo='/statistics'>Estatísticas</ButtonLink>
      </div>
      <img src="images/bg-stars.svg" alt="shiny starts" className="starts"/>
      <img src="images/pattern-hills.svg" alt="Hills" className="hills"/>
      {
        !token &&
        <Redirect to="/"/>
      }
    </Container>
  )
}

export default Home;