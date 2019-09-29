import React from "react";
import { connect } from "react-redux";
import "./arrow-quantity.styles.scss";
import "../../redux/cart/cart.action";
import { addItem, removeItem } from "../../redux/cart/cart.action";
const ArrowQuantity = ({ item, quantity, increase, decrease, horizontal }) => {
  const isHorizontal = () => {
    if (horizontal) {
      return (
        <div className="container-horizontal">
          <div onClick={() => increase(item)} className="arrow-horizontal">
            &#10094;
          </div>
          <div className="quantity-horizontal">{quantity}</div>
          <div onClick={() => decrease(item)} className="arrow-horizontal">
            &#10097;
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div onClick={() => decrease(item)} className="arrow">
          &#10094;
        </div>
        <div className="quantity">{quantity}</div>
        <div onClick={() => increase(item)} className="arrow">
          &#10095;
        </div>
      </div>
    );
  };
  return isHorizontal();
};

const mapStateToDispatch = dispatch => ({
  increase: item => dispatch(addItem(item)),
  decrease: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapStateToDispatch
)(ArrowQuantity);
