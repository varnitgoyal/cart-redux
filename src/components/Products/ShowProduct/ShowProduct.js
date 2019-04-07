import React from "react";
import {ShowProductStyled,Button}
  
  from "./ShowProductStyle";


function ShowProduct(props) {
  const { name, quantity, image, price } = props.data;
  const { handleAddToCart,isAddedToCart } = props;
  return (
   

    <ShowProductStyled>
   
      <div>
        <img width="100%" src={image} alt={name} />
        <h2> {name} </h2>
        <p>${price}</p>
       {quantity<1 ?<p> out of stock (0) </p> :  <p>in stock ({quantity})</p>}
       
        {isAddedToCart ? <Button disabled  onClick={() => handleAddToCart(props.data)}> Add to cart </Button> : <Button   onClick={() => handleAddToCart(props.data)}>Add to cart</Button>}
       
       
       
      </div>
    </ShowProductStyled>
  );
}

export default ShowProduct;
