import React from 'react';
import TrendingDay from './lists/trendingday';
import TrendingWeek from './lists/trendingweek';
import Popular from './lists/popular';
import TopRated from './lists/toprated';

class MovieList extends React.Component {
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
        <TrendingDay />
        <TrendingWeek />
        <Popular />
        <TopRated />
      </div>
    );
  }
}

export default MovieList;
