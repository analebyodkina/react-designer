import "./WorkSection.scss";
import WorkImage1 from "../../Assets/work-img1.png";
import WorkImage1webp from "../../Assets/work-img1.webp";
import WorkImage2 from "../../Assets/work-img2.png";
import WorkImage2webp from "../../Assets/work-img2.webp"
import WorkImage3 from "../../Assets/work-img3.png";
import WorkImage3webp from "../../Assets/work-img3.webp"
import WorkImage4 from "../../Assets/work-img4.png";
import WorkImage4webp from "../../Assets/work-img4.webp"

function WorkSection() {  
  
  return (
    <div className="work container"> 
    {/* <a name="down"></a>	     			 */}
			<div className="work__row row" id="works">
      					
          <div className="row-card" data-aos="zoom-in-up" data-aos-duration="1300">               
              <picture>
                <source srcSet={WorkImage1webp} type="image/webp" width={612} height={888}/>                
                <img src={WorkImage1} alt="work example" fetchpriority="low" loading="lazy" width={612} height={888}/>   
              </picture>
              <span>InVersion</span>
					</div>
          <div className="row-card" data-aos="zoom-in-left" data-aos-duration="1400">
          <picture>
                <source srcSet={WorkImage2webp} type="image/webp" width={612} height={888}/>                
                <img src={WorkImage2} alt="work example" fetchpriority="low" loading="lazy" width={612} height={888}/>   
              </picture>
            <span>InVersion</span>						
					</div>
          <div className="row-card" data-aos="zoom-in-up" data-aos-duration="1300">
          <picture>
                <source srcSet={WorkImage3webp} type="image/webp" width={612} height={888}/>                
                <img src={WorkImage3} alt="work example" fetchpriority="low" loading="lazy" width={612} height={888}/>   
              </picture>	
            <span>InVersion</span>					
					</div>
          <div className="row-card" data-aos="zoom-in-left" data-aos-duration="1400">
          <picture>
                <source srcSet={WorkImage4webp} type="image/webp" width={612} height={888}/>                
                <img src={WorkImage4} alt="work example" fetchpriority="low" loading="lazy" width={612} height={888}/>   
              </picture>
            <span>InVersion</span>						
					</div>

      </div>
    </div>
    
  );
}

export default WorkSection;



