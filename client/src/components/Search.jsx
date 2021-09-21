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
    };
    const style2 = {
      display: 'inline-block',
      margin: '0.2em',
      padding: '0.2em',
    };
    const style3 = {
      display: 'inline-block',
      justifyContent: 'flex-end',
    };
    return (
      <ul style={style}>
        <li style={style2}>
          <p>Home</p>
        </li>
        <li style={style2}>
          <p>Watched</p>
        </li>
        <li style={style2}>
          <p>To Watch</p>
        </li>
        <li style={style3}>
          <input type="text" />
          <button type="submit">Search</button>
        </li>

      </ul>
    );
  }
}

export default Search;
