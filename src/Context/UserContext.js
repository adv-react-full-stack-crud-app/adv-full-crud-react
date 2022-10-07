import { createContext, useEffect, useState, useContext } from 'react';
import { verifyUser } from '../Services/auth';

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});

  const verify = async () => {
    try {
      const res = await verifyUser();
      console.log(res.ok);
      setUser(res.user);
    } catch (error) {
      return null;
    }
    
    // const res = await verifyUser();
    // setUser(res.data);
  };

  useEffect(() => {
    verify();
  }, []);

  const stateAndSetters = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={stateAndSetters}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const { user, setUser } = useContext(UserContext);
  return [user, setUser];
}
