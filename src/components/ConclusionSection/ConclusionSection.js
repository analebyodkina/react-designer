import React,{useEffect} from "react";
import "./ConclusionSection.scss";
import ConclusionImg from "../../Assets/page2/page2-finalImg.png";


import AOS from 'aos';
import 'aos/dist/aos.css';


function ConclusionSection() {  
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className="conclusion container">
        <h2 className="page2-title ">Conclusion</h2>
        <div className="conclusion__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae aenean aliquet pellentesque lectus. Libero convallis velit, morbi nullam pellentesque quis. Massa nascetur in commodo posuere porttitor.</div>
        <div className="conclusion__img" data-aos="zoom-in" data-aos-duration="1000" delay="150">
            <img src={ConclusionImg} alt="final bg" />
        </div>
        <div className="conclusion__link">
            <a href="/">Next Case</a>
        </div>
        		
	</div>    
    
  );
}

export default ConclusionSection;