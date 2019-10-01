import React from "react";
import { connect } from "react-redux";
import "./checkout-item.styles.scss";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import ArrowQuantity from "../../components/arrow-quantity/arrow-quantity.components";
import { removeItemFromCart } from "../../redux/cart/cart.action";

const CheckoutItem = ({ items, removeItemFromCart }) => {
  return (
    <>
      {items.map(item => {
        return (
          <>
            <div className="checkout-item__container">
              <div className="checkout-item__image">
                <img src={"" + item.imageUrl} className="card__img" alt="" />
              </div>
              <div className="checkout-item-1-container">
                <div className="checkout-item__title">{item.name}</div>
                <div className="checkout-item__quantity-remove-container">
                  <div className="checkout-item__quantity">
                    <div className="checkout-item__quantity-title">
                      Quantity
                    </div>
                    <ArrowQuantity quantity={item.quantity} item={item} />
                  </div>
                  <div className="checkout-item__remove">
                    Delete
                    <div
                      onClick={() => removeItemFromCart(item)}
                      className="checkout-item__remove-button"
                    >
                      &#10005;
                    </div>
                  </div>
                </div>
              </div>

              <div className="checkout-item__price-title">Price</div>
              <div className="checkout-item__price">${item.price}</div>
            </div>
          </>
        );
      })}
    </>
  );
};

const mapStateToProps = state => ({
  items: selectCartItems(state)
});
const mapStateToDispatch = dispatch => ({
  removeItemFromCart: item => dispatch(removeItemFromCart(item))
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(CheckoutItem);
