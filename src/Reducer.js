function reducer(state, action) {
  if (action.type === "bugAdded") {
    let lastId = 0;
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resoved: false,
      },
    ];
  } else if (action.type === "bugRemoved") {
    return state.filter((bug) => bug.id !== action.payload.id);
  }
}
