import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieLists from "./movies/MovieLists";
import { SearchContext, MenuContext } from "./Context.jsx";

const Search = () => {
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [watchedList, setWatchedList] = useState(false);
  const [watchList, setWatchList] = useState(false);
  const [recList, setRecList] = useState(false);
  const [simList, setSimList] = useState(false);
  const [movie, setMovie] = useState({});
  const [tv, setTv] = useState(false);

  useEffect(() => {
    setText("");
  }, [query]);

  const toggleOff = () => {
    setQuery("");
    setWatchedList(false);
    setWatchList(false);
    setRecList(false);
    setSimList(false);
    setMovie({});
    setTv(false);
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

  const set = (movie) => {
    setMovie(movie);
  };

  const setTV = (bool) => {
    setTv(bool);
  };

  const style = {
    position: "sticky",
    top: "0",
    listStyleType: "none",
    backgroundColor: "rgb(20,20,20)",
    padding: "0",
    margin: "0",
    zIndex: "2",
    textAlign: "center",
    height: "3em",
  };

  const style2 = {
    display: "inline-block",
    float: "left",
    margin: "0.5em",
    padding: "0.15em",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
  };

  const style3 = {
    display: "inline-block",
    float: "right",
    margin: "0.5em",
    padding: "0.15em",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
  };

  const styleSearch = {
    display: "inline-block",
    margin: "0.15em",
    padding: "0.15em",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
  };

  const styleImg = {
    width: "3em",
    float: "left",
  };

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
        <li
          style={{ ...style2, color: recList ? "cyan" : "white" }}
          onClick={toggleRecList}
        >
          Recommendations
        </li>
        <li
          style={{ ...style2, color: simList ? "yellow" : "white" }}
          onClick={toggleSimList}
        >
          Similar
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
              color: query.length ? "magenta" : "black",
            }}
            onClick={(e) => {
              e.preventDefault();
              setQuery(text);
            }}
          />
        </li>
        <li
          style={{ ...style3, color: tv ? "white" : "gray" }}
          onClick={() => setTV(true)}
        >
          TV Shows
        </li>
        <li
          style={{ ...style3, color: tv ? "gray" : "white" }}
          onClick={() => setTV(false)}
        >
          Movies
        </li>
      </ul>
      <MenuContext.Provider
        value={{
          watched: watchedList,
          watch: watchList,
          rec: recList,
          sim: simList,
          movie: movie,
          tv: tv,
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
