import "./WelcomeSection.scss";
import userPhoto from '../../Assets/userPhoto.png';
import Button from "../UI/Button";

import React from 'react';
import ArrowIcon from "../Icons/ArrowIcon";


function WelcomeSection() {
  return (
    <div className="welcome-section container" data-aos="fade-up" data-aos-duration="1200">
      <div className="welcome-section__row">
          <div className="welcome-section__info">
            <h1 className="welcome-section__title">
              Hi, I am Your Name A Product Designer based in City.
            </h1>
            <div className="welcome-section__desc">
              I help businesses and companies reach their goals by designing
              user-centric digital products & interactive experiences.
            </div>
            <Button />
            <div className="welcome-section__link">
                <a href="/"><span><ArrowIcon /></span>
                <span>Featured Work</span>                
                </a>
            </div>
                      
            
          </div>
          <div className="main-section__img">
            <img src={userPhoto} alt="designer"/>       
          </div>
      </div>
      
    </div>
    
  );
}

export default WelcomeSection;