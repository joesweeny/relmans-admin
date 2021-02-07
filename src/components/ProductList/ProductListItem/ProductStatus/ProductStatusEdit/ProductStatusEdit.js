import React from 'react';
import styled from 'styled-components';
import { func, string } from 'prop-types';

import { updateProductStatus } from '../../../../../gateway/client';

const options = ['IN_STOCK', 'OUT_OF_SEASON', 'OUT_OF_STOCK'];

const ProductStatusEditWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;

  select {
    cursor: pointer;
  }
`;

const ProductStatusEdit = (props) => {
  const { id, reload, status, toggle } = props;

  const updateStatus = (e) => {
    updateProductStatus(id, e).then(() => {
      reload();
      toggle();
    });
  };

  return (
    <ProductStatusEditWrapper>
      <select
        onBlur={(e) => updateStatus(e.target.value)}
        onChange={(e) => updateStatus(e.target.value)}
        value={status}
      >
        {options.map((o) => (
          <option value={o} key={o}>
            {o.replace(/[_-]/g, ' ')}
          </option>
        ))}
      </select>
    </ProductStatusEditWrapper>
  );
};

ProductStatusEdit.propTypes = {
  id: string.isRequired,
  reload: func.isRequired,
  status: string.isRequired,
  toggle: func.isRequired,
};

export default ProductStatusEdit;
