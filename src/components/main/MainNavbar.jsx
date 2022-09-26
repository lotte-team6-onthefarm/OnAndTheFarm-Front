import React from 'react';
import { MenuItems } from './MenuItems';
import { MenuIcons } from './MenuIcons';
import './MainNavbar.css';
import { Link } from 'react-router-dom';

export default function MainNavbar(props) {
//   const [clicked, setClicked] = useState(false);
  //false = bars, true = times
//   const handleClick = () => {
//     setClicked(!clicked);
//   };
  return (
    <nav className="navbars">
      <img
        className="navbar-logos"
        src="images/onandthefarmlogo.png"
        alt="onandthefarmlogo"
      />
      <ul className={'nav-menus'}>
        {MenuItems.map((item, index) => {
          return (
            <Link key={index} to={item.url}>
            <li>
              <p className={item.cName}>
                {item.title}
              </p>
            </li>
            </Link>
          );
        })}
      </ul>
      <ul className={'nav-icons'}>
        {MenuIcons.map((item, index) => {
          return (
            <li key={index}>
              <p className={item.cName}>
                {item.title}
              </p>
            </li>
          );
        })}
      </ul>
      <div className='nav-user'><p>안녕하세요 진영님</p></div>
    </nav>
  );
}
