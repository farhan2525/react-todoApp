import React, { useState } from "react";
import "./App.css";

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [todoEdit, setTodoEdit] = useState(false);
  const [editableTodo, setEditableTodo] = useState(null);

  const createHandaler = () => {
    if (todoValue !== "") {
      const newTodo = {
        id: Date.now(),
        title: todoValue,
        isComplete: false,
      };
      setTodoList([...todoList, newTodo]);
      setTodoValue("");
    } else {
      alert("Please Enter a Valid Title");
    }
  };
  const deletHandaler = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };
  const editHandaler = (id) => {
    const editHere = todoList.find((item) => item.id == id);
    setTodoEdit(true);
    setEditableTodo(editHere);
    setTodoValue(editHere.title);
  };
  const updatehandalaler = () => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id == editableTodo.id) {
          todo.title = todoValue;
        }
        return todo;
      })
    );

    setTodoEdit(false);
    setTodoValue("");
    setEditableTodo(null);
  };

  return (
    <div className="App">
      <div className="todo-app">
        <input
          type="text"
          value={todoValue}
          onChange={(evnt) => setTodoValue(evnt.target.value)}
        />
        <button
          onClick={() => {
            todoEdit ? updatehandalaler() : createHandaler();
          }}
        >
          {todoEdit ? "Update Todo" : "Add Todo"}
        </button>
        <ul className="todo-list">
          {todoList.map((item) => (
            <li>
              <span>{item.title}</span>
              <button onClick={() => editHandaler(item.id)}>Edit</button>
              <button onClick={() => deletHandaler(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
