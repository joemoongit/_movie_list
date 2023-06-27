import React, { useContext } from 'react';
import MovieList from './MovieList';
import { SearchContext, MenuContext } from '../Context';
import lists from '../../data/data';
import tvlists from '../../data/datatv';

const MovieLists = ({ set }) => {
  const query = useContext(SearchContext);
  const {
    rec, sim, movie, tv,
  } = useContext(MenuContext);

  return (
    <div>
      {tv ? (
        <>
          {rec && (
            movie.name
            ?
            <MovieList
              list={{
                id: '100',
                name: `Recommendations for ${movie.name || movie.title}:`,
                url: `http://localhost:3000/tv/rec/${movie.id}`,
              }}
              set={set}
              dynamic={true}
              search={false}
            />
            :
            <h4 style={{ marginLeft: '0.5em' }}>No Recommendations. Click a on TV Show!</h4>
          )
          }
          {sim && (
            movie.name
            ?
            <MovieList
              list={{
                id: '101',
                name: `Similar to ${movie.name || movie.title}:`,
                url: `http://localhost:3000/tv/sim/${movie.id}`,
              }}
              set={set}
              dynamic={true}
              search={false}
            />
            :
            <h4 style={{ marginLeft: '0.5em' }}>No Similar TV Shows. Click on a TV Show!</h4>
          )}
          {query && (
            <MovieList
              list={{
                id: '0',
                name: 'Search Results:',
                url: `http://localhost:3000/tv/search?query=${query}`,
              }}
              set={set}
              dynamic={true}
              search={true}
            />
          )}
          {tvlists.map((list) => (
            <MovieList list={list} key={list.id} set={set} dynamic={false} search={false} />
          ))}
        </>
      ) : (
        <>
          {rec && (
            movie.title
            ?
            <MovieList
              list={{
                id: '100',
                name: `Recommendations for ${movie.title || movie.name}:`,
                url: `http://localhost:3000/movies/rec/${movie.id}`,
              }}
              set={set}
              dynamic={true}
              search={false}
            />
            :
            <h4 style={{ marginLeft: '0.5em' }}>No Recommendations. Click a on Movie!</h4>
          )}
          {sim && (
            movie.title
            ?
            <MovieList
              list={{
                id: '101',
                name: `Similar to ${movie.title || movie.name}:`,
                url: `http://localhost:3000/movies/sim/${movie.id}`,
              }}
              set={set}
              dynamic={true}
              search={false}
            />
            :
            <h4 style={{ marginLeft: '0.5em' }}>No Similar Movies. Click on a Movie!</h4>
          )}
          {query && (
            <MovieList
              list={{
                id: '0',
                name: 'Search Results:',
                url: `http://localhost:3000/movies/search?query=${query}`,
              }}
              set={set}
              dynamic={true}
              search={true}
            />
          )}
          {lists.map((list) => (
            <MovieList list={list} key={list.id} set={set} dynamic={false} search={false} />
          ))}
        </>
      )}
    </div>
  );
};

export default MovieLists;
