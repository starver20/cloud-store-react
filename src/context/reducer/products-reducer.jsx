const productsReducer = (state, action) => {
  switch (action.type) {
    case 'PRICE_SORT': {
      return {
        ...state,
        priceSort: action.payload.priceSort,
      };
    }

    case 'AVAILABILITY_TOGGLE': {
      return {
        ...state,
        inStock: action.payload.inStock,
      };
    }

    case 'DELIVERY_TYPE': {
      return {
        ...state,
        fastDelivery: action.payload.fastDelivery,
      };
    }

    case 'PRICE_RANGE': {
      console.log(action.payload.priceRange);
      return {
        ...state,
        priceRange: action.payload.priceRange,
      };
    }

    case 'CLEAR': {
      return {
        ...state,
        priceSort: null,
        inStock: null,
        fastDelivery: null,
        priceRange: 5000,
      };
    }

    default:
      return state;
  }
};

export default productsReducer;
