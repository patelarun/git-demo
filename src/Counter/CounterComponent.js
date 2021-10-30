import React from 'react';
import CounterButtons from './CounterButtons';
import CounterValue from './CounterValue';

export default class Counter extends React.Component {
  state = { count: 0 }

  onIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  onDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render () {
    return (
      <div>
        <CounterValue value={this.state.count} />
        <CounterButtons onIncrement={this.onIncrement} onDecrement={this.onDecrement} />
      </div>
    );
  }
}
