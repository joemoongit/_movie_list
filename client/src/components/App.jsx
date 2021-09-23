import React from 'react';
import axios from 'axios';
import Search from './Search';
import Result from './Result';
import MovieLists from './movies/MovieLists';
import MovieList from './movies/MovieList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
    this.read = this.read.bind(this);
  }

  read(e, query) {
    e.preventDefault();
    const options = {
      method: 'get',
      url: `https://api.themoviedb.org/3/search/movie?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&query=${query}&page=1&include_adult=false`
    };
    axios(options)
      .then((response) => {
        this.setState({
          results: response.data.results,
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <Search read={this.read} />
        {
          results.length
          ?
          <Result movies={results} />
          :
          null
        }
        <MovieLists />
      </div>
    );
  }
};

export default App;
