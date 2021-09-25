import React, { useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';
import MovieListEntry from './MovieListEntry';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
    this.read = this.read.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
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

  scrollLeft(id) {
    event.preventDefault();
    $(`#content${id}`).animate({
      scrollLeft: "-=490"
    }, "slow");
  }

  scrollRight(id) {
    event.preventDefault();
    $(`#content${id}`).animate({
      scrollLeft: "+=490"
    }, "slow")
  }

  render() {
    const { list } = this.props;
    const { movies } = this.state;
    const style = {
      display: 'flex',
      margin: '0.5em',
      overflowX: 'hidden',
      zIndex: '0',
    };
    const style2 = {
      float: 'left',
      zIndex: '1',
      width: '1em',
      position: 'relative',
      top: '50%',
      transform: 'translateY(700%)',
    };
    const style3 = {
      float: 'right',
      zIndex: '1',
      width: '1em',
      position: 'relative',
      top: '50%',
      transform: 'translateY(-900%)',
    };
    return (
      <div>
        <h4 style={{ marginLeft: '0.5em' }}>{list.name}</h4>
        <div>
          <img onClick={() => this.scrollLeft(this.props.id)} style={style2} src="./images/left.png" alt="" />
          <div id={`content${this.props.id}`} style={style}>
            {
              movies.map((movie) => (
                <MovieListEntry movie={movie} key={movie.id} />
              ))
            }
          </div>
          <img onClick={() => this.scrollRight(this.props.id)} style={style3} src="./images/right.png" alt="" />
        </div>
      </div>
    );
  }
}

export default MovieList;
