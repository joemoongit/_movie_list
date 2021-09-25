import React, { useEffect, useContext } from 'react';
import MovieList from './MovieList';
import { SearchContext } from '../SearchContext';
import lists from '../../data/data';

const MovieLists = () => {
  const query = useContext(SearchContext);

  return (
    <div>
      {
        query &&
        <MovieList list={{
          id: '0',
          name: 'Search Results:',
          url: `https://api.themoviedb.org/3/search/movie?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&query=${query}&page=1&include_adult=false`
        }}
        id={'0'} />
      }
      {
        lists.map((list) => (
          <MovieList list={list} key={list.id} id={list.id} />
        ))
      }
    </div>
  );
}

export default MovieLists;
