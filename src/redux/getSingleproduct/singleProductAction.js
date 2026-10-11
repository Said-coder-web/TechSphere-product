import * as types from "./actionTypes";

export const singleProductRequest = () => {
  return {
    type: types.SINGLEPRODUCT_FETCH_REQUEST,
    payload: {},
  };
};

export const singleProductSuccess = (data) => {
  return {
    type: types.SINGLEPRODUCT_FETCH_SUCCESS,
    payload: data,
  };
};

export const singleProductError = (error) => {
  return {
    type: types.SINGLEPRODUCT_FETCH_ERROR,
    payload: error,
  };
};

export const fetchsingleProduct = (id) => {
  return async (dispatch) => {
    try {
      dispatch(singleProductRequest());
      const data = await fetch(
        `https://dummyjson.com/products/${id}`,
      );
      const res = await data.json();
      dispatch(singleProductSuccess(res));
    } catch (error) {
      dispatch(singleProductError(error));
    }
  };
};
