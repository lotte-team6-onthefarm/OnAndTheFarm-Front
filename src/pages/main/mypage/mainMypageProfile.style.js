import styled from 'styled-components';

const UserDetailBlock = styled.div`
  display: flex;
  min-height: 120px;
  margin: 0 0 20px;
  align-items: center;
`;

const UserDetailImgBlock = styled.div`
  display: block;
  margin: 0 10px;
  width: 120px;
  height: 120px;
`;

const UserDetailImg = styled.img`
  border-radius: 60px;
  width: 100%;
  border: 0;
`;

const UserInfoSetting = styled.div`
  text-align: center;
  a {
    margin-right: 6px;
    font-weight: normal;
    font-size: 12px;
    color: #292929;
    padding: 7px 16px;
    line-height: 19px;
    background-color: #fff;
    border: solid 1px #dbdbdb;
    border-radius: 4px;
    :hover {
      background-color: #f7f7f7;
    }
  }
`;

const MemberInfoDiv = styled.div`
  margin: 0 10px;
  .nickname {
    display: inline-block;
    font-size: 20px;
    line-height: 1.47;
    letter-spacing: -0.69px;
    vertical-align: middle;
    strong {
      font-size: 26px;
    }
  }
  .infoWord {
    max-width: 310px;
    display: block;
    white-space: nowrap;
    -webkit-line-clamp: 1;
    -webkit-box-orient: horizontal;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const MemberPointDiv = styled.div`
  margin: 0 10px;
  position: relative;
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  .title {
    position: relative;
    display: block;
    vertical-align: middle;
    span {
      position: relative;
      display: inline-block;
      margin-bottom: 10px;
      font-size: 20px;
      line-height: 1.2;
      letter-spacing: 0;
      color: #686c6f;
    }
  }
  .contain {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.23px;
    color: #333;
  }
`;

export {
  UserDetailBlock,
  UserDetailImgBlock,
  UserDetailImg,
  UserInfoSetting,
  MemberInfoDiv,
  MemberPointDiv,
};
