import BehanceIcon from "../Icons/BehanceIcon";
import Dribblecon from "../Icons/DribbleIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import TwitterIcon from "../Icons/Twittericon";
import ViberIcon from "../Icons/ViberIcon";
import "./Footer.scss";


function Footer() {
  return (
    <div className="footer">
        <div className="container footer__container">
            <div className="footer__copyright">Made by<span className="footer__span"> A.Lebjodkina</span> — Copyright 
            <span> {(new Date().getFullYear())}
            </span> 
            </div>
            <nav>
                <ul className="footer__links">
                    <li><a href="https://www.viber.com/" target="blank" aria-label="open viber button"><ViberIcon /></a></li>
                    <li><a href="https://dribbble.com/" target="blank" aria-label="open dribble button"><Dribblecon /></a></li>
                    <li><a href="https://www.linkedin.com/" target="blank" aria-label="open linkedin button"><LinkedinIcon /></a></li>
                    <li><a href="https://twitter.com/" target="blank" aria-label="open twitter button"><TwitterIcon /></a></li>
                    <li><a href="https://www.behance.net/" target="blank" aria-label="open behance button"><BehanceIcon /></a></li>                    
                </ul>
            </nav>
        </div>
        
	</div>
    
  );
}

export default Footer;