import products from "./products";
import { GET_PRODUCTS, ADD_TO_CART } from "./ProductActionTypes";
import {
  INCREASE_CART_QUANTITY,
  DECREASE_CART_QUANTITY,
  REMOVE_FROM_CART
} from "../Cart/CartActionTypes";

const initialState = {
  products:[...products],


}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return state.products;
    }

    case ADD_TO_CART: {
      const products= state.products.map(item => {
        if (item.id !== action.payload.id) {
          return item;
        }

        return {
          ...item,
          quantity: item.quantity - 1,
          isAddedToCart:true


        };
      });

      return {...state, products, isAddedToCart:true};
    }
    case REMOVE_FROM_CART: {
      const products = [...state.products];
      const product = products.find(item => item.id === action.payload.id);
      product.quantity += action.payload.quantity;
      product.isAddedToCart=false;
      return {...state,products:[...products]};
    }

    case INCREASE_CART_QUANTITY: {
      const products= state.products.map(item => {
        if (item.id !== action.id) {
          return item;
        }

        return {
          ...item,
          quantity: item.quantity - 1
        };
      });
      return {...state,products:products}
    }

    case DECREASE_CART_QUANTITY: {
      const products= state.products.map(item => {
        if (item.id !== action.id) {
          return item;
        }

        return {
          ...item,
          quantity: item.quantity + 1
        };
      });

      return {
        ...state,
        products:products
      }

    }

    default: {
      return state;
    }
  }
};

export default productReducer;
