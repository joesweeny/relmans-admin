import * as actionTypes from '../actions/actionTypes';
import addSortOrder from '../../utility/order';

const setOrders = (state, action) => {
  return {
    ...state,
    orders: action.orders,
  };
};

const updateOrderStatus = (state, action) => {
  const order = state.orders.find((p) => p.id === action.id);
  const orders = state.orders.filter((p) => p.id !== action.id);

  const newOrder = {
    ...order,
    status: action.status,
  };

  return {
    ...state,
    orders: addSortOrder(orders, newOrder),
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_ORDERS:
      return setOrders(state, action);
    case actionTypes.UPDATE_ORDER_STATUS:
      return updateOrderStatus(state, action):
    default:
      return state;
  }
};

export default reducer;
