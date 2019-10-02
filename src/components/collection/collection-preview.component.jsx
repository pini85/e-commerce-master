import React from "react";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/shop.selectors";
import "./collection-preview.styles.scss";
import Carousel from "../carousel/slick-carousel";

const Collections = ({ collections }) => {
  return (
    <>
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
    </>
  );
};
const mapStateToProps = state => ({
  collections: selectCollections(state)
});

export default connect(mapStateToProps)(Collections);
