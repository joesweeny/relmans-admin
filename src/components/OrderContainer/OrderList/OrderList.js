import React, { useContext } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Loader from '../../Loader/Loader';
import Modal from '../../Modal/Modal';
import { OrderContext } from '../../../context/OrderContext';

const OrderList = () => {
  const { orders, loading, error, clearError } = useContext(OrderContext);

  return (
    <Aux>
      <Modal clicked={clearError} show={!!error}>
        {error}
      </Modal>
      <Loader loading={loading}>
        {orders.map((o) => {
          return <p>{o.customer.firstName}</p>;
        })}
      </Loader>
    </Aux>
  );
};

export default OrderList;
