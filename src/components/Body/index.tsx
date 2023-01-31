import styled from 'styled-components';
import modal from '../../types/modal';
import BodyElement from '../Element';

const Body = (props: { bodyList: Array<modal> }) => {
  let { bodyList } = props;

  return(
    <BodyContainer>
      {bodyList.map((el, idx) => (<BodyElement el={el} key={idx} />))}
    </BodyContainer>
  );
};

const BodyContainer = styled.div`
  width: 1200px;
  height: 1570px;
  background-color: rgba(45, 45, 45, 0.5);
  position: absolute;
  top: 230px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
`;

export default Body;