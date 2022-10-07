import useList from '../Hooks/use-list';
import AddItemForm from '../Projects/Forms/AddItemForm';

export default function Lists() {
  const { lists, addItem } = useList();
  console.log('lists', lists);
  // if (!lists) return null;

  const handleAdd = async (description) => {
    await addItem({ description, completed: false });
  };

  return (
    <section>
      <h1>List Page</h1>

      <AddItemForm onAdd={handleAdd} />
    </section>
  );
}
