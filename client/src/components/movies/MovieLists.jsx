import React, { useState, useContext } from 'react';
import MovieList from './MovieList';
import { SearchContext, WatchContext } from '../Context';
import lists from '../../data/data';

const MovieLists = () => {
  const query = useContext(SearchContext);
  const { watched, watch } = useContext(WatchContext);

  return (
    <div>
      {
        watched &&
        <MovieList list={{
          id: '100',
          name: 'Watched:',
          url: 'https://api.themoviedb.org/3/search/movie?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&query=shrek&page=1&include_adult=false',
        }} />
      }
      {
        watch &&
        <MovieList list={{
          id: '101',
          name: 'To Watch:',
          url: 'https://api.themoviedb.org/3/search/movie?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&query=pirates&page=1&include_adult=false',
        }} />
      }
      {
        query &&
        <MovieList list={{
          id: '0',
          name: 'Search Results:',
          url: `https://api.themoviedb.org/3/search/movie?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&query=${query}&page=1&include_adult=false`
        }} />
      }
      {
        lists.map((list) => (
          <MovieList list={list} key={list.id} />
        ))
      }
    </div>
  );
}

export default MovieLists;
