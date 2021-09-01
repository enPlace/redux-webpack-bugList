import * as actions from "./ActionTypes";

export function bugAdded(description) {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description: description,
    },
  };
}

export function bugRemoved() {
  return {
    type: actions.BUG_REMOVED,
    payload: {
      id: 1,
    },
  };
}
