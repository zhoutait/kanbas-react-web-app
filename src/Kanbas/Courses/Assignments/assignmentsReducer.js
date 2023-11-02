import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";
const initialState = {
  assignments: db.Assignments,
  assignment: {
    course: "RS101",
    title: "New Module 123",
    description: "New Description",
    points: "100",
    due: "Sep 18 2023, 11:00 PM",
    availableFrom: "Sep 6 2023, 11:00 PM",
    until: "Sep 6 2023, 11:00 PM",
  },
};
const assignmentSlice = createSlice({
  name: "assignment",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.assignments,
      ];
    },

    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});
console.log(assignmentSlice);

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} = assignmentSlice.actions;
export default assignmentSlice.reducer;
