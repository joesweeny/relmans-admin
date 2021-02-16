import React from 'react';
import { arrayOf, bool, func, number, shape, string } from 'prop-types';
import styled from 'styled-components';

import ProductPrice from './ProductPrice/ProductPrice';

const ProductPricesWrapper = styled.div`
  display: -webkit-flex
  display: flex;
  flex-shrink: 0
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin-right: 10px;
`;

const ProductPrices = (props) => {
  const { isEditing, prices, updatePrices } = props;

  return (
    <ProductPricesWrapper>
      {prices.map((p) => (
        <ProductPrice
          isEditing={isEditing}
          price={p}
          key={p.id}
          updatePrice={updatePrices}
        />
      ))}
    </ProductPricesWrapper>
  );
};

ProductPrices.propTypes = {
  isEditing: bool.isRequired,
  prices: arrayOf(
    shape({
      id: string.isRequired,
      value: number.isRequired,
      size: number.isRequired,
      measurement: string.isRequired,
    })
  ).isRequired,
  updatePrices: func.isRequired,
};

export default ProductPrices;
