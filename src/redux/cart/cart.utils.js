
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
     );

     //check if existing cartItem exists
     if (existingCartItem) {
         //map returns a new array, quantity incremented 
         return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1 }
            //else return cartItem
            : cartItem 
         )
     }
        //else return new array 
     return [...cartItems, {...cartItemToAdd, quantity: 1}]; 
};

//removing or decreasing item from cart on checkout page 

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
   const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
   )
    //if we have exisiting cart item, check if quantity is = 1
    // remove item if item quntity = 1 
   if (existingCartItem.quantity === 1 ) {
    //filter out items that dont match
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
   
   }
   //Decrease the item quantity 
   return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id 
      ? {...cartItem, quantity: cartItem.quantity - 1}
      : cartItem
      );

}





