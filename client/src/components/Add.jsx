import React from 'react';

var Add = ({onAdd, handleAddInputChange}) => (
  <div>
    <input type="text" onChange={(e) => handleAddInputChange(e.target.value)} required></input>
    <button onClick={() => onAdd()}><span>Add</span></button>
  </div>
);

export default Add;
