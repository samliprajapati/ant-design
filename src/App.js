import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Counter from "./Container/Counter";
import Todo from "./Container/Todo/Todo";
import TodoList from "./Container/Todo/TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],   
    };
  }

  handleChange = (values, id) => {
    debugger;
    this.setState({ todo: [...this.state.todo, values],id:'' });
    debugger;
  };
  removeTodo(id) {
    debugger;
    const filtertodo = this.state.todo.filter(todo => todo.id !== id);
    this.setState({
      todo: filtertodo
    });
  }
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        <Todo handleChange={this.handleChange} />

        <TodoList todo={this.state.todo} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default App;
