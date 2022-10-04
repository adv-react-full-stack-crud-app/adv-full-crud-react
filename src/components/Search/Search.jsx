import useSearchResults from '../Hooks/use-search-results';
import { FormButton } from '../Projects/Forms/FormControl';
import SearchForm from './SearchForm.jsx';
import SearchResults from './SearchResults.jsx';

export default function Search() {
  const {
    infiniteScrollRef,
    nextPage,
    pokemon,
    setPokemon,
    searchResults,
    searchPokedex,
  } = useSearchResults();
  return (
    <section>
      <SearchForm
        pokemon={pokemon}
        setPokemon={setPokemon}
        onSubmit={searchPokedex}
      />
      <SearchResults 
        results={searchResults}
        infiniteScrollRef={infiniteScrollRef}
      />
      <FormButton onClick={nextPage}>More Pokemon!</FormButton>
    </section>
  );
}
