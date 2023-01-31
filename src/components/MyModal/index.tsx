import Modal from 'react-modal';
import styled from 'styled-components';
import { useState } from 'react';
import button from '../../types/button';

Modal.setAppElement('#root');

const MyModal = (props: { btnStr: button, isOpen: boolean, setOpen: Function, setBodyList: Function }) => {
  const { btnStr, isOpen, setOpen, setBodyList } = props;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addElement = () => {
    setOpen(false);
  }

  return (
      <Modal style={modalStyles} isOpen={isOpen}>
        <ModalContent>
          <button onClick={()=> setOpen(false)} id="x-button">X</button>
          <div className="modal-text" id="modal-first-text">Title</div>
          <input type="text" id="modal-first-input" onChange={(e) => setTitle(e.target.value)} />
          { (btnStr == 'IMAGE') && 
            <div>
              <div className="modal-text" id="modal-second-text">URL</div>
              <input type="text" id="modal-second-input" onChange={(e) => setContent(e.target.value)} />
              <button onClick={addElement} id="add-button">ADD</button>
            </div>
          }
          { (btnStr == 'VIDEO') && 
            <div>
              <div className="modal-text" id="modal-second-text">URL</div>
              <input type="text" id="modal-second-input" onChange={(e) => setContent(e.target.value)} />
              <button onClick={addElement} id="add-button">ADD</button>
            </div>
          }
          { (btnStr == 'NOTE') && 
            <div>
              <div className="modal-text" id="modal-second-text">body</div>
              <input type="text" id="modal-second-input" onChange={(e) => setContent(e.target.value)} />
              <button onClick={addElement} id="add-button">ADD</button>
            </div>
          }
          { (btnStr == 'TASK') && 
            <div>
              <div className="modal-text" id="modal-second-text">body</div>
              <input type="text" id="modal-second-input" onChange={(e) => setContent(e.target.value)} />
              <button onClick={addElement} id="add-button">ADD</button>
            </div>
          }
        </ModalContent>
      </Modal>
  )

};

const modalStyles = {
  overlay: {
    backgroundColor: "transparent",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "500px",
    height: "220px",
    transform: 'translate(-50%, -50%)',
    background: 'radial-gradient(circle, #646464e6 0%, #363636e6 100%)'
  },
};

const ModalContent = styled.div`
  width: 500px;
  height: 220px;
  position: relative;

  .modal-text {
    color: #ffe498;
    font-size: 20px;
    position: absolute;
  }

  #modal-first-text {
    top: 20px;
    left: 10px;
  }

  #modal-second-text {
    top: 90px;
    left: 10px;
  }

  input {
    width: 480px;
    height: 32px;
    background-color: #575757;
    color: #fff;
    font-size: 18px;
    position: absolute;
  }

  #modal-first-input {
    top: 50px;
    left: 10px;
  }

  #modal-second-input {
    top: 120px;
    left: 10px;
  }

  #x-button {
    border: none;
    background: none;
    color: #f64435;
    font-size: 25px;
    position: absolute;
    right: 1px;
  }

  #add-button {
    width: 58px;
    height: 32px;
    background-color: #f64435;
    color: #fff;
    font-size: 15px;
    border: none;
    position: absolute;
    right: 1px;
    bottom: 5px;
  }
`;

export default MyModal;