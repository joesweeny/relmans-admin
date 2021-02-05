import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const ProductImageWrapper = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px 20px 10px 30px;
`;

const productImage = (props) => {
  const { id, name } = props;

  return (
    <ProductImageWrapper
      src={`https://relmans.s3.eu-west-2.amazonaws.com/${id}.jpg`}
      alt={name}
    />
  );
};

productImage.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
};

export default productImage;
