import React, { useContext } from 'react';
import styled from 'styled-components';

import Loader from '../../Loader/Loader';
import Modal from '../../Modal/Modal';
import OrderListItem from './OrderListItem/OrderListItem';
import { OrderContext } from '../../../context/OrderContext';

const OrderListWrapper = styled.div`
  width: 100%;
`;

const OrderList = () => {
  const { orders, loading, error, clearError } = useContext(OrderContext);

  return (
    <OrderListWrapper>
      <Modal clicked={clearError} show={!!error}>
        {error}
      </Modal>
      <Loader loading={loading}>
        {orders.map((o) => (
          <OrderListItem order={o} />
        ))}
      </Loader>
    </OrderListWrapper>
  );
};

export default OrderList;
