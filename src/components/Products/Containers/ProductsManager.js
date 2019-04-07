import { connect } from "react-redux";
import React, { Component } from "react";
import addToCart from "../ProductActions";
import ShowProduct from "../ShowProduct/ShowProduct";

export class ProductsManager extends Component {
  handleAddToCart = data => {
    this.props.addToCart({
      name: data.name,
      price: data.price,
      id: data.id,
      quantity: 1,
      productQuantity:data.quantity
    });
  };
  render() {
    return (
      <div className="products">
      
        {this.props.products.products.map(product => {
          return (
            <ShowProduct
              handleAddToCart={this.handleAddToCart}
              key={product.id}
              data={product}
              isAddedToCart={product.isAddedToCart}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { products: state.products,
    

  
  };
};

const mapDispatchToProps = {
  addToCart
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsManager);
