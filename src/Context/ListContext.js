import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
// import { createList } from '../Services/list';

export const ListsContext = createContext();

export default function ListProvider({ children }) {
  const [lists, setLists] = useState(null);
  const [error, setError] = useState(null);

  const stateAndSetters = {
    lists,
    setLists,
    error,
    setError,
  };

  // changa

  return (
    <ListsContext.Provider value={stateAndSetters}>
      {children} || <Outlet />
    </ListsContext.Provider>
  );
}
