import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const ProductImageWrapper = styled.img`
  height: 80px;
  width: 80px;
  cursor: pointer;
  padding: 5px;
  border-radius: 10px;

  @media (min-width: 959px) {
    height: 120px;
    width: 120px;
  }
`;

const productImage = (props) => {
  const { id, name } = props;

  return (
    <ProductImageWrapper
      src={`${process.env.PUBLIC_URL}/products/fruitandveg.jpg`}
      alt={name}
    />
  );
};

productImage.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
};

export default productImage;
