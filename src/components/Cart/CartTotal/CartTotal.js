import React from 'react'
import CartTotalStyle from './CartTotalStyle'

function CartTotal(props) {
    const {grandTotal}=props
  return (
    <CartTotalStyle>
        <td className="name_column"colSpan="6"><h2>Grand Total</h2></td>
        <td className="total_column"><h2>${grandTotal}</h2></td> 
      
        </CartTotalStyle>
  )
}

export default CartTotal
