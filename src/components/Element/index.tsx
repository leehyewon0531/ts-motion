import styled from 'styled-components';
import modal from '../../types/modal';

const BodyElement = (props: { el: modal }) => {
  const { el } = props;

  return (
    <ElementContainer>
      <div>{el.title}</div>
      <div>{el.content}</div>
      <div>{el.modalType}</div>
    </ElementContainer>
  );
};

const ElementContainer = styled.div`
  width: 400px;
  height: 200px;
  font-size: 50px;
  color: #fff;
`;

export default BodyElement;