import React from 'react';
import styled from 'styled-components';
import { func, string } from 'prop-types';

const options = ['IN_STOCK', 'OUT_OF_SEASON', 'OUT_OF_STOCK'];

const ProductStatusEditWrapper = styled.div`
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: flex-start;
  width: 100%;

  select {
    cursor: pointer;
    padding: 5px 0 5px 0;
  }
`;

const ProductStatusEdit = (props) => {
  const { status, updateStatus } = props;

  return (
    <ProductStatusEditWrapper>
      <select
        onBlur={(e) => updateStatus(e.target.value)}
        onChange={(e) => updateStatus(e.target.value)}
        onClick={(e) => e.stopPropagation()}
        defaultValue={status}
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
  status: string.isRequired,
  updateStatus: func.isRequired,
};

export default ProductStatusEdit;
