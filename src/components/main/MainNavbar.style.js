import styled from 'styled-components';

const Navbar = styled.nav`
  width: 1200px;
  margin: 20px auto;
  height: 80px;
  display: flex;
  border-bottom: solid 2px ${props => props.theme.colors.gray};
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
`;

const LogoImg = styled.img`
  display: flex;
  width: 200px;
  cursor: pointer;
`;

const NavbarMenu = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  width: 400px;
  margin: 0 20px;
  justify-content: space-between;
  .selectedMainNavbarMenu {
    color: ${props => props.theme.colors.logoGreen};
  }
`;

const NavbarMenuPtag = styled.p`
  // color: #202020;
  color: ${props => (props.selectedMenu === props.idx ? '#40AA54' : '#202020')};
  text-decoration: none;
  padding: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: ${props => props.theme.colors.logoGreen};
    border-radius: 4px;
    transition: all 0.1s ease-out;
  }
`;

const NavbarIcons = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  width: 200px;
  justify-content: flex-end;
`;

const NavbarIcon = styled.li`
  svg {
    margin: 0 20px;
    font-size: xx-large;
    border-radius: 100px;
    cursor: pointer;
    border: 2px solid ${props => props.color};
    background-color: ${props => props.color};
  }
  path {
    color: white;
  }
`;

const NavbarUser = styled.div`
  position: relative;
  width: 200px;
  list-style: none;
  text-align: center;
  width: fit-content;
  margin: 0 20px;
`;

const NavbarSeller = styled.p`
  width: 120px;
  color: #202020;
  position: absolute;
  text-decoration: none;
  font-size: small;
  top: -25px;
  right: 0px;
`;

export {
  Navbar,
  LogoImg,
  NavbarMenu,
  NavbarMenuPtag,
  NavbarIcons,
  NavbarIcon,
  NavbarUser,
  NavbarSeller,
};
