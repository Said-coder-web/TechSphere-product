import * as types from "./actionTypes";

export const searchRequest = () => {
  return {
    type: types.SEARCH_FETCH_REQUEST,
    payload: [],
  };
};

export const searchSuccess = (data) => {
  return {
    type: types.SEARCH_FETCH_SUCCESS,
    payload: data,
  };
};

export const searchError = (error) => {
  return {
    type: types.SEARCH_FETCH_ERROR,
    payload: error,
  };
};

export const fetchSearch = (search) => {
  return async (dispatch) => {
    try {
      dispatch(searchRequest());
      const data = await fetch(
        `https://dummyjson.com/products/search?q=${search}`,
      );
      const res = await data.json();
      dispatch(searchSuccess(res));
    } catch (error) {
      dispatch(searchError(error));
    }
  };
};
