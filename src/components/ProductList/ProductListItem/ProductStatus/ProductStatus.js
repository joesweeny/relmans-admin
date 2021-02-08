import React from 'react';
import { bool, func, string } from 'prop-types';
import styled from 'styled-components';

import ProductStatusEdit from './ProductStatusEdit/ProductStatusEdit';

const ProductStatusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
  font-size: 14px;
  color: ${(prop) => prop.color};
  text-align: left;

  @media (min-width: 959px) {
    font-size: 18px;
  }
`;

const productStatus = (props) => {
  const { id, isEditing, reload, status, toggle } = props;

  let color = 'green';

  if (status === 'OUT_OF_STOCK') {
    color = 'red';
  }

  if (status === 'OUT_OF_SEASON') {
    color = 'orange';
  }

  return (
    <ProductStatusWrapper color={color}>
      {isEditing ? (
        <ProductStatusEdit
          id={id}
          reload={reload}
          status={status}
          toggle={toggle}
        />
      ) : (
        status.replace(/[_-]/g, ' ')
      )}
    </ProductStatusWrapper>
  );
};

productStatus.propTypes = {
  id: string.isRequired,
  isEditing: bool.isRequired,
  reload: func.isRequired,
  status: string.isRequired,
  toggle: func.isRequired,
};

export default productStatus;
