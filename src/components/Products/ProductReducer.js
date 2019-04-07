import products from "./products";
import { GET_PRODUCTS, ADD_TO_CART } from "./ProductActionTypes";
import {
  INCREASE_CART_QUANTITY,
  DECREASE_CART_QUANTITY,
  REMOVE_FROM_CART
} from "../Cart/CartActionTypes";

const initialState = [...products];
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return state;
    }

    case ADD_TO_CART: {
      return state.map(item => {
        if (item.id !== action.payload.id) {
          return item;
        }

        return {
          ...item,
          quantity: item.quantity - 1
        };
      });
    }
    case REMOVE_FROM_CART: {
      const products = [...state];
      const product = products.find(item => item.id === action.payload.id);
      product.quantity += action.payload.quantity;
      return [...products];
    }

    case INCREASE_CART_QUANTITY: {
      return state.map(item => {
        if (item.id !== action.id) {
          return item;
        }

        return {
          ...item,
          quantity: item.quantity - 1
        };
      });
    }

    case DECREASE_CART_QUANTITY: {
      return state.map(item => {
        if (item.id !== action.id) {
          return item;
        }

        return {
          ...item,
          quantity: item.quantity + 1
        };
      });
    }

    default: {
      return state;
    }
  }
};

export default productReducer;
