import * as types from "./actionTypes";

const sliderRequest = () => {
  return {
    type: types.SLIDER_FETCH_REQUEST,
    payload: [],
  };
};

const sliderSuccess = (data) => {
  return {
    type: types.SLIDER_FETCH_SUCCESS,
    payload: data,
  };
};

const sliderError = (error) => {
  return {
    type: types.SLIDER_FETCH_ERROR,
    payload: error,
  };
};

const fetchSlider = () => {
  return async (dispatch) => {
    try {
      dispatch(sliderRequest());
      const data = await fetch(
        `https://dummyjson.com/products/category/smartphones`,
      );
      const res = await data.json();
      dispatch(sliderSuccess(res));
    } catch (error) {
      dispatch(sliderError(error));
    }
  };
};

export {sliderRequest, sliderSuccess, sliderError, fetchSlider};
