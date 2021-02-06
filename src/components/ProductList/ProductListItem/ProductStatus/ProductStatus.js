import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const ProductStatusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
  font-size: 14px;
  color: ${(prop) => prop.color};
  text-align: left;

  @media (min-width: 959px) {
    font-size: 18px;
  }
`;

const productStatus = (props) => {
  const { status } = props;
  let color = 'green';

  if (status === 'OUT_OF_STOCK') {
    color = 'red';
  }

  if (status === 'OUT_OF_SEASON') {
    color = 'orange';
  }

  return (
    <ProductStatusWrapper color={color}>
      {status.replace(/[_-]/g, ' ')}
    </ProductStatusWrapper>
  );
};

productStatus.propTypes = {
  status: string.isRequired,
};

export default productStatus;
