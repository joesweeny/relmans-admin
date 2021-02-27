import React from 'react';
import styled from 'styled-components';

import brand from '../../assets/relmanslogo.png';

const LogoWrapper = styled.img`
  max-width: 200px;
  padding: 10px;
`;

const logo = () => {
  return <LogoWrapper src={brand} />;
};

export default logo;
