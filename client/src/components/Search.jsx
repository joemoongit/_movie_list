import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const style = {
      position: 'sticky',
      top: '0',
      listStyleType: 'none',
      backgroundColor: 'rgb(20,20,20)',
      padding: '0',
      margin: '0',
    };
    const style2 = {
      display: 'inline-block',
      margin: '0.15em',
      padding: '0.15em',
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)',
    };
    return (
      <ul style={style}>
        <img style={{ width: '3em' }} src="images/popcorn.png" alt="" />
        <li style={style2}>
          Home
        </li>
        <li style={style2}>
          Watched
        </li>
        <li style={style2}>
          To Watch
        </li>
        <li style={style2}>
          <input type="text" />
          <button type="submit">Search</button>
        </li>
      </ul>
    );
  }
}

export default Search;
