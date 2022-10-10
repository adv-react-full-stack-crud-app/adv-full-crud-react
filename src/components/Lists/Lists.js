import { useContext } from 'react';
import { ListsContext } from '../../Context/ListContext';
import useList from '../Hooks/use-list';
import AddItemForm from '../Projects/Forms/AddItemForm';

export default function Lists() {
  const { fetchList } = useContext(ListsContext);
  const { lists, addItem, deleteItem } = useList();
  console.log('lists', lists);
  if (!lists) return null;

  const handleAdd = async (description) => {
    await addItem({ description, completed: false });
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    await fetchList();
  };

  return (
    <section>
      <h1>List Page</h1>

      <AddItemForm onAdd={handleAdd} />

      <ul>
        {lists &&
          lists.map((list, i) => (
            <li key={list.id + i}>
              {console.log('list.id', list.id)}
              {list.description}
              <button onClick={() => handleDelete(list.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </section>
  );
}
