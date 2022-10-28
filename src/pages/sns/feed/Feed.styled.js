import styled from 'styled-components';

const FeedDetailWrapper = styled.div`
  margin: 30px -10px;
  width: 66.66666666666666%;
  display: flex;
  flex-wrap: wrap;
`;

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
`;
export { FeedDetailWrapper, FeedWriterWrapper };
