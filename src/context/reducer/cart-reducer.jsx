const cartReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CART': {
      return { ...state, cartProducts: action.payload.cart };
    }

    case 'UPDATE_ORDER_ADDRESS': {
      return { ...state, orderAddress: action.payload.address };
    }

    case 'UPDATE_ORDER': {
      let newOrders = [...state.previousOrders];
      newOrders.push(action.payload.order);

      return { ...state, previousOrders: newOrders };
    }

    default:
      return state;
  }
};

export default cartReducer;
