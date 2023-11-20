import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithArrays() {
  const [errorMessage, setErrorMessage] = useState(null);
  const deleteTodo = async (todo) => {
    try {
      const response = await axios.delete(`${API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };
  const updateTodo = async () => {
    try {
      const response = await axios.put(`${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setTodo({});
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };
  const [id, setId] = useState(1);
  const [description, setDescription] = useState("Description");
  const [completed, setCompleted] = useState(false);
  const [title, setTitle] = useState("Go to work");
  const API = "https://kanbas-node-server-app-zinh.onrender.com/a5/todos";
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  const [todos, setTodos] = useState([]);
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  const removeTodo = async (todo) => {
    const response = await axios.get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };
  const createTodo = async (todo) => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };
  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };
  const fetchCompletedTodos = async () => {
    const response = await axios.get(`${API}/${todo.id}?completed=true`);
    setTodos(response.data);
  };
  const fetchTodoDescription = async () => {
    const response = await axios.get(`${API}/${todo.id}/description`);
    setTodos(response.data);
  };

  return (
    <div>
      <h2>Working with Arrays</h2>
      <input
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: e.target.value,
          })
        }
        className="form-control mb-2"
        type="number"
      />
      <input
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
        className="form-control mb-2"
        type="text"
      />
      <textarea
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        className="form-control mb-2"
        value={todo.description}
        type="text"
      />
      <input
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
        className="form-control mb-2"
        value={todo.due}
        type="date"
      />
      <label>
        <input
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked,
            })
          }
          value={todo.completed}
          type="checkbox"
        />
        Completed
      </label>
      <button onClick={postTodo} className="btn btn-warning mb-2 w-100">
        Post Todo
      </button>
      <button onClick={createTodo} className="btn btn-primary mb-2 w-100">
        Create Todo
      </button>
      <button onClick={updateTitle} className="btn btn-success mb-2 w-100">
        Update Title
      </button>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <button
              onClick={() => fetchTodoById(todo.id)}
              className="btn btn-warning mb-2 float-end"
            >
              Edit
            </button>
            <button
              onClick={() => removeTodo(todo)}
              className="btn btn-danger float-end"
            >
              Remove
            </button>
            <input checked={todo.completed} type="checkbox" readOnly />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
          </li>
        ))}
      </ul>
      <h3>Todos Completed</h3>
      <h3>Updating an Item in an Array</h3>
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary me-2"
      >
        Update Title to {todo.title}
      </a>
      <h3>Deleting from an Array</h3>
      <a href={`${API}/${todo.id}/delete`} className="btn btn-primary me-2">
        Delete Todo with ID = {todo.id}
      </a>
      <hr />
      <h3>Scores </h3>
      <a
        href={`https://kanbas-node-server-app-zinh.onrender.com/a5/todos/${
          todo.id
        }/completed/${true}`}
        className="btn btn-primary me-2"
      >
        Get Completed Todos
      </a>
      <h3>Description </h3>
      <a
        href={`https://kanbas-node-server-app-zinh.onrender.com/a5/todos/${todo.id}/description/${description}`}
        className="btn btn-primary me-2"
      >
        Get Description Todos
      </a>

      <h4>Retrieving Arrays</h4>
      <a href={API} className="btn btn-primary me-2">
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <a href={`${API}/${todo.id}`} className="btn btn-primary me-2">
        Get Todo by ID
      </a>
      <h3>Filtering Array Items</h3>
      <a href={`${API}/?completed=true`} className="btn btn-primary me-2">
        Get Completed Todos
      </a>

      <br />
      <br />

      {}
      <h4>Completing an Item from an Array by ID</h4>
      <input
        className="form-control my-2"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <label>
        <input
          onChange={(e) => setCompleted(e.target.checked)}
          value={completed}
          type="checkbox"
        />
        Completed
      </label>
      <br />
      <a
        href={`${API}/${id}/completed/${completed}`}
        className="btn btn-primary me-2"
      >
        Complete an Item
      </a>
      {}

      <br />
      <br />

      {}
      <h4>Description Update of a item</h4>
      <input
        className="form-control"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        className="form-control mt-1"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <a
        href={`${API}/${id}/description/${description}`}
        className="btn btn-primary me-2 mt-1"
      >
        Update Description
      </a>
      {}

      <br />
      <br />

      <h4>Creating new Items in an Array</h4>
      <a href={`${API}/create`} className="btn btn-primary me-2">
        Create Todo
      </a>
      <h2>Update item title</h2>
      <input
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <a
        href={`https://kanbas-node-server-app-zinh.onrender.com/a5/todos/${id}/title/${title}`}
        className="btn btn-primary"
      >
        Update Todo Title
      </a>
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">{errorMessage}</div>
      )}
      <h2>Fetch item by id</h2>
      <input
        className="form-control"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <a
        href={`https://kanbas-node-server-app-zinh.onrender.com/a5/todos/${id}`}
        className="btn btn-primary"
      >
        Fetch Todo {id}
      </a>
      <h2>Fetch Array</h2>
      <a
        href="https://kanbas-node-server-app-zinh.onrender.com/a5/todos"
        className="btn btn-primary"
      >
        Fetch Todos
      </a>
    </div>
  );
}

export default WorkingWithArrays;
