import reducer from "./Reducer";

function createStore(reducer) {
  let state;

  function getState() {
      //getter method
    return state;
  }

  function dispatch(action) {
      //call the reducer to get the new state
    state = reducer(state, action)
  }

  return { getState, dispatch };
}
export default createStore(reducer);
