import './App.css';
import AboutSection from './components/pages/AboutSection';
import ContactSection from './components/pages/ContactSection';
import Navbar from './components/pages/Navbar';
import PerformanceSection from './components/pages/PerformanceSection';
import PropertiesSection from './components/pages/PropertiesSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AboutSection/>
      <PropertiesSection/>
      <PerformanceSection/>
      <ContactSection/>
    </div>
  );
}

export default App;
