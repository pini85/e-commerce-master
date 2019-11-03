import React from "react";
import { Route, Switch } from "react-router-dom";
import Collections from "../../components/collection/collection-preview.component";
import CollectionPage from "../collection/collection.component";
import Sale from "../../components/sale/sale.component";
import Exclusive from "../../components/exclusive/exclusive.component";
import "./shop.styles.scss";

const ShopPage = ({ match }) => {
  return (
    <div>
      <Switch>
        <Route exact path={`${match.path}`} component={Collections} />
        <Route exact path={`${match.path}/sale`} component={Sale} />
        <Route exact path={`${match.path}/exclusive`} component={Exclusive} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </Switch>
    </div>
  );
};

export default ShopPage;
