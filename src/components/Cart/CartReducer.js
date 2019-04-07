import {
  REMOVE_FROM_CART,
  INCREASE_CART_QUANTITY,
  DECREASE_CART_QUANTITY
} from "./CartActionTypes";

import { ADD_TO_CART } from "../Products/ProductActionTypes";

const cartState = {
  products: [],
  total: 0
};
const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const products = [...state.products, action.payload];

      return { ...state, products };
    }
    case REMOVE_FROM_CART: {
      const findIndex = state.products.findIndex(
        item => item.id === action.payload.id
      );
      const products = [...state.products.slice(0, findIndex),
        ...state.products.slice(findIndex+1,state.products.length)
    
    ];

      return {
        ...state,
        products
      };
    }
    case INCREASE_CART_QUANTITY: {
      const products = state.products.map(item => {
        if (item.id !== action.id) {
          return item;
        }

        return {
          ...item,
          quantity: item.quantity + 1
        };
      });

      return { ...state, products };
    }
    case DECREASE_CART_QUANTITY: {
      const products = state.products.map(item => {
        if (item.id !== action.id) {
          return item;
        }

        return {
          ...item,
          quantity: item.quantity - 1
        };
      });

      return { ...state, products };
    }

    default: {
      return state;
    }
  }
};

export default cartReducer;
