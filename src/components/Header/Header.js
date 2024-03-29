import { Link, useLocation } from 'react-router-dom';
import LogoIcon from "../Icons/LogoIcon";
import "./Header.scss";
import { useState, useEffect } from 'react';

function Header() {
  
  const [active, setActive] = useState(false);
  const location = useLocation();
  

  function navToggle() {
    setActive(!active);
    var html = document.getElementById("html");
	  html.classList.toggle("overflow-y-hidden")
    var body = document.getElementById("body");
	  body.classList.toggle("overflow-y-hidden")    
  }  

  useEffect(() => {
    setActive(false);
    var links = document.getElementById('headerUl');
    var html = document.getElementById("html");
    var body = document.getElementById("body");
    links.classList.remove("active");
    html.classList.remove("overflow-y-hidden")  
    body.classList.remove("overflow-y-hidden")  
  }, [location]);

  return (
    <header className="header">
      <div className="container header__container">          
          <Link to={'/react-designer'} className="header__logo" aria-label='logo leading to home page'><LogoIcon />               
          </Link>

          <nav>
          <ul className={`header__ul ${active ? 'active' : ''}`} id="headerUl">
              <li>
                <Link to={'/react-designer'} className="header__a">Home              
                </Link> 
              </li>
              <li>
              <Link to={'/work'} className="header__a">Work            
              </Link>            
              </li>            
              <li>         
                <Link to={'/does-not-exist'} className="header__a"> Contact              
                </Link> 
              </li>
              <li><span className="material-symbols-outlined icon-close" id="close" onClick={navToggle} >close</span></li>
            </ul>
          </nav>

          <div className="header__burger">
            <span className="material-symbols-outlined" onClick={navToggle}>
              menu
            </span>
          </div>

			</div>
    </header>
  );
}

export default Header;
