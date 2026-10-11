import * as types from "./actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};
function sliderReducer(state = initialState, action) {
  switch (action.type) {
    case types.SLIDER_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.SLIDER_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.SLIDER_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state
  }
}

export default sliderReducer