import React from 'react';

import { Container } from './styles';

interface InstructionsProps {
  name?: string | null
  role?: string | null
}

const Instructions = (props: InstructionsProps) => {
  const { name, role } = props

  return (
    <Container>
      <h1>Olá <strong>{name}</strong>,</h1>
        <p>Reparamos que você é um<strong>e</strong> cliente do tipo <strong>{role}</strong>, muito legal não é?</p>
        {
          role === 'admin' &&
          <div>
            <p>Isso quer dizer que você tem acesso as listas de <strong>Produtos</strong> e <strong>Usuários</strong>, também nossos números em <strong>Estatísticas</strong>, tem o poder de cadastrar produtos e também novos usuários, contudo você também pode exclui-los.</p>
            <p>Você é quem decide.</p>
          </div>
        }
        {
          role === 'editor' &&
          <div>
            <p>Isso quer dizer que você tem total acesso aos <strong>Produtos</strong> e consegue inclusive adicionar produtos novos. Além disso você pode ver alguns de nossos números em <strong>Estatísticas</strong>.</p>
          </div>
        }
        
    </Container>
  );
}

export default Instructions;