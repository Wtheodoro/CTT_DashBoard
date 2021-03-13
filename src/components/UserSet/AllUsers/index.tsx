import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AllTypesReducer from '../../../store/ducks/AllTypesReducers';
import { UserType } from '../../../store/ducks/users/types';
import UserTrack from '../UserTrack';
import { Container } from './styles';

const AllUsers = () => {

  const [users, setUsers] = useState<UserType[]>()
  const usersFromReducer: UserType[] = useSelector((state: AllTypesReducer) => state.reducerUsers.users)

  useEffect(() => {
    setUsers(usersFromReducer)
  }, [usersFromReducer])

  return (
    <Container>
      <h1>All Users</h1>
      <div className="content">
        {
          users?.map((i: UserType) => (
            <>
              <UserTrack user={i} key={i.id}/>
            </>
          ))
        }
      </div>
    </Container>
  )
}

export default AllUsers;