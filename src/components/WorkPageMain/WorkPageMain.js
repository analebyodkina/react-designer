import "./WorkPageMain.scss";
import page2Bg from "../../Assets/page2/page2-bg.png";


function WorkPageMain() {  
  
  return (
    <div className="WorkPageMain" 
      data-aos="fade-up"     
        data-aos-duration="1500"         
    >      
      <img src={page2Bg} alt="bg" />
    </div>
    
  );
}

export default WorkPageMain;