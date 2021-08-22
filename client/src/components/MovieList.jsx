import React from 'react';
import PropTypes from 'prop-types';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = ({movies, onWatch}) => (
  <div>
    {movies.map((movie, index) =>
      <MovieListEntry onWatch={onWatch} movie={movie} key={index}/>
    )}
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;
