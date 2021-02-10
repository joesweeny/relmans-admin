import React, { useContext } from 'react';
import styled from 'styled-components';
import { bool, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { ProductActionContext } from '../../../../../context/ProductContext';

const ProductToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  background-color: #3d604c;
  font-size: 14px;
  padding: 5px 15px 5px 5px;

  svg {
    &:hover {
      cursor: pointer;
      color: ${(props) => (props.featured ? 'white' : '#f1943c')};
    }
  }

  @media (min-width: 758px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 10%;
    height: 100%;
    padding: 0;
    font-size: 22px;
  }

  @media (min-width: 959px) {
    font-size: 30px;
  }
`;

const ProductFeaturedToggle = (props) => {
  const { id, featured } = props;
  const { dispatchFeatured } = useContext(ProductActionContext);

  return (
    <ProductToggleWrapper featured={featured}>
      <FontAwesomeIcon
        icon={faCheckCircle}
        color={featured ? '#f1943c' : 'white'}
        onClick={() => dispatchFeatured(id, !featured)}
      />
    </ProductToggleWrapper>
  );
};

ProductFeaturedToggle.propTypes = {
  id: string.isRequired,
  featured: bool.isRequired,
};

export default ProductFeaturedToggle;
