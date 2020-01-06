import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Counter from "./Container/Counter";
import Todo from "./Container/Todo/Todo";

function App() {
  // const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      {/* <Counter /> */}
      <Todo />
      {/* <TodoForm
        saveTodo={todoText => {
          setTodos([...todos, todoText]);
        }}
      /> */}
      {/* <TodoList todos={todos} /> */}
    </div>
  );
}

export default App;
