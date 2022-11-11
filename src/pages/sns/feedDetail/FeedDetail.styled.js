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

const TooltipDiv = styled.div`
  position: absolute;
  z-index: 100000;
  transform: translateX(-50%);
`;

const TooltipBoxDiv = styled.div`
  visibility: visible;
  opacity: 1;
  transform: none;
  transition: opacity 0.2s, transform 0.2s;
  pointer-events: auto;
`;

const TooltipInnerDiv = styled.div`
  margin-top: 15px;
  position: relative;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 20%);
  background-color: hsla(0, 0%, 100%, 0.86);
  color: #fff;
  border-radius: 4px;
`;

const TooltipArrowDiv = styled.div`
  content: ' ';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -10px;
  border-width: 10px;
  border-style: solid;
  border-color: hsla(0, 0%, 100%, 0.86) transparent transparent transparent;
`;

const TooltipContentDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 280px;
  padding: 10px;
  box-sizing: border-box;
  font-family: Noto Sans KR, Noto Sans CJK KR, 맑은 고딕, Malgun Gothic,
    sans-serif;
`;

const ProductDiv = styled.div`
  display: flex;
  position: absolute;
  .productSoldCountDiv {
    margin-bottom: 10px;
    span {
      font-size: 17px;
      font-weight: bold;
    }
    .productSoldCount {
      color: red;
    }
  }
`;
const ProductImgDiv = styled.div`
  margin-left: 10px;
  width: 80px;
  height: 80px;
  position: relative;
  overflow: hidden;
`;

const ProductImg = styled.img`
  display: flex;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 4px;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.1s linear;
  :hover {
    transform: scale(1.02);
  }
`;

const ProductInfoDiv = styled.div`
  margin-left: 10px;
  flex: 1 0 0px;
  div:nth-child(1) {
    margin: 0 0 2px;
    font-size: 11px;
    line-height: 17px;
    color: #757575;
  }
  div:nth-child(2) {
    height: 36px;
    font-size: 13px;
    line-height: 18px;
    color: #292929;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    word-wrap: break-word;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  div:nth-child(3) {
    margin: 6px 0 0;
    font-size: 15px;
    font-weight: 800;
    line-height: 17px;
    color: #292929;
  }
`;

const SvgDiv = styled.div`
  flex: 0 0 auto;
  margin-left: 6px;
  color: #757575;
  div {
  }
`;

export {
  FeedDetailWrapper,
  FeedDetailBlock,
  FeedDetailSideWrapper,
  FeedDetailStickyContainer,
  FeedDetailSideBlock,
  SideButtonWrapper,
  FeedImageWrapper,
  TooltipDiv,
  TooltipBoxDiv,
  TooltipInnerDiv,
  TooltipArrowDiv,
  TooltipContentDiv,
  ProductDiv,
  ProductImgDiv,
  ProductImg,
  ProductInfoDiv,
  SvgDiv,
};
