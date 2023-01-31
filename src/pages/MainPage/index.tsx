import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Body from '../../components/Body';
import GlobalStyle from '../../components/GlobalStyle';
import bgImage from '../../assets/cool-background.png';
import modal from '../../types/modal';

const MainPage = () => {
  const [bodyList, setBodyList] = useState<Array<modal> | null>(null);

  return (
    <MainContainer>
      <GlobalStyle />
      <Header setBodyList={setBodyList} ></Header>
      <Body bodyList={bodyList} ></Body>
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