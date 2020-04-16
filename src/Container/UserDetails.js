import React, { Component } from "react";
import UserData from "./UseData";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          userName: "samli",
          dateOfBirth: "1-06-1996",
          address: "Rourkela",
          heightQualification: "Master",
          id: "1"
        },
        {
          userName: "samli111",
          dateOfBirth: "1-06-1996",
          address: "Rourkela",
          heightQualification: "Master",
          id: "2"
        },
        {
          userName: "samli2222",
          dateOfBirth: "1-06-1996",
          address: "Rourkela",
          heightQualification: "Master",
          id: "3"
        }
      ],
      currentUser: {}
    };
  }
  handleUserClick = item => {
    console.log(item);
    this.setState({
      currentUser: item
    });
    console.log(this.state.currentUser);
  };

  render() {
    return (
      <div>
        {this.state.users.map(item => {
          return (
            <div>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => this.handleUserClick(item)}
              >
                {item.userName}
              </span>
            </div>
          );
        })}
        <UserData data={this.state.currentUser} />
      </div>
    );
  }
}
