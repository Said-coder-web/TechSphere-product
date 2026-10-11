import * as types from "./actionTypes";

const initialState = {
  items: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART: {
      const product = action.payload;
      const existingItem = state.items.find((item) => (item.id === product.id));

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === product.id
              ? {...item, quantity: item.quantity + 1}
              : item,
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, {...product, quantity: 1}],
      };
    }

    case types.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case types.INCREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? {...item, quantity: item.quantity + 1}
            : item,
        ),
      };

    case types.DECREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? {...item, quantity: item.quantity - 1}
            : item,
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;

