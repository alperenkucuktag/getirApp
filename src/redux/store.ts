import { thunk } from "redux-thunk";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { cartItems } from "./Reducers/cartItem";

const reducers = combineReducers({
  cartItems: cartItems,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
