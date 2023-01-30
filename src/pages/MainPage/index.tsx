import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import GlobalStyle from '../../components/GlobalStyle';
import bgImage from '../../assets/cool-background.png';

const MainPage = () => {
  return (
    <MainContainer>
      <GlobalStyle />
      <Header></Header>
    </MainContainer>
  )
};

const MainContainer = styled.div`
  width: 100%;
  height: 1900px;
  position: relative;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  background-attachment: fixed;
`

export default MainPage;