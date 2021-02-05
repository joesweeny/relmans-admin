import React from 'react';
import { number, string, oneOf, oneOfType } from 'prop-types';
import styled from 'styled-components';

const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.align ?? 'center'};
  height: 60px;
  align-items: center;
  width: ${(props) => props.width};
  font-size: 16px;
`;

const productInfo = (props) => {
  const { align, title, width } = props;

  return (
    <ProductInfoWrapper align={align} width={width}>
      {title}
    </ProductInfoWrapper>
  );
};

productInfo.propTypes = {
  align: oneOfType([string.isRequired, oneOf([null]).isRequired]),
  title: oneOfType([number, string]),
  width: string.isRequired,
};

export default productInfo;
