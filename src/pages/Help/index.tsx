import React from 'react';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { Redirect } from 'react-router-dom';
import ButtonLink from '../../components/ButtonLink';

import { Container } from './styles';

const Help = () => {
  const userName = localStorage.getItem('userName')
  const userRole = localStorage.getItem('userRole')

  return (
    <Container>
      <div className="content">
        <h1>Olá novamente <strong>{userName}</strong>,</h1>
        <p>Construimos as coisas intuitivas por aqui, mas talvez você tenha se deparado com um ícone que te deixou com um "<strong>?</strong>" na cabeça. Mas calma, vamos te explicar agora e aposto que vai gostar.</p>
        <GiPerspectiveDiceSixFacesRandom />
        <p>Por aqui chamamos esse ícone de <strong>Random</strong>, é uma ferramenta que ajuda você a testar a nossa plataforma. O <strong>Random</strong> fica responsável por preencher os dados necessários para adicionar um novo <strong>produto </strong>
        {
          userRole === 'admin' 
          ?
          <> e também novos <strong>usuários</strong> de forma aleatória, para os <strong>usuários</strong> gerados com o <strong>Random</strong> a senha de acesso será sempre <strong>randomuser</strong>, fácil de lembrar.</>
          :
          <> de forma aleatória.</>
        }
        </p>
        <p>Muito legal não é mesmo? Sabiamos que iria gostar!</p>
        <ButtonLink linkTo='/home'>Entendi !</ButtonLink>
      </div>
      <img src="images/bg-stars.svg" alt="shiny starts" className="starts"/>
      <img src="images/pattern-hills.svg" alt="Hills" className="hills"/>

      {
        !userName &&
        <Redirect to="/" />
      }
      
    </Container>
  )
}

export default Help;