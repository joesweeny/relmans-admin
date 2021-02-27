import React, { useContext } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import OrderAddress from './OrderAddress/OrderAddress';
import OrderDetailsItem from './OrderDetailsItem/OrderDetailsItem';
import OrderStatusButton from '../../OrderStatusButton/OrderStatusButton';
import { OrderContext } from '../../../../../../context/OrderContext';

const OrderDetailsWrapper = styled.div`
  display: -webkit-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  padding: 10px 0 10px 0;
  height: fit-content;

  @media (min-width: 1024px) {
    width: 48%;
    padding: 10px 10px 10px 30px;
  }
`;

const OrderDetails = (props) => {
  const { id } = props;
  const { orders, dispatchOrderStatus } = useContext(OrderContext);

  const order = orders.find((o) => o.id === id);
  const { type } = order.method;
  const { address, email } = order.customer;
  const orderDate = new Date(order.createdAt);

  return (
    <OrderDetailsWrapper>
      {order.status === 'PENDING' ? (
        <OrderStatusButton click={() => dispatchOrderStatus(id, 'ACCEPTED')} />
      ) : null}
      <OrderDetailsItem title="Order Number" value={order.id} />
      <OrderDetailsItem
        title="PayPal Transaction ID"
        value={order.transactionId}
      />
      <OrderDetailsItem title="Order Date" value={orderDate.toLocaleString()} />
      <OrderDetailsItem title="Email" value={email} />
      {type === 'DELIVERY' ? <OrderAddress address={address} /> : null}
    </OrderDetailsWrapper>
  );
};

OrderDetails.propTypes = {
  id: string.isRequired,
};

export default OrderDetails;
