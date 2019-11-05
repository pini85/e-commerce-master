import React from "react";
import { connect } from "react-redux";
import "../../redux/cart/cart.action";
import { addItem, removeItem } from "../../redux/cart/cart.action";
import {
  HorizontalContainer,
  HorizontalArrow,
  VerticalContainer,
  VerticalArrow,
  VerticalQuantity
} from "./arrow.quantity.styles";
const ArrowQuantity = ({ item, quantity, increase, decrease, horizontal }) => {
  const isHorizontal = () => {
    if (horizontal) {
      return (
        <HorizontalContainer>
          <HorizontalArrow onClick={() => increase(item)}>
            &#10094;
          </HorizontalArrow>
          <div>{quantity}</div>
          <HorizontalArrow onClick={() => decrease(item)}>
            &#10097;
          </HorizontalArrow>
        </HorizontalContainer>
      );
    }
    return (
      <VerticalContainer>
        <VerticalArrow onClick={() => decrease(item)}>&#10094;</VerticalArrow>
        <VerticalQuantity>{quantity}</VerticalQuantity>
        <VerticalArrow onClick={() => increase(item)}>&#10095;</VerticalArrow>
      </VerticalContainer>
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
