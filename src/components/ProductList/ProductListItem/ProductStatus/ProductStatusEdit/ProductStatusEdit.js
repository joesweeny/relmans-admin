import React from 'react';
import styled from 'styled-components';
import { arrayOf, func, number, shape, string } from 'prop-types';

import { updateProductStatus } from '../../../../../gateway/client';

const options = ['IN_STOCK', 'OUT_OF_SEASON', 'OUT_OF_STOCK'];

const ProductStatusEditWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;

  select {
    cursor: pointer;
  }
`;

const ProductStatusEdit = (props) => {
  const { product, reload, toggle } = props;

  const updateStatus = (s) => {
    updateProductStatus(product.id, s).then(() => {
      const newProduct = {
        ...product,
        status: s,
      };

      reload(newProduct);
      toggle();
    });
  };

  return (
    <ProductStatusEditWrapper>
      <select
        onBlur={(e) => updateStatus(e.target.value)}
        onChange={(e) => updateStatus(e.target.value)}
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
  reload: func.isRequired,
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

export default ProductStatusEdit;
