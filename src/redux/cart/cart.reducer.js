import { cartActionType } from "./cart.types";
import {addItemToCart} from './cart.util';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionType.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems:addItemToCart(state.cartItems,action.payload)
      }  
    default:
      return state;
  }
};

export default cartReducer;
