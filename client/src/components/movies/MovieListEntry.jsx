import React from 'react';

const MovieListEntry = ({movie, onWatch, describe}) => {
  const style = {
    float: 'left',
    padding: '0.1em',
  };
  const style2 = {
    // display: 'flex',
    width: '10em',
  };
  return (
    <div style={style}>
      <div onClick={() => describe(movie)}>
        <img style={style2} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        {/* {movie.title} */}
      </div>
      {/* <button onClick={() => onWatch(movie)}><span>Watch</span></button> */}
    </div>
  );
};

export default MovieListEntry;
