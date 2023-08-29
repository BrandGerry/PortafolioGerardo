import ParticlesBackground from "./components/ParticlesBackground";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import SocialLinks from "./components/SocialLinks";
import GeneralFooter from "./components/GeneralFooter";
import AllProjectsPage from "./components/pages/AllProjectsPage";

function App() {
  return (
    <>
      <ParticlesBackground />
      <SocialLinks />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/projects" element={<AllProjectsPage />} />
      </Routes>

      <GeneralFooter />
    </>
  );
}

export default App;
