import React, { useState } from 'react';
import axios from 'axios';
import MovieLists from './movies/MovieLists';
import { SearchContext, MenuContext, MovieContext } from './Context.jsx';

const Search = () => {
  const [ query, setQuery ] = useState('');
  const [ watchedList, setWatchedList ] = useState(false);
  const [ watchList, setWatchList ] = useState(false);
  const [ recList, setRecList ] = useState(false);
  const [ simList, setSimList ] = useState(false);
  const [ movie, setMovie ] = useState({});

  const toggleOff = () => {
    setWatchedList(false);
    setWatchList(false);
    setRecList(false);
    setSimList(false);
    setMovie({});
  };

  const toggleWatchedList = () => {
    setWatchedList(!watchedList);
  };

  const toggleWatchList = () => {
    setWatchList(!watchList);
  };

  const toggleRecList = () => {
    setRecList(!recList);
  }

  const toggleSimList = () => {
    setSimList(!simList);
  };

  const set = (movie) => {
    setMovie(movie);
  }

  const style = {
    position: 'sticky',
    top: '0',
    listStyleType: 'none',
    backgroundColor: 'rgb(20,20,20)',
    padding: '0',
    margin: '0',
    zIndex: '2',
    textAlign: 'center',
    height: '3em',
  };

  const style2 = {
    display: 'inline-block',
    float: 'left',
    margin: '0.5em',
    padding: '0.15em',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  };

  const styleSearch = {
    display: 'inline-block',
    margin: '0.15em',
    padding: '0.15em',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  };

  const styleImg = {
    width: '3em',
    float: 'left',
  }

  let text = '';

  return (
    <div>
      <ul style={style}>
        <img style={styleImg} src="images/popcorn.png" alt="" />
        <li style={style2} onClick={toggleOff}>
          Home
        </li>
        {/* <li style={style2} onClick={toggleWatchedList}>
          Watched
        </li>
        <li style={style2} onClick={toggleWatchList}>
          To Watch
        </li> */}
        {/* <li style={style2} onClick={toggleRecList}>
          Recommendations
        </li> */}
        <li style={style2} onClick={toggleSimList}>
          Similar
        </li>
        <li style={styleSearch}>
          <input type="text" onChange={(e) => { text = e.target.value; }} />
          <input type="submit" onClick={(e) =>
            {
              e.preventDefault();
              setQuery(text);
            }} value="Search" />
        </li>
      </ul>
      <MovieContext.Provider value={movie}>
        <MenuContext.Provider value={{
          watched: watchedList,
          watch: watchList,
          rec: recList,
          sim: simList,
        }}>
          <SearchContext.Provider value={query}>
            <MovieLists set={set} />
          </SearchContext.Provider>
        </MenuContext.Provider>
      </MovieContext.Provider>
    </div>
  );
}

export default Search;
