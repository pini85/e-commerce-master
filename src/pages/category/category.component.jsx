import React from "react";
import { connect } from "react-redux";
import "./category.styles.scss";
import { selectCategory } from "../../redux/shop/shop.selectors";
import Card from "../../components/card/card.component";
const CategoryPage = ({ categories, match }) => {
  return (
    <div className="category-item__container">
      <div className="hidden"></div>
      {categories.map(array => {
        return array.map(item => {
          return (
            <>
              <Card
                styleCard={"category-card"}
                styleLayer={"category-card-layer"}
                item={item}
                isCategory={true}
                key={item.id}
              />
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
