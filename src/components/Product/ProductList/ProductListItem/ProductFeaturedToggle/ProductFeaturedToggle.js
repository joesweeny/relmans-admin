import React, { useContext } from 'react';
import styled from 'styled-components';
import { arrayOf, bool, func, number, shape, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { ProductActionContext } from '../../../../../context/ProductContext';
import { updateProductFeatured } from '../../../../../gateway/client';

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
  const { product, updateProduct } = props;
  const { refreshProducts } = useContext(ProductActionContext);

  const update = () => {
    updateProductFeatured(product.id, !product.featured).then(() => {
      const newProduct = {
        ...product,
        featured: !product.featured,
      };

      updateProduct(newProduct);
      refreshProducts(newProduct);
    });
  };

  return (
    <ProductToggleWrapper featured={product.featured}>
      <FontAwesomeIcon
        icon={faCheckCircle}
        color={product.featured ? '#f1943c' : 'white'}
        onClick={() => update()}
      />
    </ProductToggleWrapper>
  );
};

ProductFeaturedToggle.propTypes = {
  product: shape({
    id: string.isRequired,
    name: string.isRequired,
    status: string.isRequired,
    featured: bool.isRequired,
    prices: arrayOf(
      shape({
        id: string.isRequired,
        value: number.isRequired,
        size: number.isRequired,
        measurement: string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  updateProduct: func.isRequired,
};

export default ProductFeaturedToggle;
