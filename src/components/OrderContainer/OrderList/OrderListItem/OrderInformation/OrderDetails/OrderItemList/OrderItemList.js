import React, { useContext } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import OrderItem from './OrderItem/OrderItem';
import { OrderContext } from '../../../../../../../context/OrderContext';

const OrderItemListWrapper = styled.div`
  display: -webkit-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 0 10px 0;
  border-bottom: 2px solid #cecbcbee;

  @media (min-width: 959px) {
    width: 48%;
    border-bottom: none;
  }
`;

const OrderItemList = (props) => {
  const { id } = props;
  const { orders } = useContext(OrderContext);

  const order = orders.find((o) => o.id === id);

  return (
    <OrderItemListWrapper>
      {order.items.map((i) => (
        <OrderItem item={i} key={i.id} />
      ))}
    </OrderItemListWrapper>
  );
};

OrderItemList.propTypes = {
  id: string.isRequired,
};

export default OrderItemList;
