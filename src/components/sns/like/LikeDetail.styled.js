import styled from 'styled-components';

const FeedLikeWrapper = styled.div`
  margin-top: 30px;
  width: 66.6666%;
  display: flex;
  flex-wrap: wrap;
  margin-right: -10px;
  margin-left: -10px;
`;

const LikeCardWrapper = styled.div`
  margin: 0px 5px 10px 5px;
`;

const LikeImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const LikeImgBlock = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    transition: all 0.1s linear;
    cursor: pointer;
    :hover {
      transform: scale(1.03);
    }
  }
`;

const LikeItemDescription = styled.div`
  margin-top: 10px;
  padding: 0px 10px;
  h1 {
    margin: 9px 0px 0px;
    span {
      :nth-child(1) {
        display: block;
        color: rgb(117, 117, 117);
        word-break: break-all;
        font-size: 11px;
        font-weight: 400;
        line-height: 13px;
      }
      :nth-child(2) {
        max-height: 34px;
        margin-top: 5px;
        word-break: break-all;
        font-size: 13px;
        font-weight: 400;
        line-height: 17px;
        color: rgb(0, 0, 0);
        transition: opacity 0.1s ease 0s;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow-wrap: break-word;
      }
    }
  }
  .production-item-price {
    margin: 2px 0px 0px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 17px;
    line-height: 23px;
    font-weight: 700;
    span {
      :nth-child(1) {
        color: rgb(53, 197, 240);
        margin-right: 4px;
      }
    }
  }
  .production-item-stats {
    margin: 3px 0px 0px;
    font-size: 12px;
    color: rgb(158, 158, 158);
    line-height: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
    .production-item-stats--icon {
      display: flex;
      align-items: center;
      color: rgb(53, 197, 240);
      margin-right: 1px;
    }
    strong {
      color: black;
      margin-right: 4px;
    }
  }
`;

export {
  FeedLikeWrapper,
  LikeCardWrapper,
  LikeImgWrapper,
  LikeImgBlock,
  LikeItemDescription,
};
