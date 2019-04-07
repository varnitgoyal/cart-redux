import React from 'react'
import CartItemStyle from './CartItemStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function CartItem(props) {
    const {id,name,price,quantity}=props.data;
    const {handleIncrease,handleDecrease,handleRemoveFromCart}=props
  return (
    <CartItemStyle>
    <div>
      

       
        <div>{name}</div>
        <span>${price} X</span>
        <FontAwesomeIcon className="fas_icon" onClick={()=>handleIncrease(id)}  icon="plus-circle"/>
        <span>{quantity}</span>
    
        <FontAwesomeIcon className="fas_icon" onClick={()=>handleDecrease(id)} icon="minus-circle"/>
        <span className="total_price">${quantity*price}</span>
        <FontAwesomeIcon className="fas_icon remove_icon" onClick={()=>handleRemoveFromCart(id,quantity)} icon="times-circle"/>
        
       

      
    </div>
    </CartItemStyle>

  )
}

export default CartItem
