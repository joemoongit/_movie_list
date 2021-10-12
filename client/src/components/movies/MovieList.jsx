import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import $ from 'jquery';
import MovieListEntry from './MovieListEntry';
import { SearchContext, MenuContext } from '../Context';

const MovieList = ({
  list, set, dynamic, search
}) => {
  const [movies, setMovies] = useState([]);
  const query = useContext(SearchContext);
  const {
    rec, sim, movie, tv,
  } = useContext(MenuContext);
  const [hover, setHover] = useState(false);

  const read = () => {
    const options = {
      method: 'get',
      url: list.url,
    };
    axios(options)
      .then((response) => setMovies(response.data))
      .catch((err) => console.error(err));
  };

  const condition = search && dynamic ? [query, movie, tv] : dynamic ? [movie, tv] : [tv];

  useEffect(() => {
    read();
  }, condition);

  const onHover = () => {
    setHover(!hover);
  };

  const scrollLeft = (id) => {
    $(`#content${id}`).animate(
      {
        scrollLeft: '-=490',
      },
      'slow',
    );
  };

  const scrollRight = (id) => {
    $(`#content${id}`).animate(
      {
        scrollLeft: '+=490',
      },
      'slow',
    );
  };

  const style = {
    display: 'flex',
    margin: '0.5em',
    overflowX: 'hidden',
    zIndex: '0',
  };

  const style2 = {
    float: 'left',
    zIndex: '1',
    width: '1em',
    position: 'relative',
    top: '50%',
    transform: 'translateY(700%)',
    cursor: hover ? 'pointer' : 'notAllowed',
  };

  const style3 = {
    float: 'right',
    zIndex: '1',
    width: '1em',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-900%)',
    cursor: hover ? 'pointer' : 'notAllowed',
  };

  return (
    movies.length > 0
    ?
    (
      <div>
        <h4 style={{ marginLeft: "0.5em" }}>{list.name}</h4>
        <div>
          <img
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            onClick={() => scrollLeft(list.id)}
            style={style2}
            src="./images/left.png"
            alt="Left Arrow"
          />
          <div id={`content${list.id}`} style={style}>
            {
              movies.map((movie) => (
                <MovieListEntry movie={movie} key={movie.id} set={set} />
              ))
            }
          </div>
          <img
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            onClick={() => scrollRight(list.id)}
            style={style3}
            src="./images/right.png"
            alt="Right Arrow"
          />
        </div>
      </div>
    )
    :
    tv && rec
    ?
    <h4 style={{ marginLeft: "0.5em" }}>No Recommendations for {movie.name || movie.title}</h4>
    :
    tv && sim
    ?
    <h4 style={{ marginLeft: "0.5em" }}>No Similar TV Shows for {movie.name || movie.title}</h4>
    :
    !tv && rec
    ?
    <h4 style={{ marginLeft: "0.5em" }}>No Recommendations for {movie.title || movie.name}</h4>
    :
    !tv && sim
    ?
    <h4 style={{ marginLeft: "0.5em" }}>No Similar Movies for {movie.title || movie.name}</h4>
    :
    null
  );
};

export default MovieList;
