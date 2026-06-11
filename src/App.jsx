import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Starfield from './fx/Starfield';
import SplashScreen from './fx/SplashScreen';
import ScreenWipe from './fx/ScreenWipe';

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="app-root">
      <Starfield />
      {booted ? (
        <div className="site crt-power-on">
          <NavBar />
          <main className="page-viewport">
            <Routes>
              <Route path="/" element={<Bio />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <ScreenWipe />
        </div>
      ) : (
        <SplashScreen onDone={() => setBooted(true)} />
      )}
      <div className="crt-overlay" aria-hidden="true" />
    </div>
  );
}

export default App;
