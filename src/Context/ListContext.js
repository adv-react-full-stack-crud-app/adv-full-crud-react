import { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getList } from '../Services/list';

export const ListsContext = createContext();

export default function ListProvider({ children }) {
  const [lists, setLists] = useState(null);
  const [error, setError] = useState(null);

  const addList = (item) => {
    setLists((items) => [...items, item]);
  };

  const fetchList = async () => {
    const { data, error } = await getList();

    if (error) {
      console.log(error);
    }
    if (data) {
      setLists(data);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const stateAndSetters = {
    lists,
    setLists,
    error,
    setError,
    addList,
    fetchList,
  };

  return (
    <ListsContext.Provider value={stateAndSetters}>
      {children} || <Outlet />
    </ListsContext.Provider>
  );
}
