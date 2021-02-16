import React from 'react';
import styled from 'styled-components';

import NavigationItem from './NavigationItem/NavigationItem';

const NavigationWrapper = styled.div`
  display: flex;
  flex-shrink: 0
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding-right: 30px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;

  p {
    padding: 0 20px 0 20px;
    cursor: pointer;

    &:hover {
      color: #f1943c;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationItem link="/products" title="Products" />
      <NavigationItem link="/orders" title="Orders" />
    </NavigationWrapper>
  );
};

export default navigation;
