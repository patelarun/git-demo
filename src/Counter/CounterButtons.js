import React from 'react';

export default function CounterButtons (props) {
  return (
    <div>
      <button onClick={props.onIncrement}>Increment</button>
      <button onClick={props.onDecrement}>Decrement</button>
    </div>
  );
}
