function createStore() {
  let state = 1;

  function getState() {
    return state;
  }

  return { getState };
}
export default createStore();
