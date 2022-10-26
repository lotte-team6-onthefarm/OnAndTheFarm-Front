import styled from 'styled-components';

const FeedDetailWrapper = styled.div`
  position: relative;
  margin: 60px 0;
`;
const FeedDetailBlock = styled.div`
  width: 550px;
  position: relative;
  margin: 0px auto;
  box-sizing: border-box;
`;

const FeedDetailSideWrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 0px;
  width: calc(50% - 360px);
  max-width: 340px;
  height: 100%;
  padding: 0px 40px;
  box-sizing: border-box;
`;
const FeedDetailStickyContainer = styled.div`
  position: sticky;
`;

const FeedDetailSideBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const SideButtonWrapper = styled.button`
  position: relative;
  display: block;
  width: 60px;
  margin-bottom: 38px;
  padding: 0px;
  border: 0px;
  font: inherit;
  background: none;
  span {
    :nth-child(1) {
      cursor: pointer;
      border: 1px solid rgb(194, 200, 204);
      background: rgb(255, 255, 255);
      box-shadow: rgb(63 71 77 / 15%) 0px 2px 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 60px;
      border-radius: 100%;
      box-sizing: border-box;
      span {
        font-size: 24px;
        line-height: 1;
        color: rgb(33, 38, 41);
      }
      .fillIcons {
        color: ${props => props.theme.colors.green};
      }
    }
    :nth-child(2) {
      position: absolute;
      left: 50%;
      bottom: -22px;
      font-size: 14px;
      line-height: 18px;
      color: rgb(130, 140, 148);
      white-space: nowrap;
      transform: translateX(-50%);
    }
  }
`;
const FeedImageWrapper = styled.div`
  /* width: 550px;
  height: 550px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  position: relative; */
  /* img {
    height: 100%;
  } */
  /* div {
    color: #59de47;
    cursor: pointer;
    position: absolute;
    :nth-child(2) {
      top: 30px;
      left: 255px;
    }
    :nth-child(3) {
      top: 350px;
      left: 450px;
    }
    :nth-child(4) {
      top: 400px;
      left: 400px;
    }
  } */
`;
export {
  FeedDetailWrapper,
  FeedDetailBlock,
  FeedDetailSideWrapper,
  FeedDetailStickyContainer,
  FeedDetailSideBlock,
  SideButtonWrapper,
  FeedImageWrapper,
};
