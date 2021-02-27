import React from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';

const OrderStatusButtonsWrapper = styled.p`
  width: 100%;
  background-color: green;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const OrderStatusButton = (props) => {
  const { click } = props;

  return (
    <OrderStatusButtonsWrapper onClick={() => click()}>
      ACCEPT
    </OrderStatusButtonsWrapper>
  );
};

OrderStatusButton.propTypes = {
  click: func.isRequired,
};

export default OrderStatusButton;
