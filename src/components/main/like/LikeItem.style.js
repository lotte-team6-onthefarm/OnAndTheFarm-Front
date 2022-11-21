import styled from 'styled-components';

const LikeItem = styled.div`
  height: 70px;
  margin: 10px;
  display: flex;
`;

const LikeItemImg = styled.img`
  border-radius: 7px;
  margin: auto 20px;
`;

const LikeItemContent = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  div {
    padding: 0 10px;
  }
`;

const LikeItemDetail = styled.div`
  width: 380px;
  padding: 5px;
  max-height: 100px;
  display: block;
  word-break: break-all;
  font-weight: 400;
  /* line-height: 13px; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
`;
const LikeItemNumber = styled.div`
  width: 110px;
  padding: 5px;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
`;
const LikeItemPrice = styled.div`
  overflow: hidden;
  width: 100px;
  display: flex;
  justify-content: end;
  div {
    display: flex;
  }
`;

export {
  LikeItem,
  LikeItemImg,
  LikeItemContent,
  LikeItemDetail,
  LikeItemNumber,
  LikeItemPrice,
};
