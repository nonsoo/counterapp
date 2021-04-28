import { combineReducers, createStore } from "redux";
import counterReducer from "./ducks/counter";

//combine reducers combines all the reducers into one so that you can use it in the store
const reducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(reducer);

export default store;
