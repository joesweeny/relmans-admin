import React from 'react';
import styled from 'styled-components';

const ProductToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  background-color: #3d604c;
  font-size: 14px;
  text-transform: uppercase;
  color: white;
  padding-right: 5px;

  p {
    cursor: pointer;
    padding: 0 10px 0 10px;

    &:hover {
      color: #f1943c;
    }
  }

  @media (min-width: 959px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 10%;
    height: 100%;
    font-size: 16px;

    p {
      width: 80%;
      text-align: center;
      padding: 10px 0 10px 0;

      &:first-child {
        border-bottom: 1px solid #cecbcbee;
      }
    }
  }
`;

const ProductToggle = () => {
  return (
    <ProductToggleWrapper>
      <p>Edit</p>
      <p>In Season</p>
    </ProductToggleWrapper>
  );
};

export default ProductToggle;
