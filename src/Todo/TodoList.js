import React from 'react';

export default class TodoList extends React.Component {
  render () {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo, todoIndex) => (
            <li>
              <span>
                {todo.title}: {todo.description}
              </span>
              <span>
                <button onClick={() => this.props.handleDelete(todoIndex)}>Delete</button>
                <button onClick={() => this.props.handleEdit(todoIndex)}>Edit</button>
                <label>
                  complete
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onClick={(event) => this.props.handleComplete(event, todoIndex)}
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
