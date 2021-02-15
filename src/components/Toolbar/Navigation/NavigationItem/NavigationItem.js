import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
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
  const { link, title } = props;

  return (
    <StyledLink
      to={link}
      exact
      activeStyle={{
        fontWeight: 'bold',
        color: '#f1943c',
      }}
    >
      {title}
    </StyledLink>
  );
};

NavigationItem.propTypes = {
  link: string.isRequired,
  title: string.isRequired,
};

export default NavigationItem;
