const SHOP_DATA = {
  shoes: {
    id: 1,
    title: "Shoes",
    routeName: "shoes",
    items: [
      {
        id: 1,
        index: 0,
        sale: true,
        salePercentage: 20,
        exclusive: false,
        name: "Brown Brim",
        imageUrl: "https://i.ibb.co/d5cYR3S/1.png",
        price: 25
      },
      {
        id: 2,
        index: 1,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "Blue Beanie",
        imageUrl: "https://i.ibb.co/JCBkdT2/2.png",
        price: 18
      },
      {
        id: 3,
        index: 2,
        sale: true,
        salePercentage: 10,
        exclusive: true,
        name: "Brown Cowboy",
        imageUrl: "https://i.ibb.co/3CK0d1N/3.png",
        price: 35
      },
      {
        id: 4,
        index: 3,
        sale: true,
        salePercentage: 5,
        exclusive: false,
        name: "Grey Brim",
        imageUrl: "https://i.ibb.co/zHV7Z4f/4.png",
        price: 25
      },
      {
        id: 5,
        index: 4,
        sale: false,
        exclusive: true,
        name: "Green Beanie",
        imageUrl: "https://i.ibb.co/TT14XHP/5.png",
        price: 18
      },
      {
        id: 6,
        index: 5,
        sale: false,
        exclusive: true,
        name: "Palm Tree Cap",
        imageUrl: "https://i.ibb.co/nLZPBdZ/6.png",
        price: 14
      },
      {
        id: 7,
        index: 6,
        sale: true,
        salePercentage: 8,
        exclusive: false,
        exclusiveText: "exclusive",
        name: "Red Beanie",
        imageUrl: "https://i.ibb.co/VYtXhKG/7.png",
        price: 18
      },
      {
        id: 8,
        index: 7,
        sale: true,
        salePercentage: 10,
        exclusive: false,
        name: "Wolf Cap",
        imageUrl: "https://i.ibb.co/ZLwnby4/8.png",
        price: 14
      },
      {
        id: 9,
        index: 8,
        sale: false,
        salePercentage: "",
        exclusive: false,
        popular: false,
        name: "Blue Snapback",
        imageUrl: "https://i.ibb.co/jH7sTkx/9.png",
        price: 16
      }
    ]
  },

  sneakers: {
    id: 2,
    title: "Sneakers",
    routeName: "sneakers",
    items: [
      {
        id: 10,
        index: 0,
        sale: true,
        salePercentage: 10,
        exclusive: false,
        name: "Adidas NMD",
        imageUrl:
          " https://i.ibb.co/Mp9cLKJ/kisspng-sneakers-skate-shoe-nike-air-max-running-runn-5b494b238a94c7-6551943515315300195677-1.png",
        price: 220
      },
      {
        id: 11,
        index: 1,
        sale: false,
        salePercentage: "",
        exclusive: true,
        name: "Adidas Yeezy",
        imageUrl:
          "https://i.ibb.co/zPdt478/kisspng-skate-shoe-sneakers-basketball-shoe-hiking-boot-bagheera-5b217f4b3e7325-6008825515289219312558.png",
        price: 280
      },
      {
        id: 12,
        index: 2,
        sale: true,
        salePercentage: 30,
        exclusive: false,
        name: "Black Converse",
        imageUrl:
          "https://i.ibb.co/DwhR3Q1/kisspng-skate-shoe-sneakers-vans-water-shoe-bla-bla-5b3536bd54e487-9038199015302140773477.png",
        price: 110
      },
      {
        id: 13,
        index: 3,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "Nike White AirForce",
        imageUrl:
          "https://i.ibb.co/Mp9cLKJ/kisspng-sneakers-skate-shoe-nike-air-max-running-runn-5b494b238a94c7-6551943515315300195677-1.png",
        price: 160
      },
      {
        id: 14,
        index: 4,
        sale: false,
        salePercentage: "",
        exclusive: true,
        name: "Nike Red High Tops",
        imageUrl:
          "https://i.ibb.co/qnNHStz/kisspng-veja-sneakers-organic-cotton-shoe-leather-5be69313243550-1224510015418375871483.png",
        price: 160
      },
      {
        id: 15,
        index: 5,
        sale: true,
        salePercentage: 5,
        exclusive: false,
        name: "Nike Brown High Tops",
        imageUrl:
          "https://i.ibb.co/FKZCpmp/kisspng-sneakers-skate-shoe-clothing-footwear-keela-a-custom-shoe-concept-by-caroline-ngamotu-5b6e3a483d02e6-8136092615339505362499.png",
        price: 160
      },
      {
        id: 16,
        index: 6,
        sale: true,
        salePercentage: 80,
        exclusive: false,
        name: "Air Jordan Limited",
        imageUrl:
          "https://i.ibb.co/m4P1kYr/kisspng-sneakers-boot-shoe-footwear-high-top-5be1e13207be55-8579860915415299060317.png",
        price: 190
      },
      {
        id: 17,
        index: 7,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "Timberlands",
        imageUrl:
          "https://i.ibb.co/JptGmXL/kisspng-sneakers-diesel-skate-shoe-jeans-denim-shoes-5b381752b3b7b1-3314829415304026427361.png",
        price: 200
      },
      {
        id: 18,
        index: 8,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "Huskey sneakers",
        imageUrl:
          "https://i.ibb.co/DG3HBvv/kisspng-sneakers-shoe-walking-replay-5b2c87b38fdd81-0664052815296449795893.png",
        price: 300
      },
      {
        id: 19,
        index: 9,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "Pini wonderland",
        imageUrl:
          "https://i.ibb.co/DgtRDx1/kisspng-sneakers-skate-shoe-discounts-and-allowances-onlin-red-sugar-beet-5b4c5ff3326df6-5039800615317319552066.png",
        price: 50
      }
    ]
  },
  jackets: {
    id: 3,
    title: "Jackets",
    routeName: "jackets",
    items: [
      {
        id: 18,
        index: 0,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "Black Jean Shearling",
        imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
        price: 125
      },
      {
        id: 19,
        index: 1,
        sale: true,
        salePercentage: "10",
        exclusive: false,
        name: "Blue Jean Jacket",
        imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
        price: 90
      },
      {
        id: 20,
        index: 2,
        sale: false,
        salePercentage: "",
        exclusive: true,
        name: "Grey Jean Jacket",
        imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
        price: 90
      },
      {
        id: 21,
        index: 3,
        sale: true,
        salePercentage: "5",
        exclusive: true,
        name: "Brown Shearling",
        imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
        price: 165
      },
      {
        id: 22,
        index: 4,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "Tan Trench",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 185
      }
    ]
  },
  womans: {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 23,
        index: 0,
        sale: true,
        salePercentage: "15",
        exclusive: false,
        name: "Blue Tanktop",
        imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
        price: 25
      },
      {
        id: 24,
        index: 1,
        sale: false,
        salePercentage: "",
        exclusive: true,
        name: "Floral Blouse",
        imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
        price: 20
      },
      {
        id: 25,
        index: 2,
        sale: false,
        salePercentage: "",
        exclusive: true,
        name: "Floral Dress",
        imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
        price: 80
      },
      {
        id: 26,
        index: 3,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "Red Dots Dress",
        imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
        price: 80
      },
      {
        id: 27,
        index: 4,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "Striped Sweater",
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        price: 45
      },
      {
        id: 28,
        index: 5,
        sale: true,
        salePercentage: "7",
        exclusive: false,
        name: "Yellow Track Suit",
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        price: 135
      },
      {
        id: 29,
        index: 6,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "White Blouse",
        imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
        price: 20
      }
    ]
  },
  mens: {
    id: 5,
    sale: false,
    salePercentage: "",
    exclusive: false,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 30,
        index: 0,
        sale: true,
        salePercentage: "7",
        exclusive: false,
        name: "Camo Down Vest",
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: 325
      },
      {
        id: 31,
        index: 1,
        sale: false,
        salePercentage: "",
        exclusive: true,
        name: "Floral T-shirt",
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: 20
      },
      {
        id: 32,
        index: 2,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "Black & White Longsleeve",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 25
      },
      {
        id: 33,
        index: 3,
        sale: false,
        salePercentage: "",
        exclusive: true,
        name: "Pink T-shirt",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 25
      },
      {
        id: 34,
        index: 4,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "Jean Long Sleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 40
      },
      {
        id: 35,
        index: 5,
        sale: false,
        salePercentage: "",
        exclusive: true,
        name: "Burgundy T-shirt",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
