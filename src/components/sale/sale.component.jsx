import React from "react";
import { connect } from "react-redux";
import Card from "../card/card.component";
import { selectSaleCollection } from "../../redux/shop/shop.selectors";
import "./sale.styles.scss";
const sale = ({ sale }) => {
  return (
    <>
      <h2 className="heading-secondary">Sale</h2>
      {sale.map(items => {
        return items.map(item => {
          return (
            <>
              <Card item={item} isAll />
            </>
          );
        });
      })}
    </>
  );
};
const mapStateToProps = state => ({
  sale: selectSaleCollection(state)
});
export default connect(mapStateToProps)(sale);
