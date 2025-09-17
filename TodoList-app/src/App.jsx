import React, { useState } from "react";

// Child Component: AddTodo
function AddTodo({ onAdd }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return; // avoid empty items
    onAdd(newTodo); // send data to parent
    setNewTodo(""); // clear input after adding
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        placeholder="Enter new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="border px-2 py-1 mr-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
      >
        Add
      </button>
    </form>
  );
}

// Parent Component: TodoList
function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]); // update state with new todo
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Todo List
      </h1>

      {/* Child component with callback */}
      <AddTodo onAdd={addTodo} />

      {/* Display Todos */}
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center py-4">
          No items yet. Add some!
        </p>
      ) : (
        <ul className="list-disc pl-6 mt-3">
          {todos.map((todo, index) => (
            <li key={index} className="mb-2 py-1 border-b border-gray-100">
              {todo}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
