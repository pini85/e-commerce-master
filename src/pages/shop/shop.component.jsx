import React from "react";
import SHOP_DATA from "./shop.data";
import Carousel from "../../components/carousel/slick-carousel";
import "./shop.styles.scss";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const data = this.state.collections;

    return (
      <div>
        {data.map(item => {
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
  }
}
export default ShopPage;
