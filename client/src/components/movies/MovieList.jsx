import React from 'react';
import axios from 'axios';
import { API_KEY } from '../../config/config';
import MovieListEntry from './MovieListEntry';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.read();
  }

  read() {
    const { list } = this.props;
    const options = {
      method: 'get',
      url: list.url,
    };
    axios(options)
      .then((response) => {
        this.setState({
          movies: response.data.results,
        });
      })
      .catch();
  }

  render() {
    const { list } = this.props;
    const { movies } = this.state;
    const style = {
      // display: 'inline',
      // verticalAlign: 'middle',
      // overflowX: 'scroll',
      // overflowY: 'hidden',
      display: 'flex',
      margin: '0.5em',
    };
    return (
      <div>
        <h4 style={{ marginLeft: '0.5em' }}>{list.name}</h4>
        <div style={style}>
          {
            movies.map((movie) => (
              <MovieListEntry movie={movie} key={movie.id} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default MovieList;
