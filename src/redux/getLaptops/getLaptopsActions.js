import * as types from "./actionTypes";

export const laptopsRequest = () => {
  return {
    type: types.LAPTOPS_FETCH_REQUEST,
    payload: [],
  };
};

export const laptopsSuccess = (data) => {
  return {
    type: types.LAPTOPS_FETCH_SUCCESS,
    payload: data,
  };
};

export const laptopsError = (error) => {
  return {
    type: types.LAPTOPS_FETCH_ERROR,
    payload: error,
  };
};

export const fetchLaptops = () => {
  return async (dispatch) => {
    try {
      dispatch(laptopsRequest());
      const data = await fetch(
        `https://dummyjson.com/products/category/laptops`,
      );
      const res = await data.json();
      dispatch(laptopsSuccess(res));
    } catch (error) {
      dispatch(laptopsError(error));
    }
  };
};
