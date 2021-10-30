import React from 'react';

export default function FormComponent (props) {
  return (
    <form onSubmit={props.onSubmitForm}>
      <label>
        name: <input value={props.data.name} name="name" onChange={props.handleInputChange} />
      </label>
      <label>
        city: <input value={props.data.city} name="city" onChange={props.handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
