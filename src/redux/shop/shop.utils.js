import SHOP_DATA from "./shop.data";

// export const saleData = SHOP_DATA.map(item => {
//   const result = item.items.filter(item => {
//     if (item.sale === true) {
//       return item;
//     }
//   });
//   return result;
// });

export const saleData = () => {
  const data = SHOP_DATA;
  for (var key in data) {
    console.log(key, data[key]);
  }
};
Object.keys(SHOP_DATA);
console.log(saleData);

export const exclusiveData = SHOP_DATA.map(item => {
  const result = item.items.filter(item => {
    if (item.exclusive === true) {
      return item;
    }
  });
  return result;
});
