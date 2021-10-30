import React from 'react';

export default class Child extends React.Component {
  render () {
    return (
      <div>
        <p>{typeof this.props.data}=> {this.props.data}</p>
      </div>
    )
  }
}
