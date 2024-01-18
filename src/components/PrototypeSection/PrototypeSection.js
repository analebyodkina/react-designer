import "./PrototypeSection.scss";
import OfficeImg from "../../Assets/page2/page2-office.png";


function PrototypeSection() {  
  
  return (
    <div className="prototype">
      <div className="prototype__container container">
          <h3 className="page2-title">defining the problem</h3>
          <div className="prototype__desc">Designing a product that helps new startups setup their business in a coworking space with budget constraints.</div>
          <a href="/" className="page2-title prototype__problem">launch prototype</a>
      </div> 
          <div className="prototype__img" data-aos="fade-up" data-aos-duration="1500" >
            <img src={OfficeImg} alt="office" />
          </div>
    </div>  
    
    
  );
}

export default PrototypeSection;