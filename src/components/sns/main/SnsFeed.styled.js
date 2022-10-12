import styled from 'styled-components';

const SnsFeedBlock = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 50px 0 0;
  color: #292929;
  .FeedTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 0 20px;
    h1 {
      color: #000000;
      font-weight: bold;
      font-size: 18px;
      line-height: 1;
      span {
        margin-left: 3px;
        color: #35c5f0;
      }
    }
    div {
      a {
        margin: 0px 10px;
        color: rgb(53, 197, 240);
        font-size: 13px;
        font-weight: bold;
        transition: opacity 0.1s ease 0s;
        cursor: pointer;
      }
    }
  }

  .FeedContents {
    margin: 0px -10px -20px;
    display: flex;
    flex-wrap: wrap;
    color: rgb(41, 41, 41);
    div {
      padding: 0px 10px 20px;
      a {
        display: block;
        position: relative;
        border-radius: 6px;
        overflow: hidden;
        img {
          width: 160px;
        }
      }
    }
  }
`;

const MyFeedSection = styled.section`
  margin: 0 0 60px;
`;
const LikeSection = styled.section`
  margin: 0 0 60px;
`;
const ScrapSection = styled.section`
  margin: 0 0 60px;
`;

const NodeFeedWrapper = styled.div`
  margin: 0px;
  padding: 0px;
  background: none;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 175px;
  border: 1px dashed rgb(219, 219, 219);
  color: rgb(117, 117, 117);
  font-size: 13px;
  font-weight: bold;
  transition: color 0.1s ease 0s;
  :hover {
    color: black;
  }
`;

export {
  SnsFeedBlock,
  MyFeedSection,
  LikeSection,
  ScrapSection,
  NodeFeedWrapper,
};
