const INITIAL_STATE = {
  sections: [
    {
      title: "sale",
      image: "",
      id: 1,
      linkUrl: "sale"
    },
    {
      title: "exclusive",
      image: "",
      id: 2,
      linkUrl: "exclusive"
    },
    {
      title: "popular",
      image: "",
      id: 3,
      linkUrl: "popular"
    },
    {
      title: "Mens",
      image: "",
      id: 4,
      linkUrl: "mens"
    },
    {
      title: "Womens",
      image: "",
      id: 5,
      linkUrl: "womens"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
