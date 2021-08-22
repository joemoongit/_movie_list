import React from 'react';

var MovieListEntry = ({movie, onWatch, describe}) => (
  <div>
    <div onClick={() => describe(movie)}>
      {movie.title}
    </div>
    <button onClick={() => onWatch(movie)}><span>Watch</span></button>
  </div>
);

export default MovieListEntry;
