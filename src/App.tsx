import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
import HeroSection from './components/HeroSection';
import ContactSection from './components/ContactSection';
import ServicesSection from './components/ServicesSection';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <main>
        <AboutSection />
        <ProjectSection />
        <SkillsSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;