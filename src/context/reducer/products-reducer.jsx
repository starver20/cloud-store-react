const productsReducer = (state, action) => {
  switch (action.type) {
    // Filters

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

    // Initialize products
    case 'SET_INITIAL_DATA': {
      return {
        ...state,
        products: [...action.payload.products],
      };
    }

    // Wishlist

    // Initialize wishlist
    case 'INITIALIZE_WISHLIST': {
      let editedWishlist = action.payload.wishlist.map((item) => item._id);
      return { ...state, wishlist: editedWishlist };
    }

    // Add or remove from wishlist
    case 'TOGGLE_WISHLIST': {
      let updatedWishlist;

      if (state.wishlist.includes(action.payload._id)) {
        updatedWishlist = state.wishlist.filter(
          (_id) => _id !== action.payload._id
        );

        return { ...state, wishlist: updatedWishlist };
      }

      updatedWishlist = [...state.wishlist];
      updatedWishlist.unshift(action.payload._id);
      return {
        ...state,
        wishlist: updatedWishlist,
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
