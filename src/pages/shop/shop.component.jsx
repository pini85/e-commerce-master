import React from "react";
import { Route } from "react-router-dom";
import Collections from "../../components/collection/collection-preview.component";
import Shoes from "../../components/shoes/shoes.component";
import "./shop.styles.scss";

const ShopPage = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={Collections} />
      <Route exact path={`${match.path}/:shoes`} component={Shoes} />
    </div>
  );
};

export default ShopPage;
