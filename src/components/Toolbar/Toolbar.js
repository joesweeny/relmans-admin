import React from 'react';
import styled from 'styled-components';
import { bool, func } from 'prop-types';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../Logo/Logo';
import Navigation from './Navigation/Navigation';

const ToolbarWrapper = styled.div`
  display: flex;
  flex-shrink: 0
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #3d604c;
  height: 80px;
  width: 100%;

  svg {
    margin-right: 15px;
  }

  @media (min-width: 768px) {
    svg {
      display: none;
    }
  }
`;

const Toolbar = (props) => {
  const { menuOpen, clickMenu } = props;

  return (
    <ToolbarWrapper>
      <Logo />
      <Navigation />
      <FontAwesomeIcon
        color={menuOpen ? '#f1943c' : '#ffffff'}
        icon={faBars}
        size="2x"
        onClick={() => clickMenu(!menuOpen)}
      />
    </ToolbarWrapper>
  );
};

Toolbar.propTypes = {
  menuOpen: bool.isRequired,
  clickMenu: func.isRequired,
};

export default Toolbar;
