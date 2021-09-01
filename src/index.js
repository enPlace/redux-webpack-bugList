import store from "./customStore";
import * as actions from "./Actions";

store.subscribe(()=>{
    console.log("store changed!")
})
store.subscribe(()=>console.log("hello"))
store.dispatch(actions.bugAdded("bug 1"));

console.log(store.getState())
