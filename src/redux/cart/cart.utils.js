
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