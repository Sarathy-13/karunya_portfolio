import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './pages/Hero';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Training from './pages/Training';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Education />
              <Skills />
              <Projects />
              <Training />
              <Certifications />
              <Contact />
            </>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
