export const reducer = (state, action) => {
  switch (action.type) {
    case "ADDTOWISHLIST":
      const temp = state.productData.map((product) =>
        product.id === action.payload
          ? { ...product, wishlist: !product.wishlist }
          : product
      );
      return { ...state, productData: temp };

    case "ROUTE":
      console.log("Here");
      return { ...state, route: action.payload };

    case "INITIALLOAD":
      return { ...state, productData: action.payload };

    default:
      break;
  }
};
