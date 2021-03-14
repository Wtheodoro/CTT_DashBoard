import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ButtonLink from '../../components/ButtonLink';
import Instructions from '../../components/Instructions';


import { Container } from './styles';

const Home = () => {
  const [userName, setUserName] = useState<string>()
  const [userRole, setUserRole] = useState<string>()

  const token = localStorage.getItem('token')

  useEffect(() => {
    const userNameStorage = localStorage.getItem('userName')
    const userRoleStorage = localStorage.getItem('userRole')

    if (userNameStorage && userRoleStorage) {
      setUserName(userNameStorage)
      setUserRole(userRoleStorage)
    }
  }, [])
  
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