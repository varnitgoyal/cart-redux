import React from "react";
import {ShowProductStyled,Button}
  
  from "./ShowProductStyle";

function ShowProduct(props) {
  const { name, quantity, image, price } = props.data;
  const { handleAddToCart } = props;
  return (
    <ShowProductStyled>
      <div>
        <img width="100%" src={image} alt={name} />
        <h2> {name} </h2>
        <p>${price}</p>
        <p>in stock ({quantity})</p>
       

        <Button onClick={() => handleAddToCart(props.data)}>
       
          Add to cart
        </Button>
      </div>
    </ShowProductStyled>
  );
}

export default ShowProduct;
