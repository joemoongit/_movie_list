import React from 'react';
import MovieList from './MovieList';
import lists from '../../data/data';

const MovieLists = () => {
  return (
    <div>
      {
        lists.map((list) => (
          <MovieList list={list} key={list.id} id={list.id} />
        ))
      }
    </div>
  );
}

export default MovieLists;
