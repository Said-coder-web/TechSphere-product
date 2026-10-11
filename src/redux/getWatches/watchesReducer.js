import * as types from "./actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};
const watchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.WATCHES_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.WATCHES_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.WATCHES_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state
  }
};

export default watchesReducer;