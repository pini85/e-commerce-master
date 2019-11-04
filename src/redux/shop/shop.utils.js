import SHOP_DATA from "./shop.data";

export const saleData = SHOP_DATA.map(item => {
  const result = item.items.filter(item => {
    if (item.sale === true) {
      return item;
    }
  });
  return result;
});
// export const saleData = () => {
//   for (var key in SHOP_DATA) {
//     const data = SHOP_DATA[key];
//     const result = data.items.filter(item => {
//       if (item.sale === true) {
//         return item;
//       }
//     });
//     return result;
//   }
// };

export const exclusiveData = SHOP_DATA.map(item => {
  const result = item.items.filter(item => {
    if (item.exclusive === true) {
      return item;
    }
  });
  return result;
});
// export const exclusiveData = () => {
//   for (var key in SHOP_DATA) {
//     //
//     const data = SHOP_DATA[key];
//     const result = data.items.filter(item => {
//       if (item.exclusive === true) {
//         return item;
//       }
//     });
//     return result;
//   }
// };
