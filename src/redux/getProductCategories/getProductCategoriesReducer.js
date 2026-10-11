import * as types from "./actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};
function categoryReducer(state = initialState, action) {
  switch(action.type) {
    case types.CATEGORY_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.CATEGORY_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case types.CATEGORY_FETCH_ERROR:
      return {
        ...state,
        loading:false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default categoryReducer