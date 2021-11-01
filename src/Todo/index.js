import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class Todo extends React.Component {
  initialTodo = { title: '', description: '' };

  constructor () {
    super();
    this.state = {
      todo: this.initialTodo,
      todos: [],
      updatingTodoIndex: null,
    }
  }

  handleChangeInput = (event) => {
    const { name, value } = event.target;
    const todo = { ...this.state.todo, [name]: value };
    this.setState({ todo });
  }

  handleSubmitForm = (event) => {
    event.preventDefault();
    const { todo, updatingTodoIndex } = this.state;
    if (!todo.title) return;
    const todos = [...this.state.todos];
    if (!updatingTodoIndex && updatingTodoIndex !== 0) {
      todos.push({ ...todo, id: new Date().getTime() });
    } else {
      todos[updatingTodoIndex] = { ...todo };
    }
    this.setState({
      todos,
      todo: this.initialTodo,
      updatingTodoIndex: null,
    });
  }

  handleDelete = (todoId) => {
    const newTodosArray = this.state.todos.filter((todo) => todo.id !== todoId);
    this.setState({ todos: newTodosArray });
  }

  handleEdit = (todoId) => {
    const todoIndex = this.state.todos.findIndex((todo) => todo.id === todoId);
    const todo = { ...this.state.todos[todoIndex] };
    this.setState({ todo, updatingTodoIndex: todoIndex });
  }

  handleComplete = (event, todoId) => {
    const newTodosArray = this.state.todos.map((todo) => {
      if (todo.id !== todoId) return todo;
      return { ...todo, completed: event.target.checked };
    });
    this.setState({ todos: newTodosArray });
  }

  render () {
    return (
      <div>
        <TodoForm
          todo={this.state.todo}
          updatingTodoIndex={this.state.updatingTodoIndex}
          handleSubmit={this.handleSubmitForm}
          handleChangeInput={this.handleChangeInput}
        />
        <TodoList
          todos={this.state.todos}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          handleComplete={this.handleComplete}
        />
      </div>
    );
  }
}
