import styled from 'styled-components';

const SnsMainWrapper = styled.div`
  margin: 30px auto;
  max-width: 1130px;
  display: flex;
  flex-wrap: wrap;
`;

const SelectWrapper = styled.div`
  margin: 20px 0px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  button {
    width : 90px;
    height : 40px;
    padding: 5px;
    margin: 0 10px;
    background: #f1f1f1;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 15px;
    color: #757575;
  }
  button:hover {
    font-size: 16px;
  }
`;

const FeedDetailWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const FeedCardWrapper = styled.div`
  max-width: 22%;
  min-width: 150px;
  margin: 0 6.5px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 40px;
`;

const FeedWriterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 45px;
  position: relative;
  min-height: 36px;
  margin: 0px 0px 16px;
  a {
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
    color: ${props => props.theme.colors.green};
    font-size: inherit;
    font-weight: 700;
    :hover {
      cursor: pointer;
    }
  }
`;
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
`;

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
`;

const FeedItemImg = styled.div`
  border-radius: 6px;
  padding-bottom: 100%;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    width: 100%;
    transition: all 0.1s linear;
    cursor: pointer;
    :hover {
      transform: scale(1.03);
    }
  }
`;

const FeedActionList = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: 0 0 auto;
  margin-bottom: -10px;
  a {
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
`;
export {
  SnsMainWrapper,
  SelectWrapper,
  FeedDetailWrapper,
  FeedCardWrapper,
  FeedWriterWrapper,
  FeedItemWrapper,
  FeedItemDescription,
  FeedItemImg,
  FeedActionList,
};
