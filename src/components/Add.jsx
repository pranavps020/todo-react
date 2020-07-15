import React, { Component } from "react";
class Add extends Component {
  state = {
    title: "",
  };
  onChange = (event) => {
    this.setState({ title: event.target.value });
  };
  submissionHandler = (e) => {
    e.preventDefault();
    this.props.onSubmition(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form onSubmit={this.submissionHandler} style={addStyle}>
        <input
          style={{ flex: "9", padding: "5px 10px", align: "center" }}
          placeholder="Add todo"
          type="text"
          value={this.state.title}
          onChange={this.onChange}
        />
        <input style={btnStyle} value="Add" type="submit" />
      </form>
    );
  }
}
const btnStyle = {
  backgroundColor: "#284B63",
  color: "white",
  border: "none",
  flex: 1,
};
const addStyle = {
  display: "flex",
};
export default Add;
