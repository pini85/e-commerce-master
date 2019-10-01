import React from "react";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/shop.selectors";
import Carousel from "../../components/carousel/slick-carousel";
import "./shop.styles.scss";

const ShopPage = ({ collections }) => {
  console.log(collections);
  return (
    <div>
      {collections.map(item => {
        const sixItems = [...item.items].splice(1, 6);
        return (
          <div>
            <div className="item__title">
              <h2 className="heading-secondary">{item.title}</h2>
            </div>
            <div>
              <Carousel key={item.id} data={sixItems}></Carousel>;
            </div>
            <div className="show-more">
              <h3 className="show-more__title">{`show more ${item.title}`}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = state => ({
  collections: state.shop.collections
});
export default connect(mapStateToProps)(ShopPage);
