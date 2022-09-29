import styled from 'styled-components';

const Navbar = styled.nav`
  width: 85%;
  margin: auto;
  height: 80px;
  display: flex;
  border-bottom: solid;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

const BlackLogoImg = styled.img`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  width: 200px;
`;

const NavbarMenu = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: center;
  margin-right: 2rem;
`;

const NavbarMenuPtag = styled.p`
  color: #202020;
  text-decoration: none;
  padding: 0.5rem;
  font-size: 0.9rem;
  :hover {
    background-color: #d5f0db;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }
`;

const NavbarUser = styled.div`
  display: flex;
  list-style: none;
  text-align: center;
  width: 20vw;
  justify-content: flex-end;
  margin-right: 2rem;
`;

export { Navbar, BlackLogoImg, NavbarMenu, NavbarMenuPtag, NavbarUser };
