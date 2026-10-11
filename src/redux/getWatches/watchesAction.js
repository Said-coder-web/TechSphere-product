import * as types from "./actionTypes";

export const watchesRequest = () => {
  return {
    type: types.WATCHES_FETCH_REQUEST,
    payload: [],
  };
};

export const watchesSuccess = (data) => {
  return {
    type: types.WATCHES_FETCH_SUCCESS,
    payload: data,
  };
};

export const watchesError = (error) => {
  return {
    type: types.WATCHES_FETCH_ERROR,
    payload: error,
  };
};

export const fetchwatches = () => {
  return async (dispatch) => {
    try {
      dispatch(watchesRequest());
      const data = await fetch(
        `https://dummyjson.com/products/category/mens-watches`,
      );
      const res = await data.json();
      dispatch(watchesSuccess(res));
    } catch (error) {
      dispatch(watchesError(error));
    }
  };
};
