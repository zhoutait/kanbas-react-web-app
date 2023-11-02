import React from "react";
import Counter1 from "./counters/Counter1";
import Counter2 from "./counters/Counter2";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";
import AddRedux from "./AddRedux";

const ReduxExamples = () => {
  return (
    <div>
      <h2>Redux Examples</h2>
      <TodoList />
      <Counter1 />
      <Counter2 />
      <HelloRedux />
      <AddRedux />
    </div>
  );
};

export default ReduxExamples;
