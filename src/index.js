import store from "./store/configureStore";
import { bugResolved, bugRemoved, bugAdded, bugAssigned } from "./store/bugs";
import { projectAdded } from "./store/projects";
import { unresolvedBugs, bugsByUser } from "./store/bugs";
import { memberAdded } from "./store/team"

store.dispatch(projectAdded({ name: "Project 1" }));
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
store.dispatch(bugRemoved({ id: 4 }));

store.dispatch(bugAssigned({ id: 2, teamMemberId: 2 }));

console.log(store.getState());
const x = unresolvedBugs(store.getState());

const y = unresolvedBugs(store.getState());

console.log(x, y);
console.log(x === y);

store.dispatch(memberAdded({name: "John"}))
store.dispatch(memberAdded({name: "Ashley"}))
const member1 = bugsByUser(1)(store.getState())
const member2 = bugsByUser(2)(store.getState())


console.log(member1, member2)
console.log(store.getState())