import * as actionTypes from '../actions/actionTypes';
import { addSortPrice, addSortProduct } from '../../utility/product';

const setProducts = (state, action) => {
  return {
    ...state,
    products: action.products,
  };
};

const updateProductFeatured = (state, action) => {
  const product = state.products.find((p) => p.id === action.id);
  const products = state.products.filter((p) => p.id !== action.id);

  const newProduct = {
    ...product,
    featured: action.featured,
  };

  return {
    ...state,
    products: addSortProduct(products, newProduct),
  };
};

const updateProductStatus = (state, action) => {
  const product = state.products.find((p) => p.id === action.id);
  const products = state.products.filter((p) => p.id !== action.id);

  const newProduct = {
    ...product,
    status: action.status,
  };

  return {
    ...state,
    products: addSortProduct(products, newProduct),
  };
};

const updateProductPrice = (state, action) => {
  const product = state.products.find((p) => p.id === action.productId);
  const products = state.products.filter((p) => p.id !== action.productId);
  const price = product.prices.find((p) => p.id === action.priceId);
  const prices = product.prices.filter((p) => p.id !== action.priceId);

  const newPrice = {
    ...price,
    value: action.value,
  };

  const newProduct = {
    ...product,
    prices: addSortPrice(prices, newPrice),
  };

  return {
    ...state,
    products: addSortProduct(products, newProduct),
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return setProducts(state, action);
    case actionTypes.UPDATE_PRODUCT_STATUS:
      return updateProductStatus(state, action);
    case actionTypes.UPDATE_PRODUCT_PRICE:
      return updateProductPrice(state, action);
    case actionTypes.UPDATE_PRODUCT_FEATURED:
      return updateProductFeatured(state, action);
    default:
      return state;
  }
};

export default reducer;
