import * as types from './actionTypes'

const initialState = {
  loading: false,
  data: [],
  error: ''
}
const laptopsReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LAPTOPS_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.LAPTOPS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case types.LAPTOPS_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}


export default laptopsReducer