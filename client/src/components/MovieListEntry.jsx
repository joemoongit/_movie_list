import React from 'react';

var MovieListEntry = ({movie, onWatch}) => (
  <div>
    <div>
      {movie.title}
    </div>
    <button onClick={() => onWatch(movie)}><span>Watch</span></button>
  </div>
);

export default MovieListEntry;
