import React, { useState } from 'react';

const MovieListEntry = ({ movie }) => {
  const [ hover, setHover ] = useState(false);

  const style = {
    float: 'left',
    padding: '0.1em',
  };

  const styleImg = {
    width: '10em',
    filter: hover ? 'contrast(80%)' : 'contrast(100%)',
    opacity: hover ? '0.7' : '1.0',
  };

  const onHover = () => {
    setHover(!hover);
  };

  const onClick = () => {
  };

  return (
    <div style={style}>
      <div
        onClick={onClick}
        onMouseEnter={onHover}
        onMouseLeave={onHover}>
        <img style={styleImg} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      </div>
    </div>
  );
};

export default MovieListEntry;
