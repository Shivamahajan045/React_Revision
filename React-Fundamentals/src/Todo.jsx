import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };
  const addTodo = () => {
    setTodos((todos) => [...todos, todo]);
    setTodo("");
  };

  const handleRemoveTodo = (i) => {
    setTodos(todos.filter((todo, index) => i != index));
  };
  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" value={todo} onChange={handleTodo} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} onClick={() => handleRemoveTodo(index)}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
