import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

interface ButtonLinkProps {
  children: string
  linkTo: string
}

const ButtonLink = (props: ButtonLinkProps) => {

  const { linkTo, children } = props
  
  return (
    <Container>
      <Link to={linkTo}>{children}</Link>
    </Container>
  );
}

export default ButtonLink;