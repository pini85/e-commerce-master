import React from "react";
import "./cart-item.styles.scss";
import ArrowQuantity from "../arrow-quantity/arrow-quantity.components";

const CartItem = ({ item, item: { imageUrl, name, price, quantity } }) => {
  return (
    <>
      <div className="cart-item">
        <img src={imageUrl} alt={name} className="cart-item__img" />
        <div className="cart-item__details">
          <div className="cart-item__name">{name}</div>
          <div className="cart-item__price">
            Total price: {price * quantity}$
          </div>
        </div>
        <div className="remove-arrow-container">
          <div className="remove"></div>
          <span>
            <ArrowQuantity item={item} quantity={quantity} horizontal={true} />
          </span>
          <div
            // onClick={() => removeItemFromCart(item)}
            className="remove-button"
          >
            &#10005;
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
