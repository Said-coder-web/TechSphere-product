import * as types from "./actionTypes"

export const addToCart = (product) => {
  return {
    type: types.ADD_TO_CART,
    payload: product
  }
}

export const removeFromCart = (id) => {
  return {
    type: types.REMOVE_FROM_CART,
    payload: id
  }
}

export const increaseQuantity = (id) => {
  return {
    type: types.INCREASE_QUANTITY,
    payload: id
  }
}

export const decreaseQuantity = (id) => {
  return {
    type: types.DECREASE_QUANTITY,
    payload: id
  }
}