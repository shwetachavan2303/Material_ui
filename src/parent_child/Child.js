import React from 'react';

function Child(props) {
  const { count, onIncrement } = props;

  return (
    <div>
      <h3>Child Component</h3>
      <p>Count from Parent: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

export default Child;
