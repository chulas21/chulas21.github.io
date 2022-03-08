import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import CustomBackground from './components/CustomBackground';

import './App.css';

function App() {
  return (
    <div className="App">
      <CustomBackground />
      <AboutSection />
      <ServicesSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}

export default App;
