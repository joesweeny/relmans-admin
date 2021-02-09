import React from 'react';
import styled from 'styled-components';
import { arrayOf, func, number, shape, string } from 'prop-types';

const options = ['IN_STOCK', 'OUT_OF_SEASON', 'OUT_OF_STOCK'];

const ProductStatusEditWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;

  select {
    cursor: pointer;
    padding: 5px 0 5px 0;
  }
`;

const ProductStatusEdit = (props) => {
  const { product, updateProduct } = props;

  const updateStatus = (s) => {
    const newProduct = {
      ...product,
      status: s,
    };

    updateProduct(newProduct);
  };

  return (
    <ProductStatusEditWrapper>
      <select
        onBlur={(e) => updateStatus(e.target.value)}
        onChange={(e) => updateStatus(e.target.value)}
        onClick={(e) => e.stopPropagation()}
        value={product.status}
      >
        {options.map((o) => (
          <option value={o} key={o}>
            {o.replace(/[_-]/g, ' ')}
          </option>
        ))}
      </select>
    </ProductStatusEditWrapper>
  );
};

ProductStatusEdit.propTypes = {
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
  updateProduct: func.isRequired,
};

export default ProductStatusEdit;
