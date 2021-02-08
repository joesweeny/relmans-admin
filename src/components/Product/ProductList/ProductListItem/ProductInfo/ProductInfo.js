import React from 'react';
import { number, string, oneOfType } from 'prop-types';
import styled from 'styled-components';

const ProductInfoWrapper = styled.div`
  font-size: 14px;
  text-align: left;
  width: 100%;
  font-size: 14px;

  @media (min-width: 959px) {
    font-size: 20px;
  }
`;

const productInfo = (props) => {
  const { title } = props;

  return <ProductInfoWrapper>{title}</ProductInfoWrapper>;
};

productInfo.propTypes = {
  title: oneOfType([number, string]),
};

export default productInfo;
