import React, { useEffect, useState } from 'react';

import { Container } from './styles';

interface InstructionsProps {
  name?: string
  role?: string
}

const Instructions = (props: InstructionsProps) => {
  const { name, role } = props

  return (
    <Container>
      <h1>Olá {name},</h1>
        <p>Reparamos que você é ume cliente do tipo <strong>{role}</strong>, muito legal não é?</p>
        {
          role === 'admin' &&
          <div>
            <p>Isso quer dizer que você tem acesso as listas de produtos e usuários, tem o poder de cadastrar produtos e também novos usuários, contudo você também pode exclui-los.</p>
            <p>Você é quem decide.</p>
          </div>
        }
        {
          role === 'editor' &&
          <div>
            <p>Isso quer dizer que você tem total acesso aos produtos e consegue inclusive adicionar produtos novos.</p>
          </div>
        }
        
    </Container>
  );
}

export default Instructions;