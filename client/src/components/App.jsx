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
      input: null
    }
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
      movies: [...this.state.movies, {title: this.state.input}]
    });
  }

  handleInputChange(input) {
    this.setState({
      input: input
    });
  }

  onWatch(movie) {
    console.log(this.state.movies);
  }

  render() {
    return (
      <div>
        <nav>
          <Add onAdd={this.onAdd.bind(this)} handleInputChange={this.handleInputChange.bind(this)}/>
          <Search onSearch={this.onSearch.bind(this)} handleInputChange={this.handleInputChange.bind(this)} onBack={this.onBack.bind(this)} bak={this.state.bak}/>
        </nav>
        <div>
          <MovieList onWatch={this.onWatch.bind(this)} movies={this.state.movies}/>
        </div>
      </div>
    );
  }
}

export default App;

