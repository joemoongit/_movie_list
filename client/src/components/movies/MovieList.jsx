import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import MovieListEntry from "./MovieListEntry";

const MovieList = ({ list, set }) => {
  const [movies, setMovies] = useState([]);

  const read = () => {
    const options = {
      method: "get",
      url: list.url,
    };
    axios(options)
      .then((response) => setMovies(response.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    read();
  }, []);

  const scrollLeft = (id) => {
    event.preventDefault();
    $(`#content${id}`).animate(
      {
        scrollLeft: "-=490",
      },
      "slow"
    );
  };

  const scrollRight = (id) => {
    event.preventDefault();
    $(`#content${id}`).animate(
      {
        scrollLeft: "+=490",
      },
      "slow"
    );
  };

  const style = {
    display: "flex",
    margin: "0.5em",
    overflowX: "hidden",
    zIndex: "0",
  };

  const style2 = {
    float: "left",
    zIndex: "1",
    width: "1em",
    position: "relative",
    top: "50%",
    transform: "translateY(700%)",
  };

  const style3 = {
    float: "right",
    zIndex: "1",
    width: "1em",
    position: "relative",
    top: "50%",
    transform: "translateY(-900%)",
  };

  return (
    movies.length !== 0 && (
      <div>
        <h4 style={{ marginLeft: "0.5em" }}>{list.name}</h4>
        <div>
          <img
            onClick={() => scrollLeft(list.id)}
            style={style2}
            src="./images/left.png"
            alt=""
          />
          <div id={`content${list.id}`} style={style}>
            {movies.map((movie) => (
              <MovieListEntry movie={movie} key={movie.id} set={set} />
            ))}
          </div>
          <img
            onClick={() => scrollRight(list.id)}
            style={style3}
            src="./images/right.png"
            alt=""
          />
        </div>
      </div>
    )
  );
};

export default MovieList;
