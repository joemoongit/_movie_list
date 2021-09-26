import React, { useState, useContext } from 'react';
import MovieList from './MovieList';
import { SearchContext, MenuContext, MovieContext } from '../Context';
import lists from '../../data/data';

const MovieLists = ({ set }) => {
  const query = useContext(SearchContext);
  const { watched, watch, rec, sim } = useContext(MenuContext);
  const movie = useContext(MovieContext);

  return (
    <div>
      {/* {
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
      } */}
      {/* {
        rec && Object.keys(movie).length !== 0 &&
        <MovieList list={{
          id: '100',
          name: `Recommendations for ${movie.title}:`,
          url: `https://api.themoviedb.org/3/movie/${movie.id}/recommendations?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&page=1`,
        }}
        set={set} />
      } */}
      {
        sim && Object.keys(movie).length !== 0 &&
        <MovieList list={{
          id: '101',
          name: `Similar to ${movie.title}:`,
          url: `https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&page=1`,
        }}
        set={set} />
      }
      {
        query &&
        <MovieList list={{
          id: '0',
          name: 'Search Results:',
          url: `https://api.themoviedb.org/3/search/movie?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&query=${query}&page=1&include_adult=false`
        }}
        set={set} />
      }
      {
        lists.map((list) => (
          <MovieList list={list} key={list.id} set={set} />
        ))
      }
    </div>
  );
}

export default MovieLists;
