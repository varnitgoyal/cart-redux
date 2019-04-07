import{
    GET_PRODUCTS,
    ADD_TO_CART
} from './ProductActionTypes';


const getProducts=()=>({
    type:GET_PRODUCTS,
})
const addToCart=(item)=>({
    type:ADD_TO_CART,
    payload:item
}
)

export default addToCart;