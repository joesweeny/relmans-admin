import React from 'react';
import styled from 'styled-components';
import { bool, func } from 'prop-types';

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

const EditToggle = styled.p`
  color: ${(props) => (props.isEditing ? '#f1943c' : 'white')};

  &:hover {
    color: ${(props) => (!props.isEditing ? '#f1943c' : 'white')};
  }
`;

const InSeasonToggle = styled.p`
  &:hover {
    color: '#f1943c';
  }
`;

const ProductToggle = (props) => {
  const { isEditing, toggle } = props;

  return (
    <ProductToggleWrapper>
      <EditToggle isEditing={isEditing} onClick={() => toggle()}>
        Edit
      </EditToggle>
      <InSeasonToggle>In Season</InSeasonToggle>
    </ProductToggleWrapper>
  );
};

ProductToggle.propTypes = {
  isEditing: bool.isRequired,
  toggle: func.isRequired,
};

export default ProductToggle;
