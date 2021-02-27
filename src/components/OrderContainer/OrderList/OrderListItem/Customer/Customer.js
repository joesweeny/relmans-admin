import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const CustomerWrapper = styled.div`
  display: -webkit-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CustomerTitle = styled.p`
  color: #f1943c;
  font-size: 14px;
`;

const Customer = (props) => {
  const { name } = props;

  return (
    <CustomerWrapper>
      <CustomerTitle>Customer</CustomerTitle>
      <p>{name}</p>
    </CustomerWrapper>
  );
};

Customer.propTypes = {
  name: string.isRequired,
};

export default Customer;
