import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const action = createAction("BugAdded");
console.log(action({ id: 1, description: "What what" }));

let lastId = 0;
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers:{
    bugAdded: (state, action)=>{
      state.push({
        id: ++lastId,
        description : action.payload.description,
        resolved:false
      })
    }, 
    bugRemoved: (state,action) =>{
      return state.filter(bug=>bug.id !== action.payload.id)
    },
    bugResolved:(state,action)=>{
      state.map(bug=>bug.id === action.payload.id ? bug.resolved = true : bug)
    }
  }
})

console.log(slice)

/*  ^^ This will log the following object: 

{name: 'bugs', actions: {…}, caseReducers: {…}, reducer: ƒ}
actions: {bugAdded: ƒ, bugRemoved: ƒ, bugResolved: ƒ}
caseReducers: {bugAdded: ƒ, bugRemoved: ƒ, bugResolved: ƒ}
name: "bugs"
reducer: ƒ (state, action) 

*/

//Need to export actions and reducer 
export const { bugAdded, bugRemoved, bugResolved } = slice.actions
export default slice.reducer













//// ** Alternative methods of creating actions and reducers in redux ** ///

//Action Creators
/* export const bugAdded = createAction("bugAdded");
export const bugRemoved = createAction("bugRemoved");
export const bugResolved = createAction("bugResolved");
 */
// Reducer


/* export default createReducer([], {
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
 */
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
