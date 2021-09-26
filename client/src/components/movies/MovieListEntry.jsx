import React, { useState } from "react";

const MovieListEntry = ({ movie, set }) => {
  const [hover, setHover] = useState(false);
  // const [ buttons, setButtons ] = useState(false);

  const style = {
    float: "left",
    padding: "0.1em",
    position: "relative",
  };

  const styleImg = {
    width: "10em",
    filter: hover ? "contrast(80%)" : "contrast(100%)",
    opacity: hover ? "0.7" : "1.0",
    position: "relative",
  };

  const styleButton = {
    position: "absolute",
    transform: "translate(-60em, 2em)",
    // display: buttons ? 'inline' : 'none',
  };

  const onHover = () => {
    setHover(!hover);
  };

  const onClick = () => {
    // setButtons(!buttons);
    set(movie);
  };

  return (
    <div style={style}>
      <img
        onClick={onClick}
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        style={styleImg}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
      {/* {

        buttons &&
        <button style={styleButton} type="submit">Recommend</button>
        // <input style={styleButton} type="submit" value="Similar" />
      } */}
    </div>
  );
};

export default MovieListEntry;
