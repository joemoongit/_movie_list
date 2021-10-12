import React, { useState, useEffect } from 'react';
import Login from './login/Login';
import MovieLists from './movies/MovieLists';
import { SearchContext, MenuContext } from './Context';

const Search = () => {
  const [text, setText] = useState('');
  const [query, setQuery] = useState('');
  const [watchedList, setWatchedList] = useState(false);
  const [watchList, setWatchList] = useState(false);
  const [recList, setRecList] = useState(false);
  const [simList, setSimList] = useState(false);
  const [movie, setMovie] = useState({});
  const [tv, setTv] = useState(false);
  const [login, setLogin] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setText('');
  }, [query]);

  const toggleOff = () => {
    setQuery('');
    setWatchedList(false);
    setWatchList(false);
    setRecList(false);
    setSimList(false);
    setMovie({});
    setTv(false);
    setLogin(false);
    setHover(false);
  };

  const toggleWatchedList = () => {
    setWatchedList(!watchedList);
  };

  const toggleWatchList = () => {
    setWatchList(!watchList);
  };

  const toggleRecList = () => {
    setRecList(!recList);
  };

  const toggleSimList = () => {
    setSimList(!simList);
  };

  const toggleLogin = () => {
    setLogin(!login);
  };

  const onHover = () => {
    setHover(!hover);
  };

  const set = (m) => {
    setMovie(m);
  };

  const setTV = (bool) => {
    setTv(bool);
  };

  const setLoginParent = (bool) => {
    setLogin(bool);
  };

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
    display: 'flex',
    float: 'left',
    margin: '0.5em',
    padding: '0.15em',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: hover ? 'pointer' : 'notAllowed',
  };

  const style3 = {
    display: 'flex',
    float: 'right',
    margin: '0.5em',
    padding: '0.15em',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: hover ? 'pointer' : 'notAllowed',
  };

  const styleSearch = {
    display: 'flex',
    float: 'right',
    margin: '0.15em',
    padding: '0.15em',
    position: 'relative',
    top: '64%',
    transform: 'translateY(-50%)',
  };

  const styleImg = {
    display: 'flex',
    width: '3em',
    float: 'left',
    cursor: hover ? 'pointer' : 'notAllowed',
  };

  return (
    <div>
      <ul style={style}>
        <img style={styleImg} src="images/popcorn.png" alt="Popcorn"
          onClick={toggleLogin}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
        />
        <li style={style2}
          onClick={toggleOff}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
        >
          Home
        </li>
        {/* <li style={style2} onClick={toggleWatchedList}>
          Watched
        </li>
        <li style={style2} onClick={toggleWatchList}>
          To Watch
        </li> */}
        <li
          style={{ ...style2, color: recList ? 'cyan' : 'white' }}
          onClick={toggleRecList}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
        >
          Recommendations
        </li>
        <li
          style={{ ...style2, color: simList ? 'yellow' : 'white' }}
          onClick={toggleSimList}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
        >
          Similar
        </li>
        <li
          style={{ ...style3, color: tv ? 'white' : 'gray' }}
          onClick={() => setTV(true)}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
        >
          TV Shows
        </li>
        <li
          style={{ ...style3, color: tv ? 'gray' : 'white' }}
          onClick={() => setTV(false)}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
        >
          Movies
        </li>
        <li style={styleSearch}>
          <input
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          />
          <input
            type="submit"
            value="Search"
            style={{
              color: query.length ? 'magenta' : 'black',
            }}
            onClick={(e) => {
              e.preventDefault();
              setQuery(text);
            }}
          />
        </li>
      </ul>
      { login && <Login setLoginParent={setLoginParent} /> }
      <MenuContext.Provider
        value={{
          watched: watchedList,
          watch: watchList,
          rec: recList,
          sim: simList,
          movie,
          tv,
          login,
        }}
      >
        <SearchContext.Provider value={query}>
          <MovieLists set={set} />
        </SearchContext.Provider>
      </MenuContext.Provider>
    </div>
  );
};

export default Search;
