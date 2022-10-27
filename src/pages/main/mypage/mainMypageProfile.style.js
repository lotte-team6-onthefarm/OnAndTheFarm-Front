import styled from 'styled-components';

const UserDetailBlock = styled.div`
  min-height: 120px;
  margin: 0 0 20px;
`;

const UserDetailImgBlock = styled.div`
  margin: 0 auto 24px;
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

export { UserDetailBlock, UserDetailImgBlock, UserDetailImg, UserInfoSetting };
