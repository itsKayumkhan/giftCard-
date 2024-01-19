import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
  CLEAR_CART
} from "../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], shippingInfo: {} },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.product === newItem.product);
    
      if (existingItem) {
        // If the item already exists, update its quantity
        const updatedCartItems = state.cartItems.map(item =>
          item.product === existingItem.product
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
    
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // If the item doesn't exist, add it to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      }
    
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      };

    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };
      case CLEAR_CART:
        return {
          ...state,
          cartItems: [],
        };

    default:
      return state;
  }
};
