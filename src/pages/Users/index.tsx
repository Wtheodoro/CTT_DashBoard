import React from 'react';
import Scenery from '../../components/Scenery';
import SideBar from '../../components/SideBar';

import { Container } from './styles';

const Users = () => {
  return (
    <Container>
      <SideBar/>
      <div className="content">
        <h1>hi from users</h1>
      </div>
        <img src="images/bg-stars.svg" alt="shiny starts" className="starts"/>
        <img src="images/pattern-hills.svg" alt="Hills" className="hills"/>
    </Container>
  );
}

export default Users;