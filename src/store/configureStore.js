import { createStore } from "redux";
import reducer from "./bugs";
import { devToolsEnhancer } from "redux-devtools-extension";

export default function configureStore(){
  const store = createStore(
    reducer /* preloadedState, */,
    devToolsEnhancer({trace:true})
  );
  return store
}
