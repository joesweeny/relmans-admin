import React from 'react';
import styled from 'styled-components';
import { func, string } from 'prop-types';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: #ffffff;
  padding: 0 20px 0 20px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #f1943c;
  }
`;

const NavigationItem = (props) => {
  const { link, click, title } = props;

  return (
    <StyledLink
      to={link}
      exact
      activeStyle={{
        fontWeight: 'bold',
        color: '#f1943c',
      }}
      onClick={click ? () => click() : () => {}}
    >
      {title}
    </StyledLink>
  );
};

NavigationItem.propTypes = {
  link: string.isRequired,
  title: string.isRequired,
  click: func,
};

NavigationItem.defaultProps = {
  click: null,
};

export default NavigationItem;
