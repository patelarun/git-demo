import React from 'react';

export default class TodoForm extends React.Component {
  render () {
    const { todo, updatingTodoIndex } = this.props;
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <label>
              Title:
              <input name="title" value={todo.title} onChange={this.props.handleChangeInput} />
            </label>
          </div>
          <div>
            <label>
              Description:
              <textarea name="description" value={todo.description} onChange={this.props.handleChangeInput} />
            </label>
          </div>
          <div>
            <button type="submit">{updatingTodoIndex ? 'Update' : 'Submit'}</button>
          </div>
        </form>
      </div>
    );
  }
}
