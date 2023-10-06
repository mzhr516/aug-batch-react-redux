import { createStore, combineReducers } from "redux";
import { CounterReducer } from "../Reducers/CounterReducer";
import { InputReducer } from "../Reducers/InputReducer";

const rootReducer = combineReducers({
  counter: CounterReducer,
  input: InputReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
