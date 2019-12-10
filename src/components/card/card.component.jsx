import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";
import CustomButton from "../custom-button/custom-button.component";
import "./card.styles.scss";

const Card = ({ item, addItem, isCategory, styleCard, isAll, styleLayer }) => {
  // const exclusive = () => {
  //   if (item.exclusive === true) {
  //     return (
  //       <div className="card__exclusive-container">
  //         <div className="card__exclusive"> EXCLUSIVE </div>
  //       </div>
  //     );
  //   }
  // };
  // const sale = () => {
  //   if (item.sale === true) {
  //     return (
  //       <div className="card__sale-container">
  //         <div className="card__sale"> {item.salePercentage}% OFF! </div>
  //       </div>
  //     );
  //   }
  // };

  // const collectionCard = () => {
  //   if (styleCard) {
  //     return styleCard;
  //   } else return "";
  // };
  const cardType = () => {
    if (isAll) {
      return "container all-card";
    } else if (isCategory) {
      return "container category-card";
    } else {
      return "container";
    }
  };
  return (
    <div className={cardType()}>
      <div
        className={
          isCategory ? "image-container image-category" : "image-container"
        }
      >
        <img src={"" + item.imageUrl} className="image-class" alt="" />
      </div>
      {!isCategory ? (
        <div className="down">
          <div>
            <h2 className="card-title">
              <div className="title">{item.name}</div>
            </h2>
          </div>

          <p className="card-des">
            <div className="des">{item.des}</div>
          </p>
          <div className="exclusive">{item.exclusive ? "Exclusive" : ""}</div>
          <div className="price-container">
            {item.sale ? (
              <span className="price">${item.discountedPrice}</span>
            ) : (
              ""
            )}
            <span className={item.sale ? "line-through" : "price"}>
              ${item.price}
            </span>
          </div>
        </div>
      ) : (
        <div className="category-name">{item.name}</div>
      )}

      {!isCategory ? (
        <CustomButton onClick={() => addItem(item)}>Add to cart</CustomButton>
      ) : null}
    </div>
  );
};

const mapStateToDispatch = dispatch => ({
  addItem: item => dispatch(addItem(item))
});
export default connect(null, mapStateToDispatch)(Card);
