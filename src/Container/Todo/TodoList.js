import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import {Icon} from "antd";
// import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

class TodoList extends React.Component {
  render() {
    debugger;
    const id = this.props.todo.id;
    debugger;
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
            
            {todo}
          
        
            <Icon type="delete"  onClick={() =>this.props.removeTodo(id) }/> 
            {/* <DeleteForeverIcon onClick={() => this.props.removeTodo(id)} /> */}
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;
