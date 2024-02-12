const cartReducer = (state, action) => {
  

  
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // console.log(
    //   "🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product",
    //   product
    // );

    let cartProduct;

    cartProduct = {
      id: id + color,
      name: product.name,
      color,
      amount,
      image: product.image[0].url,
      price: product.price,
      max: product.stock,
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  } 
};

export default cartReducer;
