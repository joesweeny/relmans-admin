import React, { useContext } from 'react';
import styled from 'styled-components';
import { arrayOf, func, number, shape, string } from 'prop-types';

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
  const { id, items, updateStatus } = props;
  const { orders } = useContext(OrderContext);

  const order = orders.find((o) => o.id === id);
  const { type } = order.method;
  const { address, email, phone } = order.customer;
  const orderDate = new Date(order.createdAt);

  let total = items.reduce(
    (prev, next) => prev + next.quantity * next.price,
    0
  );

  if (type === 'DELIVERY' && total < 2500) {
    total += 250;
  }

  return (
    <OrderDetailsWrapper>
      {order.status === 'PAYMENT_RECEIVED' ? (
        <OrderStatusButton click={() => updateStatus('ACCEPTED')} />
      ) : null}
      <OrderDetailsItem title="Order Number" value={order.id} />
      <OrderDetailsItem title="Total" value={`£${(total / 100).toFixed(2)}`} />
      <OrderDetailsItem title="Phone" value={phone} />
      <OrderDetailsItem title="Email" value={email} />
      <OrderDetailsItem title="Order Date" value={orderDate.toLocaleString()} />
      {type === 'DELIVERY' ? <OrderAddress address={address} /> : null}
    </OrderDetailsWrapper>
  );
};

OrderDetails.propTypes = {
  id: string.isRequired,
  items: arrayOf(
    shape({
      productId: string,
      name: string,
      price: number,
      size: number,
      measurement: string,
      quantity: number,
    }).isRequired
  ).isRequired,
  updateStatus: func.isRequired,
};

export default OrderDetails;
