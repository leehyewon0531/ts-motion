import React from 'react';
import styled from "styled-components";

const Button = (props: {btnStr: string}) => {
  const { btnStr } = props;

  return (
    <BtnElement>
      {btnStr}
    </BtnElement>
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