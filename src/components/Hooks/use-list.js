import { useContext } from 'react';
import { ListsContext } from '../../Context/ListContext';
import { createList } from '../../Services/list';

export default function useList() {
  const { lists, setLists, error, setError } = useContext(ListsContext);

  const addItem = async (item) => {
    const { data, error } = await createList(item);
    if (error) {
      setError(error.message);
    } else {
      setLists((lists) => [...lists, data]);
      setError(null);
    }
  };
  return { lists, error, addItem };
}
