import React from 'react';

var Add = ({onAdd, handleInputChange}) => (
  <div>
    <input type="text" onChange={(e) => handleInputChange(e.target.value)} required></input>
    <button onClick={() => onAdd()}><span>Add</span></button>
  </div>
);

export default Add;
