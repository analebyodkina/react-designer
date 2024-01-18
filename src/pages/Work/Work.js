import ConclusionSection from "../../components/ConclusionSection/ConclusionSection";
import CovibeSection from "../../components/CovibeSection/CovibeSection";
import PrototypeSection from "../../components/PrototypeSection/PrototypeSection";
import SolutionsSection from "../../components/SolutionsSection/SolutionsSection";
import WorkPageMain from "../../components/WorkPageMain/WorkPageMain";


function Work() {
  return (
    <>
       <WorkPageMain />
       <CovibeSection />
       <PrototypeSection />
       <SolutionsSection />
       <ConclusionSection />
        
    </>
    
  );
}

export default Work;