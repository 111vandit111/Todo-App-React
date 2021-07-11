import React, { Component } from "react";

class AddTask extends Component {
  state = {
    task: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.task) return alert("pls write a task first"); // console.log("add task");

    this.props.addTask(this.state);
    console.log(this.state);
    this.setState({
      task: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name"> task:</label>
          <input
            type="text"
            id="task"
            onChange={this.handleChange}
            value={this.state.task}
          />

          <button className="btn green">submit</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
