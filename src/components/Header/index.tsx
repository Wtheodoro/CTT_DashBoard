import React, { useState } from 'react';
import { useEffect } from 'react';

import { Container } from './styles';

const Header = () => {
  const [userName, setUserName] = useState<string>()
  const [userRole, setUserRole] = useState<string>()

  useEffect(() => {
    const userNameStorage = localStorage.getItem('userName')
    const userRoleStorage = localStorage.getItem('userRole')

    if (userNameStorage && userRoleStorage) {
      setUserName(userNameStorage)
      setUserRole(userRoleStorage)
    }
  }, [])

  return (
    <Container>
      <div className="content">
        <p>{userName}</p>
        <p>{userRole}</p>
      </div>
    </Container>
  );
}

export default Header;