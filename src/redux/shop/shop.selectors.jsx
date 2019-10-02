import { createSelector } from "reselect";

const selectShop = state => state.shop;
export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCategory = createSelector(
  [selectShop],
  shop =>
    shop.collections.map(item => {
      const array = [];
      const firstItem = [...item.items].splice(1, 1);
      const title = item.title;
      firstItem.map(item => {
        array.push({
          name: title,
          imageUrl: item.imageUrl
        });
      });
      return array;
    })
);
