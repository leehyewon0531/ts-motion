import React from 'react';
import styled from "styled-components";
import Button from '../Button';

const Header = () => {
  return (
    <HeaderContainer>
      <div className="header__text">MOTION</div>
      <div className="button-container">
        <Button btnStr="IMAGE"></Button>
        <Button btnStr="VIDEO"></Button>
        <Button btnStr="NOTE"></Button>
        <Button btnStr="TASK"></Button>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 1200px;
  height: 230px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba( 0, 0, 0, 0.5 );

  .header__text {
    color: #f64435;
    font-size: 90px;
    text-align: center;
  }

  .button-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 750px;
    display: flex;
    justify-content: space-around;
  }
`;

export default Header;