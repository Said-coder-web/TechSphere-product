import * as types from './actionTypes'

const categoryRequest = () => {
  return {
    type: types.CATEGORY_FETCH_REQUEST,
    payload: []
  }
}

const categorySuccess = (data) => {
  return {
    type: types.CATEGORY_FETCH_SUCCESS,
    payload: data
  }
}

const categoryError = (error) => {
  return {
    type: types.CATEGORY_FETCH_ERROR,
    payload: error
  }
}

const fetchCategory = () => {
  return async (dispatch) => {
    try{
      dispatch(categoryRequest())
      const data = await fetch(`https://dummyjson.com/products`)
      const res = await data.json()
      dispatch(categorySuccess(res))
    }catch(error) {
      dispatch(categoryError(error))
    }
  }
}

export {categoryRequest, categorySuccess, categoryError, fetchCategory}