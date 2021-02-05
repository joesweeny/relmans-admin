import React from 'react';
import { number, string } from 'prop-types';
import styled from 'styled-components';

const ProductPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 60px;
  align-items: center;
  width: ${(props) => props.width};
  font-size: 18px;
`;

const productPrice = (props) => {
  const { price, width } = props;

  return (
    <ProductPriceWrapper width={width}>
      £ {(price / 100).toFixed(2)}
    </ProductPriceWrapper>
  );
};

productPrice.propTypes = {
  price: number.isRequired,
  width: string.isRequired,
};

export default productPrice;
