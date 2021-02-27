import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import OrderDetails from './OrderDetails/OrderDetails';

const OrderInformationWrapper = styled.div`
  display: -webkit-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 10px;
  padding: 10px 0 10px 0;
  border-top: 2px solid #cecbcbee;
  width: 100%;
`;

const OrderInformation = (props) => {
  const { id } = props;

  return (
    <OrderInformationWrapper>
      <div>Order Items will go here</div>
      <OrderDetails id={id} />
    </OrderInformationWrapper>
  );
};

OrderInformation.propTypes = {
  id: string.isRequired,
};

export default OrderInformation;
