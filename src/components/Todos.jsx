import React, { Component } from "react";
import Todo from "./Todo";
class todos extends Component {
  state = {};

  render() {
    return this.props.todos.map((todo) => (
      <Todo
        delete={this.props.delete}
        key={todo.id}
        todos={todo}
        markComplete={this.props.markComplete}
      />
    ));
  }
}

export default todos;
