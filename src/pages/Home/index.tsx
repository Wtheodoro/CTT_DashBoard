import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ButtonLink from '../../components/ButtonLink';
import AllTypesReducer from '../../store/ducks/AllTypesReducers';

import { Container } from './styles';

const Home = () => {
  const [userName, setUserName] = useState<string>()

  useEffect(() => {
    const userNameStorage = localStorage.getItem('userName')

    if (userNameStorage) {
      setUserName(userNameStorage)
    }
  }, [])
  
  return (
    <Container>
      <div className="content">
        <h1>Olá {userName}</h1>
        <ButtonLink linkTo='/users'>Usuários</ButtonLink>
        <ButtonLink linkTo='/products'>Produtos</ButtonLink>
      </div>
      <img src="images/bg-stars.svg" alt="shiny starts" className="starts"/>
      <img src="images/pattern-hills.svg" alt="Hills" className="hills"/>
    </Container>
  )
}

export default Home;