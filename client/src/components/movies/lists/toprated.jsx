import React from 'react';
import axios from 'axios';
import { API_KEY } from '../../../config/config';
import MovieListEntry from '../MovieListEntry';

class TopRated extends React.Component {
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
    const options = {
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
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
    const { movies } = this.state;
    const style = {
      display: 'flex',
    };
    return (
      <div>
        <h4>Top Rated: </h4>
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

export default TopRated;
