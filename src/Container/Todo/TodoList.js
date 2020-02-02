import React from "react";
import { Icon, Checkbox } from "antd";
import { Modal, Button } from "antd";

class TodoList extends React.Component {
  state = { visible: false, editval: "" };

  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleSubmit = (editval, id) => {
    this.setState(
      {
        visible: !this.state.visible
      },
      this.props.handleEdit(editval, id)
    );
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        {this.props.todo.map(item => {
          return (
            <div>
              <Checkbox
                checked={item.checked}
                onChange={() => this.props.handleItemClick(item)}
              />
              <span style={checkboxStyle(item.checked)}>{item.addtask}</span>
              <Icon
                type="delete"
                onClick={() => this.props.removeTodo(item.id)}
              />
              <Icon type="edit" onClick={() => this.showModal()} />

              <Modal
                title="Todo Edit"
                visible={this.state.visible}
                onOk={this.handleOk}
                footer={null}
                onCancel={this.handleCancel}
              >
                <input
                  type="text"
                  name="editval"
                  defaultValue={item.addtask}
                  onChange={this.onChange}
                ></input>
                <br />
                <br />
                <Button
                  type="primary"
                  onClick={() => this.handleSubmit(this.state.editval, item.id)}
                >
                  Edit
                </Button>
              </Modal>
            </div>
          );
        })}
      </div>
    );
  }
}
function checkboxStyle(checked) {
  return {
    textDecoration: checked ? "line-through" : "none"
  };
}
export default TodoList;
