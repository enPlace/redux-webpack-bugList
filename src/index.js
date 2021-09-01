import store from "./Store";
import { bugAdded, bugRemoved} from "./Actions";


const unsubscribe = store.subscribe(() => {
  console.log("storechangeed", store.getState());
});

store.dispatch(bugAdded("bug1"));
unsubscribe();
store.dispatch(bugRemoved())
console.log(store.getState());

