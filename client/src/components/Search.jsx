import React from 'react';

var Search = ({onSearch, handleInputChange, onBack, bak}) => (
  <div>
    {
      !bak
      ?
      <>
      <input type="text" onChange={(e) => handleInputChange(e.target.value)}></input>
      <button onClick={() => onSearch()}><span>Search</span></button>
      </>
      :
      <button onClick={() => onBack()}><span>Back</span></button>
    }
  </div>
);

export default Search;