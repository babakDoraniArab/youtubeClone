import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {
  name: "Babak",
  age: "32",
};
const reducer = (initialState) => initialState;

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
// first of all you need to create initialState and reducer .after that  you need to import redux-thunk and redux dev-tools for
// applying the middleware and redux thunk also you have to import them too

export default store;
