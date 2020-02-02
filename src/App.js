import React from "react";
import Todo from "./Container/Todo/Todo";
import TodoList from "./Container/Todo/TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    };
  }
  handleEdit = (editval, id) => {
    this.setState({
      todo: this.state.todo.map(item => {
        return item.id === id ? { ...item, addtask: editval } : item;
      })
    });
  };
  handleChange = (addtask, id) => {
    this.setState({ todo: [...this.state.todo, { addtask, id }] });
  };
  removeTodo = id => {
    this.setState({
      todo: this.state.todo.filter(el => el.id !== id)
    });
  };
  handleItemClick = ({ addtask, id, checked }) => {
    this.setState({
      todo: this.state.todo.map(item => {
        console.log(item);
        return item.id === id ? { addtask, id, checked: !checked } : item;
      })
    });
  };
  render() {
    return (
      <div>
        <Todo handleChange={this.handleChange} />
        <TodoList
          todo={this.state.todo}
          removeTodo={this.removeTodo}
          handleItemClick={this.handleItemClick}
          handleEdit={this.handleEdit}
        />
        {/* <LandingPage /> */}
        {/* <Counter />

        <Array1 />
        <Array2 /> */}
        {/* <Object /> */}
      </div>
    );
  }
}
export default App;
