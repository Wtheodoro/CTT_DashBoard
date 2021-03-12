import React, { useEffect, useState } from 'react';
import ButtonLink from '../../components/ButtonLink';

import { Container } from './styles';

const Home = () => {
  const [userName, setUserName] = useState<string>()
  const [userRole, setUserRole] = useState<string>()

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
        <h1>Olá {userName},</h1>
        <p>Reparamos que você é ume cliente do tipo <strong>{userRole}</strong>, muito legal não é?</p>
        <p>Isso quer dizer que você tem acesso as listas de produtos e usuários, tem o poder de cadastrar produtos e também novos usuários, contudo você também pode exclui-los.</p>
        <p>Você é quem decide.</p>
        <ButtonLink linkTo='/users'>Usuários</ButtonLink>
        <ButtonLink linkTo='/products'>Produtos</ButtonLink>
      </div>
      <img src="images/bg-stars.svg" alt="shiny starts" className="starts"/>
      <img src="images/pattern-hills.svg" alt="Hills" className="hills"/>
    </Container>
  )
}

export default Home;