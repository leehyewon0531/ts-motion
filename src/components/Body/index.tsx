import styled from 'styled-components';

const Body = () => {
  return(
    <BodyElement></BodyElement>
  );
};

const BodyElement = styled.div`
  width: 1200px;
  height: 1570px;
  background-color: #2d2d2d;
  opacity: 0.5;
  position: absolute;
  top: 230px;
  left: 50%;
  transform: translateX(-50%);
`;

export default Body;