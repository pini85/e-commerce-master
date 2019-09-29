import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartItemsTotal } from "../../redux/cart/cart.selectors";
import ArrowQuantity from "../../components/arrow-quantity/arrow-quantity.components";
import { removeItemFromCart } from "../../redux/cart/cart.action";

class Checkout extends Component {
  render() {
    return (
      <div>
        {this.props.items.map(item => {
          return (
            <>
              <ArrowQuantity
                quantity={item.quantity}
                item={item}
              ></ArrowQuantity>

              <div>name:{item.name}</div>
              <div>price:{item.price}</div>

              <div>indvidual:{item.quantity * item.price}</div>
              <div onClick={() => this.props.removeItemFromCart(item)}>
                REMOVE
              </div>
            </>
          );
        })}
        <div>total:{this.props.total}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: selectCartItems(state),
  total: selectCartItemsTotal(state)
});
const mapStateToDispatch = dispatch => ({
  removeItemFromCart: item => dispatch(removeItemFromCart(item))
});
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Checkout);
