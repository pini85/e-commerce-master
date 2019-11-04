import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { selectCartItemsTotal } from "../../redux/cart/cart.selectors";
import { removeItemFromCart } from "../../redux/cart/cart.action";
import StripeButton from "../../components/stripe-button/strip-button.component";

const Checkout = ({ total, quantity }) => {
  return (
    <div className="checkout-container">
      <CheckoutItem />
      <div className="sub-total">
        {`Subtotal (${quantity} ${quantity > 1 ? "items" : "item"}):`}
        <span>${total}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 -Exp: 01/20 - CVV: 123
      </div>

      <StripeButton price={total} />
    </div>
  );
};

const mapStateToProps = state => ({
  quantity: selectCartItemsCount(state),
  total: selectCartItemsTotal(state)
});
const mapStateToDispatch = dispatch => ({
  removeItemFromCart: item => dispatch(removeItemFromCart(item))
});
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Checkout);
