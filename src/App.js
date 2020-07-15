import React, { Component } from 'react';
import Todo from './components/Todos'
import Header from './components/layouts/header';
import Add from './components/Add'
import './App.css';
import { v4 as uuidv4 } from 'uuid'
class App extends Component {
  state = {
    todos: [],

  }
  delete = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo =>
        todo.id !== id)]


    })
  }

  onSubmition = (e) => {
    const newTodo = {
      id: uuidv4(),
      name: e,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  };
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }
  render() {
    return (<div className="container">
      <Header />
      <Add onSubmition={this.onSubmition} />
      <Todo delete={this.delete} todos={this.state.todos} key={this.state.todos.id} markComplete={this.markComplete} />
    </div>
    );
  }
}
export default App;

