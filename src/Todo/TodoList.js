import React from 'react';

export default class TodoList extends React.Component {
  render () {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo.id}>
              <span>
                {todo.title}: {todo.description}
              </span>
              <span>
                <button onClick={() => this.props.handleDelete(todo.id)}>Delete</button>
                <button onClick={() => this.props.handleEdit(todo.id)}>Edit</button>
                <label>
                  complete
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onClick={(event) => this.props.handleComplete(event, todo.id)}
                  />
                </label>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
