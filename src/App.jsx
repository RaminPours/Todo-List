import React, { useState } from "react";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";

// main component

// usestate waar de list in wordt opgeslagen...
function App() {
  const [todos, setTodos] = useState([]);

  // add een todo 
  const addTodo = (todo) =>
    setTodos((prev) => [...prev, { ...todo, completed: false }]);

  // delete een taak!
  const deleteTodo = (i) =>
    setTodos(todos.filter((_, index) => index !== i));

  // afvinken compleet 
  const toggleComplete = (i) =>
    setTodos(todos.map((todo, index) =>
      index === i ? { ...todo, completed: !todo.completed } : todo ));

  // prioriteit van high naar low
  const sortedTodos = [...todos].sort((a, b) => {
    const order = { high: 1, medium: 2, low: 3 };
    return order[a.priority] - order[b.priority]; });

  return (
    <div>
      <h1>📝 Todo App!</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={sortedTodos}
        onDelete={deleteTodo}
        onToggle={toggleComplete}
      />
    </div>
  );
}

export default App;