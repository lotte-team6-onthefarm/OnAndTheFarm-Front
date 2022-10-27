import styled from 'styled-components';

const SnsUserBlock = styled.div`
  position: relative;
  padding: 30px 25px 18px;
  border-radius: 4px;
  border: 1px solid #dadce0;
  box-shadow: 0 2px 4px 0 rgb(63 71 77 / 6%);
`;

const ShareIconBlock = styled.div`
  position: absolute;
  top: 18px;
  right: 12px;
  font-size: 24px;
`;

const UserDetailBlock = styled.div`
  min-height: 120px;
  margin: 0 0 20px;
`;

const UserButtonBlock = styled.div`
  padding: 24px 0 6px;
  border-top: 1px solid #eaebef;
  display: flex;
  color: ${props => props.theme.colors.gray};
  a {
    padding: 0;
    flex: 1 0 0px;
    display: block;
    min-width: 0;
    box-sizing: border-box;
    text-align: center;
    transition: 0.1s opacity;
    color: black;
    div:nth-child(1) {
      margin: 0 auto 4px;
      font-size: 28px;
    }
    div:nth-child(2) {
      font-size: 13px;
      line-height: 21px;
      font-weight: normal;
      text-align: center;
    }
    div:nth-child(3) {
      font-size: 15px;
      line-height: 21px;
      font-weight: bold;
      text-align: center;
    }
    :hover {
      color: #bbbbbb;
    }
  }
`;

const UserDetailImgBlock = styled.div`
  position: relative;
  margin: 0 auto 24px;
  width: 120px;
  height: 120px;
`;

const UserDetailImg = styled.img`
  position: absolute;
  width: 100%;
  border-radius: 60px;
  border: 0;
`;

const UserInfoBlock = styled.div`
  text-align: center;
`;

const UserInfoNickName = styled.div`
  line-height: 1.15;
  margin: 0 0 10px;
  font-size: 26px;
  font-weight: bold;
  color: #292929;
  overflow-wrap: break-word;
  word-break: break-all;
`;

const UserInfoBottom = styled.div`
  text-align: center;
`;

const UserInfoFollow = styled.div`
  margin: 0 0 13px;
  display: flex;
  justify-content: center;
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
  color: #828c94;
  .infoFollowButton {
    font-weight: bold;
    color: #525b61;
    cursor: pointer;
    :hover {
      color: #d7d7d7;
    }
    :nth-child(1):not(:last-child):after {
      content: '';
      display: inline-block;
      width: 1px;
      height: 20px;
      margin-left: 10px;
      background-color: #dadce0;
    }
  }
  div {
    display: flex;
    div:nth-child(1) {
      margin-right: 5px;
    }
    :nth-child(1) {
      margin-right: 10px;
    }
  }
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

export {
  SnsUserBlock,
  ShareIconBlock,
  UserDetailBlock,
  UserButtonBlock,
  UserDetailImgBlock,
  UserDetailImg,
  UserInfoBlock,
  UserInfoNickName,
  UserInfoBottom,
  UserInfoFollow,
  UserInfoSetting,
};
