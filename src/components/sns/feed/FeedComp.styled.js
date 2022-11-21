import styled from 'styled-components';

const FeedCardWrapper = styled.div`
  max-width: ${props => props.maxWidth};
  min-width: ${props => props.minWidth};
  margin: ${props => props.margin};
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 40px;
`; // 다름

const FeedWriterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 45px;
  position: relative;
  min-height: 36px;
  margin: 0px 0px 16px;
  div {
    flex: 0 1 auto;
    transition: opacity 0.1s ease 0s;
    display: inline-block;
    min-width: 0px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    img {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 36px;
      height: 36px;
      border-radius: 100%;
      background-color: rgb(237, 237, 237);
    }
    span {
      color: rgb(66, 66, 66);
      font-weight: 500;
    }
  }
  .FeedWriterWrapperSpan::before {
    content: '·';
    margin: 0px 2px 0px 3px;
  }
  button {
    flex: 0 0 auto;
    margin: 0px;
    padding: 0px;
    border: none;
    background: none;
    color: ${props => (props.followStatus ? '#757575' : '#40aa54')};
    font-size: inherit;
    font-weight: 700;
    :hover {
      cursor: pointer;
    }
  }
`; // 같음

const FeedItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
`; // 같음

const FeedItemDescription = styled.div`
  font-size: 15px;
  line-height: 22px;
  transition: opacity 0.1s;
  .card-item-description__content {
    max-height: 66px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
`; // 같음

const FeedItemImg = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  img {
    position: absolute;
    width: 100%;
    ${props => props.imgHeight}
    transition: all 0.1s linear;
    cursor: pointer;
    :hover {
      transform: scale(1.03);
    }
  }
`; // 다름

const FeedActionList = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: 0 0 auto;
  margin-bottom: -10px;
  a,
  div {
    position: relative;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 13px 0 16px;
    background: none;
    border: none;
    z-index: 2;
    color: black;
    :hover {
      color: ${props => props.theme.colors.snsGray};
    }
    svg {
      font-size: 30px;
    }
  }
`; // 같음

export {
  FeedCardWrapper,
  FeedWriterWrapper,
  FeedItemWrapper,
  FeedItemDescription,
  FeedItemImg,
  FeedActionList,
};
