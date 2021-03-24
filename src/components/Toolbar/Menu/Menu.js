import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';
import NavigationItem from '../Navigation/NavigationItem/NavigationItem';

const MenuWrapper = styled.div`
  display: ${(props) => (props.open ? '-webkit-flex' : 'none')};
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  align-items: center;
  margin-top: 80px;
  height: 100%;
  width: 100vw;
  left: 0;
  background-color: #3d604c;
  transition: transform 300ms;
  text-transform: uppercase;
  z-index: 1500;

  a {
    padding-top: 10px;
  }

  @media (min-width: 758px) {
    width: 50vw;
  }

  @media (min-width: 956px) {
    width: 300px;
  }
`;

const Menu = (props) => {
  const { open, closeMenu } = props;

  return (
    <MenuWrapper open={open}>
      <NavigationItem link="/products" title="Products" click={closeMenu} />
      <NavigationItem link="/orders" title="Orders" click={closeMenu} />
    </MenuWrapper>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  closeMenu: func.isRequired,
};

export default Menu;
