import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import sliderReducer from "./getProductSlider/getProductSliderReducer";
import categoryReducer from "./getProductCategories/getProductCategoriesReducer";
import laptopsReducer from "./getLaptops/getLaptopsReducer";
import tapletsReducer from "./getTaplets/tapletsReducer";
import watchesReducer from "./getWatches/watchesReducer";
import singleProductReducer from "./getSingleproduct/singleProductReducer";
import searchReducer from "./getSearch/searchReducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  slider: sliderReducer,
  categories: categoryReducer,
  laptops: laptopsReducer,
  taplets: tapletsReducer,
  watches: watchesReducer,
  singleProduct: singleProductReducer,
  search: searchReducer
})
