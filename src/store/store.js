import coffeReducer from "../reducers/coffeReducer";
import filterReducer from "../reducers/filterReducer";
import { createStore, combineReducers } from "redux";

export default () => {
  const store = createStore(
    combineReducers({
      addCoffe: coffeReducer,
      filter: filterReducer
    })
  );
  return store;
};
