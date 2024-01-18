import "./CovibeSection.scss";

export default function CovibeSection() {  
  
  return (
    <div className="covibe container">  
        
          <h3 className="page2-title">Covibe</h3>
          <div className="covibe__desc">Co-working spaces for tech startups</div>
          <div className="covibe__items items">
            <div className="covibe__card">
                <h3 className="page2-title">Client</h3>
                <div className="items__desc">Covibe</div>
            </div>
            <div className="covibe__card" >
                <h3  className="page2-title">Role</h3>
                <div className="items__desc">Product Designer</div>
            </div>
            <div className="covibe__card">
                <h3  className="page2-title">Industry</h3>
                <div className="items__desc">Co-working</div>
            </div>
            <div className="covibe__card">
                <h3 className="page2-title">Duration</h3>
                <div className="items__desc">2 Months</div>
            </div>
          </div>

    </div>
    
  );
}
