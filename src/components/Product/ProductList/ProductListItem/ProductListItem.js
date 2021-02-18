import React, { useContext, useState } from 'react';
import { arrayOf, bool, number, shape, string } from 'prop-types';
import styled from 'styled-components';

import ProductImage from './ProductImage/ProductImage';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductStatus from './ProductStatus/ProductStatus';
import ProductPrices from './ProductPrices/ProductPrices';
import ProductFeaturedToggle from './ProductFeaturedToggle/ProductFeaturedToggle';

import { ProductActionContext } from '../../../../context/ProductContext';

const ProductListItemWrapper = styled.div`
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: space-between;
  height: fit-content;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  color: black;
  font-weight: 500;
  width: 100%;
  padding: 0;
  margin: 5px 10px 5px 0;

  @media (min-width: 758px) {
    flex-direction: row;
  }

  @media (min-width: 959px) {
    width: 60%;
    margin: 10px;
  }
`;

const ProductDataWrapper = styled.div`
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  cursor: pointer;

  @media (min-width: 959px) {
    margin-left: 15px;
  }
`;

const ProductInformationWrapper = styled.div`
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 959px) {
    margin-left: 15px;
  }
`;

const ProductListItem = (props) => {
  const { product } = props;
  const [status, setStatus] = useState(null);
  const [prices, setPrices] = useState([]);
  const { dispatchPrice, dispatchStatus } = useContext(ProductActionContext);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    if (isEditing) {
      if (status !== null) {
        dispatchStatus(product.id, status);
        setStatus(null);
      }

      if (prices.length > 0) {
        prices.forEach((p) => {
          dispatchPrice(product.id, p.id, p.value);
          setPrices([]);
        });
      }
    }

    setIsEditing(!isEditing);
  };

  return (
    <ProductListItemWrapper>
      <ProductDataWrapper onClick={() => toggleEdit()}>
        <ProductImage id={product.id} name={product.name} />
        <ProductInformationWrapper>
          <ProductInfo title={product.name} />
          <ProductStatus
            isEditing={isEditing}
            status={product.status}
            updateStatus={setStatus}
          />
        </ProductInformationWrapper>
        <ProductPrices
          isEditing={isEditing}
          prices={product.prices}
          updatePrices={setPrices}
        />
      </ProductDataWrapper>
      <ProductFeaturedToggle id={product.id} featured={product.featured} />
    </ProductListItemWrapper>
  );
};

ProductListItem.propTypes = {
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
};

export default ProductListItem;
