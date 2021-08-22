import React from 'react';
import Add from './Add.jsx';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';
import movies from '../data.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: movies,
      bak: null,
      input: null,
      watched: null
    }

    this.onSearch = this.onSearch.bind(this);
    this.onBack = this.onBack.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onWatch = this.onWatch.bind(this);
    this.all = this.all.bind(this);
    this.watched = this.watched.bind(this);
  }

  onSearch() {
    this.setState({
      bak: this.state.movies,
      movies: this.state.movies.filter(movie => movie.title.includes(this.state.input))
    });
  }

  onBack() {
    this.setState({
      movies: this.state.bak,
      bak: null
    });
  };

  onAdd() {
    this.setState({
      movies: [...this.state.movies, {title: this.state.input, watched: false}]
    });
  }

  handleInputChange(input) {
    this.setState({
      input: input
    });
  }

  onWatch(movie) {
    movie.watched = !movie.watched;
  }

  all() {
    if (this.state.watched) {
      this.setState({
        movies: this.state.watched,
        watched: null
      });
    }
  }

  watched(bool) {
    if (!this.state.watched) {
      this.setState({
        watched: this.state.movies,
        movies: this.state.movies.filter(movie => movie.watched === bool)
      });
    } else {
      this.setState({
        watched: this.state.watched,
        movies: this.state.watched.filter(movie => movie.watched === bool)
      });
    }

  }

  render() {
    return (
      <div>
        <nav>
          <Add onAdd={this.onAdd} handleInputChange={this.handleInputChange}/>
          <Search onSearch={this.onSearch} handleInputChange={this.handleInputChange} onBack={this.onBack} bak={this.state.bak}/>
        </nav>
        <div>
          <MovieList onWatch={this.onWatch} movies={this.state.movies} all={this.all} watched={this.watched}/>
        </div>
      </div>
    );
  }
}

export default App;

