import * as types from "./actionTypes";

export const tapletsRequest = () => {
  return {
    type: types.TAPLETS_FETCH_REQUEST,
    payload: [],
  };
};

export const tapletsSuccess = (data) => {
  return {
    type: types.TAPLETS_FETCH_SUCCESS,
    payload: data,
  };
};

export const tapletsError = (error) => {
  return {
    type: types.TAPLETS_FETCH_ERROR,
    payload: error,
  };
};

export const fetchTaplets = () => {
  return async (dispatch) => {
    try {
      dispatch(tapletsRequest());
      const data = await fetch(
        `https://dummyjson.com/products/category/tablets`,
      );
      const res = await data.json();
      dispatch(tapletsSuccess(res));
    } catch (error) {
      dispatch(tapletsError(error));
    }
  };
};
