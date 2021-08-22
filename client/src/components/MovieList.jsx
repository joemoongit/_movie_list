import React from 'react';
import PropTypes from 'prop-types';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = ({movies, onWatch, all, watched, toWatch, bak, describe}) => (
  <div>
    {
      !bak
      ?
      <>
      <button onClick={() => all()}>All</button>
      <button onClick={() => watched(true)}>Watched</button>
      <button onClick={() => watched(false)}>To Watch</button>
      </>
      :
      null
    }
    {movies.map((movie, index) =>
      <MovieListEntry onWatch={onWatch} movie={movie} key={index} describe={describe}/>
    )}
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;
