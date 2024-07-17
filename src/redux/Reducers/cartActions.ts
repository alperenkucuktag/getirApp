import { REMOVE_FROM_CART, CLEAR_CART, ADD_TO_CART } from "../constant";

export const removeFromCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload: payload,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
export const addTocart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});
