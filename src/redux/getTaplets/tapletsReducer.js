import * as types from "./actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};
const tapletsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TAPLETS_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.TAPLETS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.TAPLETS_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state
  }
};

export default tapletsReducer;