import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const projects = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (state, action) => {
      state.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
  },
});

export const { projectAdded } = projects.actions;
export default projects.reducer;
