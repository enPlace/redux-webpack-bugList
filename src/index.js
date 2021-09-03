import store from "./store/configureStore";
import { bugResolved, bugRemoved, bugAdded } from "./store/bugs";
import { projectAdded } from "./store/projects"


store.dispatch(projectAdded({name: "Project 1"}))
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

