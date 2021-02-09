import React, { useState } from 'react';
import styled from 'styled-components';
import { func, number, shape, string } from 'prop-types';

const ProductPriceEditWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  svg {
    cursor: pointer;
    color: #3d604c;

    &:hover {
      color: #f1943c;
    }
  }

  input {
    font-family: inherit;
    border: 0;
    border-bottom: 2px solid #3d604c;
    outline: 0;
    background: transparent;
    color: #f1943c;
    width: 40px;
    margin-right: 5px;
    text-align: right;
    font-size: 18px;
  }

  @media (min-width: 959px) {
    input {
      width: 80px;
      margin-right: 10px;
      font-size: 26px;
    }
  }
`;

const ProductPriceEdit = (props) => {
  const { price, updatePrice } = props;
  const [inputValue, setInputValue] = useState((price.value / 100).toFixed(2));

  const update = (v) => {
    setInputValue(v);

    const newPrice = {
      ...price,
      value: parseFloat(v) * 100,
    };

    updatePrice((prev) => {
      const prices = prev.filter((p) => p.id !== newPrice.id);

      return [...prices, newPrice].sort((a, b) =>
        a.measurement.localeCompare(b.measurement)
      );
    });
  };

  return (
    <ProductPriceEditWrapper>
      <input
        value={inputValue}
        onChange={(e) => update(e.target.value)}
        onClick={(e) => e.stopPropagation()}
      />
    </ProductPriceEditWrapper>
  );
};

ProductPriceEdit.propTypes = {
  price: shape({
    id: string.isRequired,
    value: number.isRequired,
    size: number.isRequired,
    measurement: string.isRequired,
  }).isRequired,
  updatePrice: func.isRequired,
};

export default ProductPriceEdit;
