
import "./ExplorationsSection.scss";
import ExploreImage1 from "../../Assets/explore-img1.png";
import ExploreImage1webp from "../../Assets/explore-img1.webp";
import ExploreImage2 from "../../Assets/explore-img2.png";
import ExploreImage2webp from "../../Assets/explore-img2.webp";
import ExploreImage3 from "../../Assets/explore-img3.png";
import ExploreImage3webp from "../../Assets/explore-img3.webp";
import ExploreImage4 from "../../Assets/explore-img4.png";
import ExploreImage4webp from "../../Assets/explore-img4.webp";
import ExploreImage5 from "../../Assets/explore-img5.png";
import ExploreImage5webp from "../../Assets/explore-img5.webp";
import ExploreImage6 from "../../Assets/explore-img6.png";
import ExploreImage6webp from "../../Assets/explore-img6.webp";



export default function ExplorationsSection() {
   
    return (
        <div className="explore container">
            <h2 className="title explore__title">Visual Explorations</h2>
            <div className="explore__row">					
                    <div className="row-card" data-aos="flip-right" data-aos-duration="1200">                         
                        <picture>
                            <source srcSet={ExploreImage1webp} type="image/webp" width={400} height={400}/> 
                            <source srcSet={ExploreImage1} type="image/png" width={400} height={400}/>              
                            <img src={ExploreImage1} alt="work example" width={400} height={408}/>   
                        </picture>                     
                    </div>
                    <div className="row-card" data-aos="flip-down" data-aos-duration="1300">                         
                        <picture>
                            <source srcSet={ExploreImage2webp} type="image/webp" width={400} height={400}/>                
                            <img src={ExploreImage2} alt="work example" width={400} height={408}/>   
                        </picture>                   
                    </div>
                    <div className="row-card" data-aos="flip-left" data-aos-duration="1200">                        
                        <picture>
                            <source srcSet={ExploreImage3webp} type="image/webp" width={400} height={400}/>                
                            <img src={ExploreImage3} alt="work example" width={400} height={408}/>   
                        </picture>                    
                    </div>
                    <div className="row-card" data-aos="flip-right" data-aos-duration="1200">                         
                        <picture>
                            <source srcSet={ExploreImage4webp} type="image/webp" width={400} height={400}/>                
                            <img src={ExploreImage4} alt="work example" width={400} height={408}/>   
                        </picture>                   
                    </div>
                    <div className="row-card" data-aos="flip-down" data-aos-duration="1300">                        
                        <picture>
                            <source srcSet={ExploreImage5webp} type="image/webp" width={400} height={400}/>                
                            <img src={ExploreImage5} alt="work example" width={400} height={408}/>   
                        </picture>                     
                    </div>
                    <div className="row-card" data-aos="flip-left" data-aos-duration="1200">
                        <picture>
                            <source srcSet={ExploreImage6webp} type="image/webp" width={400} height={400}/>                
                            <img src={ExploreImage6} alt="work example" width={400} height={408}/>   
                        </picture>                     
                    </div>
            </div>         
        </div>      
    );
  }