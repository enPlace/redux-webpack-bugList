import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (state, action) => {
      state.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugRemoved: (state, action) => {
      return state.filter((bug) => bug.id !== action.payload.id);
    },
    bugResolved: (state, action) => {
      state.map((bug) =>
        bug.id === action.payload.id ? (bug.resolved = true) : bug
      );
    },
    bugAssigned: (state, action) => {
      state.map((bug) =>
        bug.id === action.payload.id
          ? (bug.teamMemberId = action.payload.teamMemberId)
          : bug
      );
    },
  },
});

console.log(slice);

/*  ^^ This will log the following object: 

{name: 'bugs', actions: {…}, caseReducers: {…}, reducer: ƒ}
actions: {bugAdded: ƒ, bugRemoved: ƒ, bugResolved: ƒ}
caseReducers: {bugAdded: ƒ, bugRemoved: ƒ, bugResolved: ƒ}
name: "bugs"
reducer: ƒ (state, action) 
*/

//Need to export actions and reducer
export const { bugAdded, bugRemoved, bugResolved, bugAssigned } = slice.actions;
export const unresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);
export const bugsByUser = (teamMemberId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.teamMemberId === teamMemberId)
  );

export default slice.reducer;
