import React, { useState, useContext } from "react";
import MovieList from "./MovieList";
import { SearchContext, MenuContext } from "../Context";
import lists from "../../data/data";
import tvlists from "../../data/datatv";

const MovieLists = ({ set }) => {
  const query = useContext(SearchContext);
  const { watched, watch, rec, sim, movie, tv } = useContext(MenuContext);

  return (
    <div>
      {tv ? (
        <>
          {rec && (
            movie.name
            ?
            <MovieList
              list={{
                id: "100",
                name: `Recommendations for ${movie.name || movie.title}:`,
                url: `https://joesmovielist.herokuapp.com/tv/rec/${movie.id}`,
              }}
              set={set}
            />
            :
            <h4 style={{ marginLeft: "0.5em" }}>No Recommendations. Click a on TV Show!</h4>
          )
          }
          {sim && (
            movie.name
            ?
            <MovieList
              list={{
                id: "101",
                name: `Similar to ${movie.name || movie.title}:`,
                url: `https://joesmovielist.herokuapp.com/tv/sim/${movie.id}`,
              }}
              set={set}
            />
            :
            <h4 style={{ marginLeft: "0.5em" }}>No Similar TV Shows. Click on a TV Show!</h4>
          )}
          {query && (
            <MovieList
              list={{
                id: "0",
                name: "Search Results:",
                url: `https://joesmovielist.herokuapp.com/tv/search?query=${query}`,
              }}
              set={set}
            />
          )}
          {tvlists.map((list) => (
            <MovieList list={list} key={list.id} set={set} />
          ))}
        </>
      ) : (
        <>
          {/* {
          watched &&
          <MovieList list={{
            id: '100',
            name: 'Watched:',
            url: 'https://api.themoviedb.org/3/search/movie?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&query=shrek&page=1&include_adult=false',
          }} />
        }
        {
          watch &&
          <MovieList list={{
            id: '101',
            name: 'To Watch:',
            url: 'https://api.themoviedb.org/3/search/movie?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&query=pirates&page=1&include_adult=false',
          }} />
        } */}
          {rec && (
            movie.title
            ?
            <MovieList
              list={{
                id: "100",
                name: `Recommendations for ${movie.title || movie.name}:`,
                url: `https://joesmovielist.herokuapp.com/movies/rec/${movie.id}`,
              }}
              set={set}
            />
            :
            <h4 style={{ marginLeft: "0.5em" }}>No Recommendations. Click a on Movie!</h4>
          )}
          {sim && (
            movie.title
            ?
            <MovieList
              list={{
                id: "101",
                name: `Similar to ${movie.title || movie.name}:`,
                url: `https://joesmovielist.herokuapp.com/movies/sim/${movie.id}`,
              }}
              set={set}
            />
            :
            <h4 style={{ marginLeft: "0.5em" }}>No Similar Movies. Click on a Movie!</h4>
          )}
          {query && (
            <MovieList
              list={{
                id: "0",
                name: "Search Results:",
                url: `https://joesmovielist.herokuapp.com/movies/search?query=${query}`,
              }}
              set={set}
            />
          )}
          {lists.map((list) => (
            <MovieList list={list} key={list.id} set={set} />
          ))}
        </>
      )}
    </div>
  );
};

export default MovieLists;
