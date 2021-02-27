import React from 'react';
import styled from 'styled-components';
import { shape, string } from 'prop-types';

const OrderAddressWrapper = styled.div`
  display: -webkit-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  p {
    font-size: 12px;
  }

  @media (min-width: 959px) {
    p {
      font-size: 14px;
    }
  }
`;

const Title = styled.div`
  font-size: 10px;
  color: #f1943c;

  @media (min-width: 959px) {
    font-size: 12px;
  }
`;

const OrderAddress = (props) => {
  const { address } = props;

  return (
    <OrderAddressWrapper>
      <Title>Address</Title>
      <p>{address.line1}</p>
      <p>{address.line2 ?? null}</p>
      <p>{address.line3 ?? null}</p>
      <p>{address.town ?? null}</p>
      <p>{address.county ?? null}</p>
      <p>{address.postCode}</p>
    </OrderAddressWrapper>
  );
};

OrderAddress.propTypes = {
  address: shape({
    line1: string.isRequired,
    line2: string,
    line3: string,
    town: string,
    county: string,
    postCode: string,
  }).isRequired,
};

export default OrderAddress;
