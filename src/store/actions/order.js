import * as actionTypes from './actionTypes';

export const setOrders = (orders) => {
  return {
    type: actionTypes.SET_ORDERS,
    orders,
  };
};

export const updateOrderStatus = (id, status) => {
  return {
    type: actionTypes.UPDATE_ORDER_STATUS,
    id,
    status,
  };
};
