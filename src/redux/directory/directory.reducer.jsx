const INITIAL_STATE = {
  sections: [
    {
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 4,
      linkUrl: "shop/hats",
    },
    {
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 5,
      linkUrl: "shop/jackets",
    },
    {
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 6,
      linkUrl: "shop/sneakers",
    },
    {
      title: "Womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 1,
      linkUrl: "shop/womens",
    },
    {
      title: "Kids",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/kids",
    },
    {
      title: "Men",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 3,
      linkUrl: "shop/men",
    },
  ],
};
const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
