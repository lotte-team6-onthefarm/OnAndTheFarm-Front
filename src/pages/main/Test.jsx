import React from 'react';
import { MenuItems } from './MenuItems';
import { MenuIcons } from './MenuIcons';
import './Test.css';

export default function Test() {
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
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className={'nav-icons'}>
        {MenuIcons.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className='nav-user'><a>안녕하세요 진영님</a></div>
    </nav>
  );
}
