import {cartActionType} from './cart.types';

export const toggleCartDropdown = ()=>({
    type:cartActionType.TOGGLE_CART_DROPDOWN
});

export const addItem = item=>({
    type:cartActionType.ADD_ITEM,
    payload:item
});




