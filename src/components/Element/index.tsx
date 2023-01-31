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
        <div className='image-box'></div>
        <div className='image__content-box'>
          <div className='image__title-text'>{el.title}</div>
          <button className='image__x-button'>X</button>
        </div>
      </ImageElement> }
      { (el.modalType == 'VIDEO') && <VideoElement>
      <iframe  className='video-box' width="560" height="315" src={addEmbed(el.content)} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen ></iframe>
        <div className='video__content-box'>
          <div className='video__title-text'>{el.title}</div>
          <button className='video__x-button'>X</button>
        </div>
      </VideoElement> }
      { (el.modalType == 'NOTE') && <NoteElement>
        <div className='note-title'>{el.title}</div>
        <div className='note-content'>{el.content}</div>
        <button className='note-x-button'>X</button>
      </NoteElement> }
      { (el.modalType == 'TASK') && <TaskElement>
        <div className='task-title'>{el.title}</div>
        <label className='task-content' ><input type="checkbox" value={el.content} /> {el.content}</label>
        <button className='task-x-button'>X</button>
      </TaskElement> }
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
`;

const ImageElement = styled.div<{ imgSrc: string }>`
  width: inherit;
  height: inherit;
  display: flex;

  .image-box {
    width: 560px;
    height: inherit;
    background-image: url(${props => props.imgSrc});
    background-size: cover;
  }

  .image__content-box {
    width: 560px;
    height: inherit;
    font-size: 30px;
    position: relative;

    .image__title-text {
      width: 550px;
      height: 30px;
      position: absolute;
      top: 20px;
      left: 20px;
    }

    .image__x-button {
      border: none;
      background: none;
      color: #f64435;
      font-size: 25px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 5px;
    }
  }
`;

const VideoElement = styled.div`
  width: inherit;
  height: inherit;
  display: flex;

  .video-box {
    width: 560px;
    height: inherit;
  }

  .video__content-box {
    width: 560px;
    height: inherit;
    font-size: 30px;
    position: relative;

    .video__title-text {
      width: 550px;
      height: 30px;
      position: absolute;
      top: 20px;
      left: 20px;
    }

    .video__x-button {
      border: none;
      background: none;
      color: #f64435;
      font-size: 25px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 5px;
    }
  }
`;

const NoteElement = styled.div`
  width: inherit;
  height: 250px;
  font-size: 30px;

  .note-title {
    width: 1000px;
    height: 50px;
    position: absolute;
    top: 25px;
    left: 10px;
  }

  .note-content {
    width: 1000px;
    height: 70px;
    position: absolute;
    top: 80px;
    left: 10px;
    font-size: 20px;
    color: #fff;
  }

  .note-x-button {
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

const TaskElement = styled.div`
  width: inherit;
  height: 250px;
  font-size: 30px;

  .task-title {
    width: 1000px;
    height: 50px;
    position: absolute;
    top: 25px;
    left: 10px;
  }

  .task-content {
    width: 1000px;
    height: 70px;
    position: absolute;
    top: 80px;
    left: 10px;
    font-size: 20px;
    color: #fff;
  }

  .task-x-button {
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

export default BodyElement;