import React, { Component } from "react";
import Slider from "react-slick";
import "./slick-carousel.styles.scss";
import Card from "../card/card.component";
import { SlickContainer } from "./slick-carousel.styles";

class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true
    };

    return (
      <SlickContainer>
        <Slider {...settings}>
          {this.props.data.map(items => {
            return <Card key={items.id} item={items} />;
          })}
        </Slider>
      </SlickContainer>
    );
  }
}
export default Carousel;
