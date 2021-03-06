import React, { useContext } from 'react';
import styled from 'styled-components';
import { bool, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { ProductActionContext } from '../../../../../context/ProductContext';

const ProductFeaturedToggleWrapper = styled.div`
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: flex-end;
  width: 100%;
  background-color: #3d604c;
  font-size: 14px;
  padding: 5px 15px 5px 5px;
  transition: all 1s ease-out;

  svg {
    &:hover {
      cursor: pointer;
      color: ${(props) => (props.featured ? 'white' : '#f1943c')};
      transform: scale(1.3);
    }
  }

  @media (min-width: 758px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 10%;
    height: 80px;
    padding: 0;
    font-size: 22px;
  }

  @media (min-width: 959px) {
    font-size: 30px;
    height: 120px;
  }
`;

const ProductFeaturedToggle = (props) => {
  const { id, featured } = props;
  const { dispatchFeatured } = useContext(ProductActionContext);

  return (
    <ProductFeaturedToggleWrapper featured={featured}>
      <FontAwesomeIcon
        icon={faCheckCircle}
        color={featured ? '#f1943c' : 'white'}
        onClick={() => dispatchFeatured(id, !featured)}
      />
    </ProductFeaturedToggleWrapper>
  );
};

ProductFeaturedToggle.propTypes = {
  id: string.isRequired,
  featured: bool.isRequired,
};

export default ProductFeaturedToggle;
