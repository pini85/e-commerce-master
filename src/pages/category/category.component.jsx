import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./category.styles.scss";
import { selectCategory } from "../../redux/shop/shop.selectors";
import Card from "../../components/card/card.component";
const CategoryPage = ({ categories, match }) => {
  return (
    <div className="category-item__container">
      {categories.map(array => {
        return array.map(item => {
          return (
            <Link to={`shop/${item.routeName}`}>
              <Card
                styleCard={"category-card"}
                styleLayer={"category-card-layer"}
                item={item}
                isCategory
                key={item.id}
              />
            </Link>
          );
        });
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  categories: selectCategory(state)
});
export default connect(mapStateToProps)(CategoryPage);
