import { connect } from "react-redux";
import React, { Component } from "react";
import CartItem from "../../CartItem/CartItem";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "../../cartActions";

class CartManager extends Component {
  componentDidMount() {}
  handleIncrease = id => {
    this.props.increaseQuantity(id);
  };

  handleDecrease = id => {
    this.props.decreaseQuantity(id);
  };

  handleRemoveFromCart=(id,quantity)=>{
    this.props.removeFromCart(id,quantity);
  }

  render() {
    return (
      <div>
        <h2>Your Cart</h2>
        {this.props.cart.products.map(item => {
          return (
            <CartItem
              handleIncrease={this.handleIncrease}
              handleDecrease={this.handleDecrease}
              handleRemoveFromCart={this.handleRemoveFromCart}
              
              key={item.id}
              data={item}
            />
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
const mapDispatchToProps = {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartManager);
