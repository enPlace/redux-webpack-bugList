import store from "./Store";
import { bugAdded, bugRemoved, bugResolved} from "./Actions";


const unsubscribe = store.subscribe(() => {
  console.log("storechangeed", store.getState());
});

store.dispatch(bugAdded("bugeeeee 1"));
store.dispatch(bugResolved(1))
unsubscribe();
store.dispatch(bugRemoved())
console.log(store.getState());

