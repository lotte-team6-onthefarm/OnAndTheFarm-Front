import React from 'react';
import { MenuItems } from './MenuItems';
import { MenuIcons } from './MenuIcons';
import onandthefarmlogo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import {
  BlackLogoImg,
  Navbar,
  NavbarMenu,
  NavbarMenuPtag,
  NavbarUser,
} from './MainNavbar.style';

export default function MainNavbar(props) {
  return (
    <Navbar>
      <BlackLogoImg
        src={onandthefarmlogo}
        alt="onandthefarmlogo"
      ></BlackLogoImg>
      <NavbarMenu>
        {MenuItems.map((item, index) => {
          return (
            <Link key={index} to={item.url}>
              <li>
                <NavbarMenuPtag>{item.title}</NavbarMenuPtag>
              </li>
            </Link>
          );
        })}
      </NavbarMenu>
      <NavbarMenu>
        {MenuIcons.map((item, index) => {
          return (
            <Link key={index} to={item.url}>
              <li>
                <NavbarMenuPtag>{item.title}</NavbarMenuPtag>
              </li>
            </Link>
          );
        })}
      </NavbarMenu>
      <NavbarUser>
      <Link to='/mypage'>
              <li>
                <NavbarMenuPtag>안녕하세요 진영님</NavbarMenuPtag>
              </li>
            </Link>
      </NavbarUser>
    </Navbar>
  );
}
