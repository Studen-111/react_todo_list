import React, { useState } from "react";
import TodoLists from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, completed: false, title: "Buy bread" },
    { id: 2, completed: false, title: "Buy butter" },
    { id: 3, completed: true, title: "Buy milk" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(todos.concat([
      {
        title,
        id: Date.now(),
        completed: false
      }
    ]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>TODO list</h1>
        <AddTodo onCreate={addTodo}/>
        {todos.length ? <TodoLists todos={todos} onToggle={toggleTodo} /> : <p>{`No todos :)`}</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
