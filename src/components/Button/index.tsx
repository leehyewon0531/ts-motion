import { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import MyModal from '../../components/MyModal'
import button from '../../types/button';
import modal from '../../types/modal';

const Button = (props: { btnStr: button, bodyList: Array<modal>, setBodyList: Function }) => {
  const { btnStr, bodyList, setBodyList } = props;
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <BtnElement onClick={() => setOpen(true)}>
        {btnStr}
      </BtnElement>
      <MyModal 
        btnStr={btnStr}
        isOpen={isOpen}
        setOpen={setOpen}
        bodyList={bodyList}
        setBodyList={setBodyList} ></MyModal>
    </div>
  );
};

const BtnElement = styled.button`
  width: 170px;
  height: 80px;
  background-color: #f64435;
  color: #fff;
  font-size: 20px;
  border-radius: 10px;
  margin: 5px;
`;

export default Button;