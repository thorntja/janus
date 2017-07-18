import React from 'react';

const Board = (props) => (
  <div>
    <h1>{props.resource.name}</h1>
    <h1>{props.resource.id}</h1>
  </div>
)

export default Board;
