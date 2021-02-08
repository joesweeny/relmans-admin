import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { func, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { updateProductPrice } from '../../../../../../../gateway/client';
import {
  ProductActionContext,
  ProductContext,
} from '../../../../../../../context/ProductContext';

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
  const { value, productId, priceId, toggle } = props;
  const [inputValue, setInputValue] = useState(value);
  const { products } = useContext(ProductContext);
  const { updateProduct } = useContext(ProductActionContext);

  const updatePrice = () => {
    const v = parseFloat(inputValue) * 100;
    const product = products.find((p) => p.id === productId);
    const price = product.prices.find((p) => p.id === priceId);
    const prices = product.prices.filter((p) => p.id !== priceId);
    const newPrices = [
      ...prices,
      {
        ...price,
        value: v,
      },
    ].sort((a, b) => a.measurement.localeCompare(b.measurement));

    updateProductPrice(priceId, v).then(() => {
      const newProduct = {
        ...product,
        prices: newPrices,
      };
      toggle();
      updateProduct(newProduct);
    });
  };

  return (
    <ProductPriceEditWrapper>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <FontAwesomeIcon
        icon={faCheckCircle}
        size="1x"
        onClick={() => updatePrice()}
      />
    </ProductPriceEditWrapper>
  );
};

ProductPriceEdit.propTypes = {
  value: string.isRequired,
  productId: string.isRequired,
  priceId: string.isRequired,
  toggle: func.isRequired,
};

export default ProductPriceEdit;
