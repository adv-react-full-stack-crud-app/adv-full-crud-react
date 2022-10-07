import { useState } from 'react';
import { FormButton, InputControl } from './FormControl';



export default function AddItemForm({ onAdd }) {

  const [value, setValue] = useState('');

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onAdd(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputControl 
        label="Chore"
        value={value}
        onChange={handleChange}
      />
      <FormButton>Add Item</FormButton>
    </form>
  );
}
