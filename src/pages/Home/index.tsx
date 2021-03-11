import React from 'react';
import ButtonLink from '../../components/ButtonLink';

// import { Container } from './styles';

const Home = () => {
  return (
    <>
      <h1>Olá %Nome do global%</h1>
      <ButtonLink linkTo='/users'>Usuários</ButtonLink>
      <ButtonLink linkTo='/products'>Produtos</ButtonLink>
    </>
  )
}

export default Home;