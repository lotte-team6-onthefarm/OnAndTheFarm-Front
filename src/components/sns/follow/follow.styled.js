import styled from 'styled-components';

const FollowWrapper = styled.div`
  margin: 40px auto 60px;
  width: 100%;
  max-width: 600px;
  h1 {
    margin: 0 0 30px;
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
    color: #2f3438;
  }
`;

const FollowBlock = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  transform: translateY(0px);
`;

const FollowerBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  color: rgb(41, 41, 41);
  a {
    flex: 0 1 auto;
    min-width: 0px;
    display: flex;
    align-items: center;
  }
`;

const FollowImageWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: rgb(245, 245, 245);
  margin-right: 10px;
  overflow: hidden;
`;

const FollowNameWrapper = styled.div`
  flex: 0 1 auto;
  min-width: 0px;
  div {
    color: rgb(47, 52, 56);
    line-height: 20px;
    font-size: 14px;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const FollowingButton = styled.button`
  margin-left: 10px;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 14px;
  font-weight: normal;
  padding: 5px 7px 6px;
  line-height: 19px;
  background-color: #fff;
  color: #757575;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    background-color: #f7f7f7;
  }
`;

const FollowButton = styled.button`
  margin-left: 10px;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 14px;
  white-space: nowrap;
  padding: 5px 7px 6px;
  line-height: 19px;
  background-color: #40aa54;
  border: solid 1px #40aa54;
  border-radius: 3px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  :hover {
    background-color: #009ecf;
    border: solid 1px #009ecf;
  }
`;

export {
  FollowWrapper,
  FollowBlock,
  FollowerBlock,
  FollowImageWrapper,
  FollowNameWrapper,
  FollowingButton,
  FollowButton,
};
