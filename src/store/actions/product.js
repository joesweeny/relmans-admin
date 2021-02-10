import * as actionTypes from './actionTypes';

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    products,
  };
};

export const updateProductStatus = (id, status) => {
  return {
    type: actionTypes.UPDATE_PRODUCT_STATUS,
    id,
    status,
  };
};

export const updateProductFeatured = (id, featured) => {
  return {
    type: actionTypes.UPDATE_PRODUCT_FEATURED,
    id,
    featured,
  };
};

export const updateProductPrice = (productId, priceId, value) => {
  return {
    type: actionTypes.UPDATE_PRODUCT_PRICE,
    productId,
    priceId,
    value,
  };
};
