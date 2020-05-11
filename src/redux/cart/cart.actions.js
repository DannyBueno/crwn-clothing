
import CartActionTypes from './cart.types';


export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

//addItem function gets the new item and will return new action type object
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item 
});

//Remove item from checkout page with arrows  
export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

//clear from cart action
export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});