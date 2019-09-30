import React from "react";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { selectCartItemsTotal } from "../../redux/cart/cart.selectors";
import { removeItemFromCart } from "../../redux/cart/cart.action";

const Checkout = ({ total, quantity }) => {
  return (
    <div>
      <CheckoutItem />
      <div>
        {`Subtotal (${quantity} ${quantity > 1 ? "items" : "item"}) $${total}`}
      </div>
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
