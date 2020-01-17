import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

class TodoList extends React.Component {
  render() {
    const id = this.props;
    return (
      <div>
        {this.props.todo.map(todo => (
          <div>
            <Checkbox
              // checked={checked}
              // onChange={handleChange}
              value="primary"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            {todo}{" "}
            <DeleteForeverIcon onClick={() => this.props.removeTodo(id)} />
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;
