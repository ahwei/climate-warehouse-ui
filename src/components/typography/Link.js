import React from 'react';
import styled from 'styled-components';

import { Body } from '../../components';

const StyledLink = styled('div')`
  color: ${props => props.theme.colors.default.black};
  :hover {
    color: ${props => props.theme.colors.default.black};
  }
`;

const Link = ({ children }) => {
  return (
    <Body>
      <StyledLink>{children}</StyledLink>
    </Body>
  );
};

export { Link };
