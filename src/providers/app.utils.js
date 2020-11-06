export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };
  
  export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    );

    if(existingCartItem.quantity === 1) {
      return cartItems.filter(cartItem => 
        cartItem !== cartItemToRemove
      )
    }

      return cartItems.map(cartItem => 
          cartItem.id === cartItemToRemove.id 
          ? { ...cartItem, quantity: cartItem.quantity - 1}
          : cartItem
      )
  }

  export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToClear.id
    );

    return cartItems.filter(cartItem => cartItem !== existingCartItem);
  }

  export const calculateQuantity = (state, selector) => {
    return state.map(cartItem => cartItem[selector]).reduce((x, y) => x + y, 0)
  }

  export const addToLocalStorage = (items) => {
    return localStorage.setItem("cart_items", JSON.stringify(items));
  }

  export const toggleHidden = (state ) => {
      if(state) {
        document.body.style.overflow = "hidden";
        return false;
      } else {
        document.body.style.overflow = "visible";
        return true;
      }
  }
