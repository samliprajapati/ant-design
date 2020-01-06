import React from "react";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.state.todo.map(values => (
          <li>{values}</li>
        ))}
      </div>
    );
  }
}

export default TodoList;
