import React, { useContext } from 'react';
import styled from 'styled-components';

import Loader from '../../Loader/Loader';
import Modal from '../../Modal/Modal';
import OrderListItem from './OrderListItem/OrderListItem';
import { OrderContext } from '../../../context/OrderContext';

const OrderListWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -ms-flex-line-pack: center;
  flex-shrink: 0;
  padding-bottom: 30px;
  width: 100%;

  @media (min-width: 1025px) {
    align-items: center;
  }
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
          <OrderListItem id={o.id} key={o.id} />
        ))}
      </Loader>
    </OrderListWrapper>
  );
};

export default OrderList;
