import React from 'react';

export default function ShowDetails (props) {
  return (
    <>
      <div>
        <h1>Details</h1>
        <p>Name: {props.data.name}</p>
        <p>City: {props.data.city}</p>
      </div>
      <div>
        <button type="button" onClick={props.handleResetDetails}>
          Reset Details
        </button>
      </div>
    </>
  );
}
