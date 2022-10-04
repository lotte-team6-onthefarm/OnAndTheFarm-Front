import styled from 'styled-components';

const NavbarProfileDiv = styled.div`
  height: 400px;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const NavbarProfileTopDiv = styled.div`
  height: 250px;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  text-align: center;
  h3 {
    margin: 10px auto 10px;
  }
`;

const NavbarProfileImgDiv = styled.div`
  width: 170px;
  height: 170px;
  margin: 0 auto;
  img {
    width: 170px;
    height: 170px;
    border: 1px solid lightgray;
    border-radius: 9999px;
  }
`;

const NavbarProfileContentDiv = styled.div`
margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const NavbarProfileButtonDiv = styled.div`
text-align: center;
 width: 70px;
 height: 100px;
 svg{
    font-size: xx-large;
 }
`;

export { NavbarProfileDiv, NavbarProfileTopDiv, NavbarProfileImgDiv, NavbarProfileContentDiv, NavbarProfileButtonDiv };
