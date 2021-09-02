import { createAction, createReducer } from "@reduxjs/toolkit";

const action = createAction("BugAdded");
console.log(action({ id: 1, description: "What what" }));

//Action Creators
export const bugAdded = createAction("bugAdded");
export const bugRemoved = createAction("bugRemoved");
export const bugResolved = createAction("bugResolved");

// Reducer
let lastId = 0;

export default createReducer([], {
  //key:value
  //actions:functions event =>event hdescripti…alse}andler
  [bugAdded.type]: (state, action) => {
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
});

/* export default function reducer(state = [], action) {
  switch (action.type) {
    case bugAdded.type:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case bugRemoved.type:
      return state.filter((bug) => bug.id !== action.payload.id);

    case bugResolved.type:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );

    default:
      return state;
  }
} */
