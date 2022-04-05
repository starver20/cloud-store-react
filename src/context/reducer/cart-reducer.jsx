const cartReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CART': {
      console.log(action.payload.cart);
      return { ...state, cartProducts: action.payload.cart };
    }

    case 'UPDATE_ORDER_ADDRESS': {
      return { ...state, orderAddress: action.payload.address };
    }

    default:
      return state;
  }
};

export default cartReducer;
