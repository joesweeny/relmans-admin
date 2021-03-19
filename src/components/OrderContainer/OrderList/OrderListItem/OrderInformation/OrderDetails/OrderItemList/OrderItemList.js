import React, { useContext } from 'react';
import styled from 'styled-components';
import { arrayOf, number, shape, string } from 'prop-types';

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

  @media (min-width: 1024px) {
    width: 48%;
    border-bottom: none;
  }
`;

const OrderItemList = (props) => {
  const { items } = props;

  return (
    <OrderItemListWrapper>
      {items.map((i) => (
        <OrderItem item={i} key={i.productId} />
      ))}
    </OrderItemListWrapper>
  );
};

OrderItemList.propTypes = {
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
};

export default OrderItemList;
