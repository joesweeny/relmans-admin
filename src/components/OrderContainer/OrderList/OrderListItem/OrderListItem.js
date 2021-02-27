import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import OrderInformation from './OrderInformation/OrderInformation';
import OrderListItemDisplay from './OrderListItemDisplay/OrderListItemDisplay';
import { OrderContext } from '../../../../context/OrderContext';

const OrderListItemWrapper = styled.div`
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 0;
  justify-content: space-between;
  height: fit-content;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  color: black;
  font-weight: 500;
  width: 100%;
  padding: 5px 10px 5px 10px;
  margin: 5px 10px 5px 0;
  cursor: pointer;

  @media (min-width: 1025px) {
    width: 50%;
    margin: 10px;
    padding: 10px 20px 10px 20px;
  }
`;

const OrderListItem = (props) => {
  const { id } = props;
  const { orders } = useContext(OrderContext);
  const [open, setOpen] = useState(false);

  const order = orders.find((o) => o.id === id);
  const total = order.items.reduce(
    (prev, next) => prev + next.quantity * next.price,
    0
  );
  const { date, type } = order.method;
  const fulfilmentDate = new Date(date);

  return (
    <OrderListItemWrapper onClick={() => setOpen(!open)}>
      <OrderListItemDisplay
        title="Customer"
        value={`${order.customer.firstName} ${order.customer.lastName}`}
      />
      <OrderListItemDisplay title="Phone" value={order.customer.phone} />
      <OrderListItemDisplay title="Type" value={type} />
      <OrderListItemDisplay
        title="Status"
        value={order.status}
        color={order.status === 'ACCEPTED' ? 'green' : 'black'}
      />
      <OrderListItemDisplay
        title="Total"
        value={`£${(total / 100).toFixed(2)}`}
      />
      <OrderListItemDisplay
        title="Date"
        value={fulfilmentDate.toLocaleDateString()}
      />
      {open ? <OrderInformation id={id} /> : null}
    </OrderListItemWrapper>
  );
};

OrderListItem.propTypes = {
  id: string.isRequired,
};

export default OrderListItem;
