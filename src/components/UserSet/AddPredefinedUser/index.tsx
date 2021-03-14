import React from 'react';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { loadPostUserRequest } from '../../../store/ducks/users/actions';
import { usersArray } from '../../../utils/objectsArrays';

const AddPredefinedUser = () => {
  const dispatch = useDispatch()
  const tokenStorage = localStorage.getItem('token')


  const addRandomUser = () => {
    const headerUser = {
      token: tokenStorage,
      user: usersArray[Math.floor(Math.random() * usersArray.length)]
    }

    dispatch(loadPostUserRequest(headerUser))
  }
  
  return (
    <GiPerspectiveDiceSixFacesRandom onClick={addRandomUser}/>
  )
}

export default AddPredefinedUser;