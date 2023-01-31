import styled, { css } from 'styled-components';
import modal from '../../types/modal';
import button from '../../types/button';

const BodyElement = (props: { el: modal }) => {
  const { el } = props;

  const addEmbed = (link: string) => {
    let tempLink = link;
    tempLink = tempLink.replace('youtu.be', 'www.youtube.com');
    return tempLink.slice(0, 23) + '/embed' + tempLink.slice(23, tempLink.length + 1);
  }

  return (
    <ElementContainer modalType={el.modalType} >
      { (el.modalType == 'IMAGE') && <ImageElement imgSrc={el.content} >
        <div id='image-box' className='box' ></div>
        <div className='content-box' >
          <div className='title-text' >{el.title}</div>
          <button className='x-button' >X</button>
        </div>
      </ImageElement> }
      { (el.modalType == 'VIDEO') && <VideoElement>
      <iframe id='video-box' className='box' 
        width="560" height="315" src={addEmbed(el.content)} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen ></iframe>
        <div className='content-box' >
          <div className='title-text' >{el.title}</div>
          <button className='x-button' >X</button>
        </div>
      </VideoElement> }
      { (el.modalType == 'NOTE') && <NoteAndTaskElement>
        <div className='title-text-only' >{el.title}</div>
        <div className='content-text-only' >{el.content}</div>
        <button className='x-button'>X</button>
      </NoteAndTaskElement> }
      { (el.modalType == 'TASK') && <NoteAndTaskElement>
        <div className='title-text-only' >{el.title}</div>
        <label className='content-text-only' ><input type="checkbox" value={el.content} /> {el.content}</label>
        <button className='x-button'>X</button>
      </NoteAndTaskElement> }
    </ElementContainer>
  );
};

const ElementContainer = styled.div<{ modalType: button }>`
  width: 1120px;
  height: 150px;
  ${ props => props.modalType == "IMAGE" && 
    css`
      height: 315px;
    `
  }
  ${ props => props.modalType == "VIDEO" && 
    css`
      height: 315px;
    `
  }
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background-color: #686868;
  color: #ffe498;
  margin: 10px 0px;

  .box {
    width: 560px;
    height: inherit;
  }

  .content-box {
    width: 560px;
    height: inherit;
    font-size: 30px;
    position: relative;

    .title-text {
      width: 550px;
      height: 30px;
      position: absolute;
      top: 20px;
      left: 20px;
    }
  }

  .title-text-only {
    width: 1000px;
    height: 50px;
    position: absolute;
    top: 25px;
    left: 10px;
  }

  .content-text-only {
    width: 1000px;
    height: 70px;
    position: absolute;
    top: 80px;
    left: 10px;
    font-size: 20px;
    color: #fff;
  }

  .x-button {
      border: none;
      background: none;
      color: #f64435;
      font-size: 25px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 5px;
  }
`;

const ImageElement = styled.div<{ imgSrc: string }>`
  width: inherit;
  height: inherit;
  display: flex;

  #image-box {
    background-image: url(${props => props.imgSrc});
    background-size: cover;
  }
`;

const VideoElement = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
`;

const NoteAndTaskElement = styled.div`
  width: inherit;
  height: 250px;
  font-size: 30px;
`;

export default BodyElement;