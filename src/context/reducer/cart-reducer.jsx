const cartReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CART': {
      return { ...state, cartProducts: action.payload.cart };
    }

    default:
      return state;
  }
};

export default cartReducer;
