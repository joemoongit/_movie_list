import React from 'react';
import MovieList from './MovieList';
import lists from '../../data/data';

class MovieLists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      all: true,
      watched: false,
      towatch: false,
    };
  }

  render() {
    const style = {
      // display: 'inline-block',
    };
    return (
      <div style={style}>
        {
          lists.map((list) => (
            <MovieList list={list} key={list.id} id={list.id} />
          ))
        }
      </div>
    );
  }
}

export default MovieLists;
