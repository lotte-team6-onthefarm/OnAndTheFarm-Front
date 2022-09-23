import React, {useState} from 'react';
import "./MainPage.css";
import { MenuItems } from "./MenuItems";
import Button from './Button'


export default function MainPage() {
  const [clicked, setClicked] = useState(false);
    //false = bars, true = times
    const handleClick = () => {
        setClicked(!clicked);
    }
  return <nav className="Navbar">
  <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
  <div className="menu-icon" onClick={handleClick}>
      <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
  </div>
  <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
      {MenuItems.map((item, index)=>{
          return (
                  <li key={index}>
                      <a className={item.cName} hre={item.url}>
                          {item.title}
                      </a>
                  </li>
          )
      })}
  </ul>
  <Button>Sign Up</Button>
</nav>;
}
