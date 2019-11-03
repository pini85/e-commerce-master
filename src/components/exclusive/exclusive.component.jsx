import React from "react";
import { connect } from "react-redux";
import { selectExclusiveCollection } from "../../redux/shop/shop.selectors";
import Card from "../card/card.component";
import "./exclusive.styles.scss";
const exclusive = ({ exclusive }) => {
  return (
    <>
      <h2 className="heading-secondary">Sale</h2>
      {exclusive.map(items => {
        return items.map(item => {
          return (
            <>
              <Card item={item} styleCard={"collection-card"} />
            </>
          );
        });
      })}
    </>
  );
};

const mapStateToProps = state => ({
  exclusive: selectExclusiveCollection(state)
});
export default connect(mapStateToProps)(exclusive);
