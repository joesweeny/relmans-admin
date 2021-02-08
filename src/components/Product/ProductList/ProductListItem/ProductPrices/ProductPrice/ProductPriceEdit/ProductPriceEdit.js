import React, { useState } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { updateProductPrice } from '../../../../../../../gateway/client';

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
  }

  @media (min-width: 768px) {
    input {
      width: 60px;
      margin-right: 10px;
    }
  }
`;

const ProductPriceEdit = (props) => {
  const { price } = props;
  const [value, setValue] = useState(price);

  const updatePrice = () => {
    // updateProductPrice(id, value).then(() => {
    //   toggle();
    //   reload(true);
    // });
  };

  return (
    <ProductPriceEditWrapper>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <FontAwesomeIcon
        icon={faCheckCircle}
        size="1x"
        onClick={() => updatePrice()}
      />
    </ProductPriceEditWrapper>
  );
};

ProductPriceEdit.propTypes = {
  price: string.isRequired,
};

export default ProductPriceEdit;
