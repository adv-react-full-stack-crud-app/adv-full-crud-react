/* eslint-disable react/prop-types */
import SearchResultCard from './SearchResultCard';

export default function SearchResults({ results, infiniteScrollRef }) {
  return (
    <ul>
      {results.map((result, i) => {
        const ref = i == results.length - 3 ? infiniteScrollRef : undefined;
        return (
          <SearchResultCard
            key={result._id}
            pokemon={result}
            infiniteScrollRef={ref}
          />
        );
      })}
    </ul>
  );
}
