import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
});
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
// first of all you need to create initialState and reducer .after that  you need to import redux-thunk and redux dev-tools for
// applying the middleware and redux thunk also you have to import them too

export default store;
