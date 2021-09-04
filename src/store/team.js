import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const team = createSlice({
  name: "team",
  initialState: [],
  reducers: {
    memberAdded: (state, action) => {
      state.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
  },
});

export const { memberAdded } = team.actions;
export default team.reducer;
