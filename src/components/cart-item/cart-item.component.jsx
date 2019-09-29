import React from "react";
import "./cart-item.styles.scss";
import ArrowQuantity from "../arrow-quantity/arrow-quantity.components";

const CartItem = ({ item, item: { imageUrl, name, price, quantity } }) => {
  return (
    <div>
      <div className="cart-item">
        <span>
          <ArrowQuantity item={item} quantity={quantity} horizontal={true} />
        </span>
        <img src={imageUrl} alt={name} className="cart-item__img" />

        <div className="cart-item__details">
          <div className="cart-item__name">{name}</div>
          <div className="cart-item__price">
            {price}
            {quantity}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
