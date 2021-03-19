import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import OrderDetails from './OrderDetails/OrderDetails';
import OrderItemList from './OrderDetails/OrderItemList/OrderItemList';

const OrderInformationWrapper = styled.div`
  display: -webkit-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  border-top: 2px solid #cecbcbee;
  margin-top: 10px;
`;

const OrderInformation = (props) => {
  const { id } = props;

  return (
    <OrderInformationWrapper>
      <OrderItemList id={id} />
      <OrderDetails id={id} />
    </OrderInformationWrapper>
  );
};

OrderInformation.propTypes = {
  id: string.isRequired,
};

export default OrderInformation;
