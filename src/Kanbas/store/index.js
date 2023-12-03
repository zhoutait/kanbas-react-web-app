import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import assignmentReducer from "../Courses/Assignments/assignmentsReducer";
import userReducer from "../Users/reducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentReducer,
    user: userReducer,
  },
});

export default store;
