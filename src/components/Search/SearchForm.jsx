/* eslint-disable react/prop-types */
import useSearchForm from '../Hooks/use-search-form';
import {
  FormButton,
  InputControl, SelectControl
} from '../Projects/Forms/FormControl.jsx';

export default function SearchForm({ onSubmit }) {

  const { pokemon, setPokemon, type_1, setType_1 } = useSearchForm();
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    onSubmit(formDataObject);
  };

  return (
    <form onSubmit={formSubmit}>

      <InputControl
        label="Search by Poke'mon name"
        type="text"
        name="pokemon"
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
      />
      <SelectControl 
        label="by type"
        name="type"
        placeholder="Select your poke-type"
        value={type_1}
        onChange={(e) => setType_1(e.target.value)}
      >
        <option defaultValue disabled hidden></option>
        <option value={'dragon'}>Dragon</option>
        <option value={'bug'}>Bug</option>
      </SelectControl>
      <FormButton type="submit">Search</FormButton>
    </form>
  );
}
