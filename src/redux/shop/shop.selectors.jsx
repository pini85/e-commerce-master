import { createSelector } from "reselect";
const COLLECTION_ID_MAP = {
  shoes: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCategory = createSelector([selectShop], shop =>
  shop.collections.map(item => {
    const array = [];
    const firstItem = [...item.items].splice(1, 1);
    const title = item.title;
    const routeName = item.routeName;
    firstItem.map(item => {
      return array.push({
        name: title,
        imageUrl: item.imageUrl,
        routeName
      });
    });
    return array;
  })
);

export const selectCollection = collectionUrlParam =>
  createSelector([selectCollections], collections =>
    collections.find(collection => {
      return collection.id === COLLECTION_ID_MAP[collectionUrlParam];
    })
  );

export const selectSaleCollection = createSelector([selectShop], shop => {
  return shop.sale.map(items => {
    return items;
  });
});

export const selectExclusiveCollection = createSelector([selectShop], shop => {
  return shop.exclusive.map(items => {
    console.log(items);

    return items;
  });
});
