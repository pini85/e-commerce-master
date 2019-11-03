import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";
import "./card.styles.scss";

const Card = ({ item, addItem, isCategory, styleCard, styleLayer }) => {
  const exclusive = () => {
    if (item.exclusive === true) {
      return (
        <div className="card__exclusive-container">
          <div className="card__exclusive"> EXCLUSIVE </div>
        </div>
      );
    }
  };
  const sale = () => {
    if (item.sale === true) {
      return (
        <div className="card__sale-container">
          <div className="card__sale"> {item.salePercentage}% OFF! </div>
        </div>
      );
    }
  };
  return (
    <Link
      to={isCategory ? `./shop/${item.name.toLowerCase()}` : "#"}
      className={isCategory ? "card-category" : "no-link"}
    >
      <div className={`card card-${item.index} ${styleCard}`}>
        <div className={`card__layer ${styleLayer}`}></div>
        <div className="card__img-container">
          <div className="card__title">{item.name}</div>
          <img src={"" + item.imageUrl} className="card__img" alt="" />
          {!isCategory ? (
            <div className="card__bottom">
              {exclusive()}
              <div className="card__price">{item.price}$</div>
              {sale()}
            </div>
          ) : null}
        </div>
        {!isCategory ? (
          <div onClick={() => addItem(item)} className="card__hover">
            Add to cart
          </div>
        ) : null}
      </div>
    </Link>
  );
};

const mapStateToDispatch = dispatch => ({
  addItem: item => dispatch(addItem(item))
});
export default connect(
  null,
  mapStateToDispatch
)(Card);
