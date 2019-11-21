const SHOP_DATA = [
  {
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
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/bBCbZLH/1.png",
        price: 25,
        discountedPrice: 25 - 25 * 0.2
      },
      {
        id: 2,
        index: 1,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "Blue Beanie",
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/w7qfDTx/2.png",
        price: 18
      },
      {
        id: 3,
        index: 2,
        sale: true,
        salePercentage: 10,
        exclusive: true,
        name: "Brown Cowboy",
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/fYkN2Bn/3.png",
        price: 35,
        discountedPrice: 35 - 35 * 0.1
      },
      {
        id: 4,
        index: 3,
        sale: true,
        salePercentage: 5,
        exclusive: false,
        name: "Grey Brim",
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/g9qH13k/4.png",
        price: 25,
        discountedPrice: 25 - 25 * 0.05
      },
      {
        id: 5,
        index: 4,
        sale: false,
        salePercentage: "",
        exclusive: true,
        name: "Green Beanie",
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/ngb1XdD/5.png",
        price: 18
      },
      {
        id: 6,
        index: 5,
        sale: false,
        salePercentage: "",
        exclusive: true,
        name: "Palm Tree Cap",
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/jkkmvYw/6.png",
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
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/VxW1bwY/7.png",
        price: 18,
        discountedPrice: 18 - 18 * 0.08
      },
      {
        id: 8,
        index: 7,
        sale: true,
        salePercentage: 10,
        exclusive: false,
        name: "Wolf Cap",
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/NYwMmC2/8.png",
        price: 14,
        discountedPrice: 14 - 14 * 0.1
      },
      {
        id: 9,
        index: 8,
        sale: false,
        salePercentage: "",
        exclusive: false,
        popular: false,
        name: "Blue Snapback",
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/cLQWJgJ/9.png",
        price: 16
      }
    ]
  },

  {
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
        des: "This is the short description",
        imageUrl:
          " https://i.ibb.co/zV0bDQs/kisspng-skate-shoe-sneakers-basketball-shoe-hiking-boot-bagheera-5b217f4b3e7325-6008825515289219312558.png",
        price: 220,
        discountedPrice: 220 - 220 * 0.1
      },
      {
        id: 11,
        index: 1,
        sale: false,
        salePercentage: "",
        exclusive: true,
        name: "Adidas Yeezy",
        des: "This is the short description",
        imageUrl:
          " https://i.ibb.co/12zQR5w/kisspng-sneakers-skate-shoe-nike-air-max-running-runn-5b494b238a94c7-6551943515315300195677-1.png",
        price: 280
      },
      {
        id: 12,
        index: 2,
        sale: true,
        salePercentage: 30,
        exclusive: false,
        name: "Black Converse",
        des: "This is the short description",
        imageUrl:
          "https://i.ibb.co/4tL60WK/kisspng-sneakers-skate-shoe-discounts-and-allowances-onlin-red-sugar-beet-5b4c5ff3326df6-5039800615317319552066.png",
        price: 110,
        discountedPrice: 110 - 110 * 30
      },
      {
        id: 13,
        index: 3,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "Nike White AirForce",
        des: "This is the short description",
        imageUrl:
          "https://i.ibb.co/Ms67zwZ/kisspng-veja-sneakers-organic-cotton-shoe-leather-5be69313243550-1224510015418375871483.png",
        price: 160
      },
      {
        id: 14,
        index: 4,
        sale: false,
        salePercentage: "",
        exclusive: true,
        name: "Nike Red High Tops",
        des: "This is the short description",
        imageUrl:
          "https://i.ibb.co/K9wsWzh/kisspng-sneakers-skate-shoe-clothing-footwear-keela-a-custom-shoe-concept-by-caroline-ngamotu-5b6e3a483d02e6-8136092615339505362499.png",
        price: 160
      },
      {
        id: 15,
        index: 5,
        sale: true,
        salePercentage: 5,
        exclusive: false,
        name: "Nike Brown High Tops",
        des: "This is the short description",
        imageUrl:
          "https://i.ibb.co/3cC03G7/kisspng-sneakers-shoe-walking-replay-5b2c87b38fdd81-0664052815296449795893.png",
        price: 160,
        discountedPrice: 160 - 160 * 0.05
      },
      {
        id: 16,
        index: 6,
        sale: true,
        salePercentage: 8,
        exclusive: false,
        name: "Air Jordan Limited",
        des: "This is the short description",
        imageUrl:
          "https://i.ibb.co/0rR4jLB/kisspng-sneakers-diesel-skate-shoe-jeans-denim-shoes-5b381752b3b7b1-3314829415304026427361.png",
        price: 190,
        discountedPrice: 190 - 190 * 0.08
      },

      {
        id: 18,
        index: 8,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "Huskey sneakers",
        des: "This is the short description",
        imageUrl:
          " https://i.ibb.co/HCYK08x/kisspng-skate-shoe-sneakers-vans-water-shoe-bla-bla-5b3536bd54e487-9038199015302140773477.png",
        price: 300
      },
      {
        id: 19,
        index: 9,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "Pini wonderland",
        des: "This is the short description",
        imageUrl:
          "https://i.ibb.co/98BPZdy/kisspng-sneakers-boot-shoe-footwear-high-top-5be1e13207be55-8579860915415299060317.png",
        price: 50
      }
    ]
  },

  {
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
        des: "This is the short description",
        imageUrl:
          "https://i.ibb.co/zxvFnJK/kisspng-mexican-cuisine-sombrero-hat-cartoon-hat-5a998ae7c948d1-4298490615200120078245.png",
        price: 125
      },
      {
        id: 19,
        index: 1,
        sale: true,
        salePercentage: 10,
        exclusive: false,
        name: "Blue Jean Jacket",
        des: "This is the short description",
        imageUrl:
          "https://i.ibb.co/26r1SD4/kisspng-baseball-cap-nike-swoosh-khaki-nike-swoosh-5b3fb40419fb89-5811761715309015081064.png",

        price: 90,
        discountedPrice: 90 - 90 * 0.1
      },
      {
        id: 20,
        index: 2,
        sale: false,
        salePercentage: "",
        exclusive: true,
        name: "Grey Jean Jacket",
        des: "This is the short description",
        imageUrl:
          "https://i.ibb.co/m4bszsC/kisspng-hat-christmas-bonnet-christmas-hats-5aa73cf27f9690-7387314915209095545226.png",
        price: 90
      },
      {
        id: 21,
        index: 3,
        sale: true,
        salePercentage: 5,
        exclusive: true,
        name: "Brown Shearling",
        des: "This is the short description",
        imageUrl:
          "https://i.ibb.co/vv1DqQn/kisspng-hat-winter-cap-lovely-warm-hat-5aa72d9a6c95b6-4146744515209056264448.png",
        price: 165,
        discountedPrice: 165 - 165 * 0.05
      },
      {
        id: 22,
        index: 4,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "Tan Trench",
        des: "This is the short description",
        imageUrl:
          "https://i.ibb.co/vPLR5wq/kisspng-hat-bonnet-christmas-icon-christmas-hats-5a7dcbf33946c7-5563254615181936512346.png",
        price: 185
      },
      {
        id: 40,
        index: 5,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "bla bla",
        des: "This is the short description",
        imageUrl:
          "https://i.ibb.co/QKCx029/kisspng-jumpman-swoosh-cap-nike-hat-nike-cap-5b416554e165a8-2642474315310124369232.png",
        price: 140
      },
      {
        id: 40,
        index: 6,
        sale: false,
        salePercentage: "",
        exclusive: true,
        name: "fdghj",
        des: "This is the short description",
        imageUrl:
          "https://i.ibb.co/qW2KWyz/kisspng-hat-headgear-violet-fedora-lilac-hats-5ace5b31c46961-2651219115234732018045.png",
        price: 48
      },
      {
        id: 40,
        index: 7,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "fdgfghjklhj",
        des: "This is the short description",
        imageUrl:
          "https://i.ibb.co/T2zZzZb/kisspng-baseball-cap-nike-flat-cap-hat-caps-5acdfe88a48b18-831688531523449480674.png",
        price: 67
      },
      {
        id: 40,
        index: 7,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "fdgfghjkdfghjkjhgfdslhj",
        des: "This is the short description",
        imageUrl:
          "https://i.ibb.co/Dzdxmdk/kisspng-cowboy-hat-straw-hat-asphalt-cowboy-wear-a-hat-5b31ee1e9cd0c7-2546790215299988786423.png",
        price: 23
      }
    ]
  },

  {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 23,
        index: 0,
        sale: true,
        salePercentage: 15,
        exclusive: false,
        name: "Blue Tanktop",
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/SRTPbc9/hiclipart-com-5.png",
        price: 25,
        discountedPrice: 25 - 25 * 0.15
      },
      {
        id: 24,
        index: 1,
        sale: false,
        salePercentage: "",
        exclusive: true,
        name: "Floral Blouse",
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/zf33x7k/hiclipart-com-10.png ",
        price: 20
      },
      {
        id: 25,
        index: 2,
        sale: false,
        salePercentage: "",
        exclusive: true,
        name: "Floral Dress",
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/jJ8FsbZ/hiclipart-com-13.png",
        price: 80
      },
      {
        id: 26,
        index: 3,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "Red Dots Dress",
        des: "This is the short description",
        imageUrl: " https://i.ibb.co/hHH5ntj/hiclipart-com-8.png",

        price: 80
      },
      {
        id: 27,
        index: 4,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "Striped Sweater",
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/tZ7ZySY/hiclipart-com-1.png",
        price: 45
      },
      {
        id: 28,
        index: 5,
        sale: true,
        salePercentage: 7,
        exclusive: false,
        name: "Yellow Track Suit",
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/tHmw3wX/hiclipart-com-3.png",
        price: 135,
        discountedPrice: 135 - 135 * 0.07
      },
      {
        id: 29,
        index: 6,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "White Blouse",
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/JBWQVNL/hiclipart-com-14.png",
        price: 20
      },
      {
        id: 29,
        index: 7,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "dsfghjkhgfdsfghjk",
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/NtQWSY4/hiclipart-com-6.png",
        price: 165
      },
      {
        id: 29,
        index: 8,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "dsfghjkhgfdsfgdfghjhgfdeswdfghjhjk",
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/kMHd3Xq/hiclipart-com-2.png",
        price: 89
      }
    ]
  },

  {
    id: 5,
    sale: false,
    salePercentage: "",
    exclusive: false,
    title: "mens",
    routeName: "mens",
    items: [
      {
        id: 30,
        index: 0,
        sale: true,
        salePercentage: 7,
        exclusive: false,
        name: "Camo Down Vest",
        des: "This is the short description",
        imageUrl: "  https://i.ibb.co/pb1tmyk/clipartsky-com-2.png",
        price: 325,
        discountedPrice: 325 - 325 * 0.07
      },
      {
        id: 31,
        index: 1,
        sale: false,
        salePercentage: "",
        exclusive: true,
        name: "Floral T-shirt",
        des: "This is the short description",
        imageUrl: " https://i.ibb.co/ft8bPj9/erdtfgyhjgyftdresw.png",

        price: 20
      },
      {
        id: 32,
        index: 2,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "Black & White Longsleeve",
        des: "This is the short description",
        imageUrl: " https://i.ibb.co/hDTkFCZ/clipartsky-com-4.png",
        price: 25
      },
      {
        id: 33,
        index: 3,
        sale: false,
        salePercentage: "",
        exclusive: true,
        name: "Pink T-shirt",
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/tY3HRfH/5dd6985489553.png",
        price: 25
      },
      {
        id: 34,
        index: 4,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "Jean Long Sleeve",
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/3cn1Y0N/clipartsky-com-1.png",
        price: 40
      },
      {
        id: 35,
        index: 5,
        sale: false,
        salePercentage: "",
        exclusive: true,
        name: "Burgundy T-shirt",
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/sQKmS2x/clipartsky-com-3.png",
        price: 25
      },
      {
        id: 35,
        index: 6,
        sale: false,
        salePercentage: "",
        exclusive: true,
        name: "Burgundy Tdfghjhgfds-shirt",
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/Jtf4sR6/5dd697ffe51ca.png",
        price: 44
      },
      {
        id: 34,
        index: 7,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "Jean fghjkjhgfdeswLong Sleeve",
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/Vg6zD8n/5dd698300f2ec.png",
        price: 66
      },
      {
        id: 34,
        index: 8,
        sale: false,
        salePercentage: "",
        exclusive: false,
        name: "Jean fghjfghjkjhgfdfghjkjhgfkjhgfdeswLong Sleeve",
        des: "This is the short description",
        imageUrl: "https://i.ibb.co/n7479Y0/dfg.png",
        price: 132
      }
    ]
  }
];

export default SHOP_DATA;
