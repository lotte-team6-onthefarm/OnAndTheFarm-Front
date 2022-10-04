import styled from 'styled-components';

const MypageDiv = styled.div`
width: 1130px;
  padding: 20px 30px;
  margin: 100px auto;
  display: flex;
`;

const MypageNavbarDiv = styled.div`
  width: 300px;
  height: 100%;
  padding: 20px 5px;
  border: solid 1px lightgray;
  border-radius: 5px;
`;

const MypageContentDiv = styled.div`
width: 800px;
height: 200px;
  padding: 30px;
  border-radius: 5px;
  border: solid 1px green;
`;

export {
  MypageDiv,
  MypageNavbarDiv,
  MypageContentDiv,
};
