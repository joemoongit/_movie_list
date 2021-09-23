import React from 'react';
import $ from 'jquery';
import MovieListEntry from './movies/MovieListEntry';

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
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
    const { movies } = this.props;
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
        <h4 style={{ marginLeft: '0.5em' }}>Search Results:</h4>
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

export default Result;
