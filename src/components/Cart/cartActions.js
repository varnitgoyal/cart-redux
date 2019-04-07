import {
   
    INCREASE_CART_QUANTITY,
    REMOVE_FROM_CART,
    DECREASE_CART_QUANTITY
    } from './CartActionTypes'



const increaseQuantity=(id)=>({
        type:INCREASE_CART_QUANTITY,
        id:id
    }
)

const decreaseQuantity=(id)=>({
        type:DECREASE_CART_QUANTITY,
        id:id
    }
)

const removeFromCart=(id,quantity)=>({
    type:REMOVE_FROM_CART,
    payload:{id,quantity}
}
)


export {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
}
