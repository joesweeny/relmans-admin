import React from 'react';
import styled from 'styled-components';

const OrderInformationWrapper = styled.div`
  display: -webkit-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const OrderInformation = () => {
  return (
    <OrderInformationWrapper>
      <p>Hello from the information page</p>
    </OrderInformationWrapper>
  );
};

export default OrderInformation;
