import React, { useContext } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

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

  @media (min-width: 758px) {
    flex-direction: row;
  }

  @media (min-width: 959px) {
    width: 50%;
    margin: 10px;
    padding: 10px 20px 10px 20px;
  }
`;

const OrderListItem = (props) => {
  const { id } = props;
  const { orders } = useContext(OrderContext);

  const order = orders.find((o) => o.id === id);
  const { date, type } = order.method;
  const fulfilmentDate = new Date(date);

  return (
    <OrderListItemWrapper>
      <OrderListItemDisplay
        title="Customer"
        value={`${order.customer.firstName} ${order.customer.lastName}`}
      />
      <OrderListItemDisplay title="Status" value={order.status} />
      <OrderListItemDisplay title="Fulfilment Type" value={type} />
      <OrderListItemDisplay
        title="Fulfilment Date"
        value={fulfilmentDate.toLocaleDateString()}
      />
    </OrderListItemWrapper>
  );
};

OrderListItem.propTypes = {
  id: string.isRequired,
};

export default OrderListItem;
