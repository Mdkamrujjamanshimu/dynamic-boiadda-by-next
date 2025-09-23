const ProductReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_API_DATA":
      //! GET UNIQUE CATEGORY NAME
      const uniqueCategory = [
        ...new Set(action.payload.map((curElem: any) => curElem.category)),
      ];

      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
        filteredCategory: uniqueCategory,
      };

    default:
      return state;
  }
};

export default ProductReducer;
