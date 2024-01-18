import ContactSection from "../../components/ContactSection/ContactSection";
import ExplorationsSection from "../../components/ExplorationsSection/ExplorationsSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import WorkSection from "../../components/WorkSection/WorkSection";

function Home() {
  return (
    <>
        <WelcomeSection />
        <WorkSection />
        <ExplorationsSection />
        <ProjectsSection />
        <ContactSection />
    </>
    
  );
}

export default Home;