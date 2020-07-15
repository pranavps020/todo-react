import React, { Component } from "react";
class todo extends Component {
  state = {};
  getStyle = () => {
    return {
      background: "#B4B8AB",
      padding: "10px",
      textDecoration: this.props.todos.completed ? "line-through" : "none",
      borderBottom: "1px #ccc dotted",
    };
  };

  render() {
    const { id, name } = this.props.todos;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            onChange={this.props.markComplete.bind(this, id)}
            type="checkbox"
          />
          {name}
          <button
            onClick={this.props.delete.bind(this, id)}
            style={buttonStyle}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

const buttonStyle = {
  float: "right",
  background: "#ff0000",
  border: "none",
  borderRadius: "30%",
  padding: "5px 10px",
  cursor: "pointer",
};

export default todo;
