import configureStore from "./store/configureStore";
import { bugResolved, bugRemoved, bugAdded } from "./store/bugs";

const store = configureStore();

store.subscribe(() => {
  console.log("store changed!");
});

store.subscribe(() => console.log("hello"));
store.dispatch(bugAdded({ description: "bug 1" }));

console.log(store.getState());
store.dispatch(bugAdded({ description: "bug 2" }));
store.dispatch(bugAdded({ description: "another bug" }));
store.dispatch(bugResolved({ id: 2 }));
store.dispatch(bugAdded({ description: "bug to be removed" }));
store.dispatch(bugRemoved({id: 4}))
console.log(store.getState());

