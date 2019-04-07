import React from "react";
import CartItemStyle from "./CartItemStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartItem(props) {
  const { id, name, price, quantity, productQuantity } = props.data;
  const { handleIncrease, handleDecrease, handleRemoveFromCart } = props;
  return (
    
    <CartItemStyle>
 
      <td className="name_column">{name}</td>
      <td>${price}</td>
      <td>X</td>
      <td className="icon_column">
      {productQuantity<=1?
          <FontAwesomeIcon
         
          className="fas_icon disabled"
          onClick={() => handleIncrease(id)}
          icon="plus-circle"
        /> : 
        <FontAwesomeIcon
        className="fas_icon"
        onClick={() => handleIncrease(id)}
        icon="plus-circle"
      /> }
    
      </td>
      <td className="quantity_column">{quantity}</td>
      <td className="icon_column">
        <FontAwesomeIcon
          className="fas_icon"
          onClick={() => handleDecrease(id, quantity)}
          icon="minus-circle"
        />
      </td>
      <td className="total_column">${quantity * price}</td>
      <td>
        <FontAwesomeIcon
          className="fas_icon remove_icon"
          onClick={() => handleRemoveFromCart(id, quantity)}
          icon="times-circle"
        />
      </td>
    </CartItemStyle>
  );
}

export default CartItem;
