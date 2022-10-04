/* eslint-disable react/prop-types */

export default function SearchResultCard({ pokemon, infiniteScrollRef }) {
  return (
    <div ref={infiniteScrollRef}>
      <h1>{pokemon.pokemon} <span>hp{pokemon.hp}</span></h1>
      <img src={pokemon.url_image}/>
      <p>{pokemon.type_1}</p>
    </div>
  );
}
