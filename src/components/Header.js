

import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const HeaderTitle = styled.h1`
  margin: 0;
`;

const HeaderSubtitle = styled.p`
  margin: 5px 0 0;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Learning Hub</HeaderTitle>
      <HeaderSubtitle>Decription</HeaderSubtitle>
    </HeaderWrapper>
  );
};

export default Header;
