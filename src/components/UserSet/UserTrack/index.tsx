import React from 'react';
import { useDispatch } from 'react-redux';
import { loadDeleteUserRequest } from '../../../store/ducks/users/actions';
import { UserType } from '../../../store/ducks/users/types';
import { MdDeleteForever } from "react-icons/md";
import { Container } from './styles';

export interface UserTrackProps {
  user: UserType
}

const UserTrack = (props: UserTrackProps) => {

  const { id, role, name, email } = props.user
  const dispatch = useDispatch()

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
        <div className="left">
          <p>{name}</p>
          <p>{email}</p>
        </div>
        <div className="right">
          <p className={`role ${role}`}>{role}</p>
          <MdDeleteForever onClick={()=>deleteUser(id)}/>
        </div>
      </div>
    </Container>
  );
}

export default UserTrack;