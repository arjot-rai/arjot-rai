import React, { useState, useEffect } from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { ProfileSection } from './components/ProfileSection';
import { About } from './components/About';
import { Loading } from './components/Loading';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading && <Loading />}
      {!loading && (
        <div className="App">
          <Navigation />
          <ProfileSection />
          <About />
          <Experience />
          <Projects />
        </div>
      )}
    </div>
  );
}

export default App;
