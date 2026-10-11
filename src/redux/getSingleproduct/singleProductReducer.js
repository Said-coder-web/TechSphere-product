import * as types from "./actionTypes";

const initialState = {
  loading: false,
  data: null,
  error: "",
};
const singleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SINGLEPRODUCT_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.SINGLEPRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.SINGLEPRODUCT_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state
  }
};

export default singleProductReducer;