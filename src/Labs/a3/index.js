import Add from "./Add";
import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import HelloWorld from "./HelloWorld";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import { useSelector } from "react-redux";
function Assignment3() {
  const { todos } = useSelector((state) => state.todosReducer);
  return (
    <div className="container">
      <div>
        <HelloWorld />
        <h2>Assignment 3</h2>
        <ul className="list-group">
          {todos.map((todo) => (
            <li className="list-group-item" key={todo.id}>
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
      <ConditionalOutput />
      <Styles />
      <Classes />
      <JavaScript />
      <TodoList />
      <PathParameters />
      <hr />
      <ul className="list-group">
        <TodoItem
          todo={{
            title: "Buy milk",
            done: true,
            status: "COMPLETE",
          }}
        />
        <TodoItem
          todo={{
            title: "Pick up kids",
            done: false,
            status: "IN_PROGRESS",
          }}
        />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
}

export default Assignment3;
