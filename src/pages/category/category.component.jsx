import React from "react";
import { connect } from "react-redux";
import "./category.styles.scss";
import { selectCategory } from "../../redux/shop/shop.selectors";
import Card from "../../components/card/card.component";
const CategoryPage = ({ categories, match }) => {
  console.log(match);
  return (
    <div className="category-item__container">
      <div className="hidden"></div>
      {categories.map(array => {
        return array.map(item => {
          return (
            <>
              <Card item={item} isCategory={true} />
            </>
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
