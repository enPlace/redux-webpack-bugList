import reducer from "./Reducer";

function createStore(reducer) {
  let state;
  let listeners = []; // array of methods

  function getState() {
    //getter method
    return state;
  }

  function dispatch(action) {
    //call the reducer to get the new state
    state = reducer(state, action);

    for (let i = 0; i < listeners.length; i++) {
      console.log(listeners[i]);
      listeners[i]();
    }
  }

  function subscribe(listener) {
    listeners.push(listener);
  }
  return { getState, dispatch, subscribe };
}
export default createStore(reducer);
