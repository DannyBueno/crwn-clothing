import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    //if TOGGLE_CART_HIDDEN is true, return false, if false return true 
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
          return {
              ...state,
              hidden: !state.hidden
          };

    //Return an obejct w/ all the state. 
    //Cartitems array has old and new items fired by action
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
    //Remove Item
        case CartActionTypes.REMOVE_ITEM: 
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };

     // return new array w/o any item we're clearing 
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            };
          default: 
            return state;
    }
};
export default cartReducer;