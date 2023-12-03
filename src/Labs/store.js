import helloReducer from "./a4/ReduxExamples/HelloRedux/helloReducer";
import counter1Reducer from "./a4/ReduxExamples/counters/counter1Reducer";
import counter2Reducer from "./a4/ReduxExamples/counters/counter2Reducer";
import todosReducer from "./a4/ReduxExamples/todos/todosReducer";
import addReducer from "./a4/ReduxExamples/AddRedux/addReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counter1Reducer: counter1Reducer,
    counter2Reducer,
    helloReducer,
    addReducer,
    todosReducer,
  },
});

export default store;
