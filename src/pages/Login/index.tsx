import React from 'react';
import LoginBox from '../../components/LoginBox';

import { Container } from './styles';

const Login = () => {
  return (
    <Container>
       <LoginBox />
      <img src="images/bg-stars.svg" alt="shiny starts" className="starts"/>
      <img src="images/pattern-hills.svg" alt="Hills" className="hills"/>
    </Container>
  );
}

export default Login;