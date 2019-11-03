import SHOP_DATA from "./shop.data";
import { saleData, exclusiveData } from "./shop.utils";

const INITIAL_STATE = {
  collections: SHOP_DATA,
  sale: saleData,
  exclusive: exclusiveData
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
