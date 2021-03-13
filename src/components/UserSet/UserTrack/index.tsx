import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loadDeleteUserRequest } from '../../../store/ducks/users/actions';
import { UserType } from '../../../store/ducks/users/types';

import { Container } from './styles';

export interface UserTrackProps {
  user: UserType
}

const UserTrack = (props: UserTrackProps) => {

  const { id, role, name } = props.user
  const dispatch = useDispatch()
  const userRole = localStorage.getItem('userRole')

  const deleteUser = (id?: number) => {
    console.log('funcao deletar acionada', id)

    const headerId = {
      token: localStorage.getItem('token'),
      id: id
    }

    dispatch(loadDeleteUserRequest(headerId))
  }


  return (
    <Container>
      <div className="track">
        <p>{id}</p>
        <p>{role}</p>
        <p>{name}</p>
        <button onClick={()=>deleteUser(id)}>X</button>
      </div>
      {
        userRole !== 'admin' &&
        <Redirect to="/home"/>
      }
    </Container>
  );
}

export default UserTrack;