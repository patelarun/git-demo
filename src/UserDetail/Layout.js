import React from 'react';

export default class Layout extends React.Component {
  render () {
    return (
      <div style={{ background: this.props.bgColor, width: '50%', margin: '0 auto' }}>
        {this.props.children}
      </div>
    );
  }
}
