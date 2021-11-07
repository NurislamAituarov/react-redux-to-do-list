import { combineReducers, createStore } from "redux";
import reducer from "../reducers";
import counter from "../reducers/counter";

const store = createStore(
  combineReducers({ reducer, counter }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
