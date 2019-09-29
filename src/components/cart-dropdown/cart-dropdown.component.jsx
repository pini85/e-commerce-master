import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { withRouter } from "react-router-dom";

class CartDropDown extends React.Component {
  render() {
    return (
      <div className="cart-dropdown">
        <div className="cart-total">Total items:</div>
        <div className="cart-items">
          {this.props.cartItems.length ? (
            this.props.cartItems.map(cartItem => (
              <CartItem key={cartItem.key} item={cartItem} />
            ))
          ) : (
            <div className="cart-items-empty-message">
              Please add items to your shopping cart
            </div>
          )}
        </div>
        <div className="cart-dropdown-button">
          <CustomButton
            onClick={() => {
              this.props.history.push("/checkout");
              this.props.hideCart();
            }}
          >
            Proceed to checkout
          </CustomButton>
        </div>
      </div>
    );
  }
}
const mapStateToDispatch = dispatch => ({
  hideCart: () => dispatch(toggleCartHidden())
});
const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});
export default withRouter(
  connect(
    mapStateToProps,
    mapStateToDispatch
  )(CartDropDown)
);
