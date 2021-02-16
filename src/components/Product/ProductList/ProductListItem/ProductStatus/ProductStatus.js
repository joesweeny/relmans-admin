import React from 'react';
import { bool, func, string } from 'prop-types';
import styled from 'styled-components';

import ProductStatusEdit from './ProductStatusEdit/ProductStatusEdit';

const ProductStatusWrapper = styled.div`
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: left;
  width: 100%;
  font-size: 14px;
  color: ${(prop) => prop.color};
  text-align: left;
  padding-top: 10px;
  transition: all 1s ease-out;

  @media (min-width: 959px) {
    font-size: 18px;
  }
`;

const productStatus = (props) => {
  const { isEditing, status, updateStatus } = props;

  let color = 'green';

  if (status === 'OUT_OF_STOCK') {
    color = 'red';
  }

  if (status === 'OUT_OF_SEASON') {
    color = 'orange';
  }

  return (
    <ProductStatusWrapper color={color}>
      {isEditing ? (
        <ProductStatusEdit status={status} updateStatus={updateStatus} />
      ) : (
        status.replace(/[_-]/g, ' ')
      )}
    </ProductStatusWrapper>
  );
};

productStatus.propTypes = {
  isEditing: bool.isRequired,
  status: string.isRequired,
  updateStatus: func.isRequired,
};

export default productStatus;
