import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import AddUser from '../../components/UserSet/AddUser';
import AllUsers from '../../components/UserSet/AllUsers';
import { loadGetUsersRequest } from '../../store/ducks/users/actions';

import { Container } from './styles';

const Users = () => {

  const dispatch = useDispatch()
  const tokenStorage = localStorage.getItem('token')

  useEffect(() => {
    if (tokenStorage) {
      dispatch(loadGetUsersRequest(tokenStorage))
    }
  }, [])
  
  return (
    <Container>
      <div className="flex-all">
        <Header />
        <div className="flex">
          <SideBar />
          <div className="content">
            <AddUser />
            <AllUsers />
          </div>
        </div>
      </div>
      <img src="images/bg-stars.svg" alt="shiny starts" className="starts"/>
      <img src="images/pattern-hills.svg" alt="Hills" className="hills"/>
    </Container>
  );
}

export default Users;