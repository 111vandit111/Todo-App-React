import React, { Component } from "react";
import Todos from "./todos";
import AddTask from "./AddTask";
class App extends Component {
  state = {
    todos: [
      { id: 1, task: "play games" },
      { id: 2, task: "buy grocerries" },
    ],
  };

  DeleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };

  addTask = (todo) => {
    todo.id = this.state.todos.length + 1;
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };

  render() {
    return (
      <div className="App collection-item container">
        <h1 className="center blue-text text-darken-4">TODO's</h1>
        <Todos todos={this.state.todos} DeleteTodo={this.DeleteTodo} />
        <AddTask addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
