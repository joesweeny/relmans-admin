import React from 'react';
import { arrayOf, bool, func, number, shape, string } from 'prop-types';
import styled from 'styled-components';

import ProductStatusEdit from './ProductStatusEdit/ProductStatusEdit';

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
  const { isEditing, product, toggle } = props;

  let color = 'green';

  if (product.status === 'OUT_OF_STOCK') {
    color = 'red';
  }

  if (product.status === 'OUT_OF_SEASON') {
    color = 'orange';
  }

  return (
    <ProductStatusWrapper color={color}>
      {isEditing ? (
        <ProductStatusEdit product={product} toggle={toggle} />
      ) : (
        product.status.replace(/[_-]/g, ' ')
      )}
    </ProductStatusWrapper>
  );
};

productStatus.propTypes = {
  isEditing: bool.isRequired,
  product: shape({
    id: string.isRequired,
    name: string.isRequired,
    status: string.isRequired,
    prices: arrayOf(
      shape({
        id: string.isRequired,
        value: number.isRequired,
        size: number.isRequired,
        measurement: string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  toggle: func.isRequired,
};

export default productStatus;
