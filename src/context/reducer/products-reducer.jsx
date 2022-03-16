const productsReducer = (state, action) => {
  switch (action.type) {
    case 'PRICE_SORT': {
      return {
        ...state,
        priceSort: action.payload.priceSort,
      };
    }

    case 'RATING_RANGE': {
      return {
        ...state,
        ratingRange: action.payload.ratingRange,
      };
    }

    case 'CATEGORY_CHANGE': {
      const payloadCategory = action.payload.categoryName;

      if (state.categoryName.includes(payloadCategory)) {
        const newCategoryNames = state.categoryName.filter(
          (category) => category !== payloadCategory
        );
        return {
          ...state,
          categoryName: newCategoryNames,
        };
      }

      const newCategoryNames = [...state.categoryName];
      newCategoryNames.push(payloadCategory);
      return {
        ...state,
        categoryName: newCategoryNames,
      };
    }

    case 'AVAILABILITY_TOGGLE': {
      return {
        ...state,
        includeOutOfStock: action.payload.inStock,
      };
    }

    case 'DELIVERY_TYPE': {
      console.log(action.payload.fastDelivery);
      return {
        ...state,
        fastDeliveryOnly: action.payload.fastDelivery,
      };
    }

    case 'PRICE_RANGE': {
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
        categoryName: [],
      };
    }

    default:
      return state;
  }
};

export default productsReducer;
