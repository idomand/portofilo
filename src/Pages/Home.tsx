import Header from "../Components/Header";
import AboutMe from "../Components/AboutMe";
import ProjectsSection from "../Components/ProjectsSection";
import { MainWrapper } from "../Components/common/Container";

export default function Home() {
  return (
    <MainWrapper>
      <Header />
      <AboutMe />
      <ProjectsSection />
    </MainWrapper>
  );
}
