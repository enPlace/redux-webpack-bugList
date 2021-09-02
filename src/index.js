import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";

const store = configureStore()

store.subscribe(()=>{
    console.log("store changed!")
})
store.subscribe(()=>console.log("hello"))
store.dispatch(actions.bugAdded("bug 1"));

console.log(store.getState())
store.dispatch(actions.bugAdded("bug 2"))
store.dispatch(actions.bugAdded("another bug"))
console.log(store.getState())