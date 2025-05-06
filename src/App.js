import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Volunteering from './components/Volunteering';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/80 to-gray-900/80 backdrop-blur-sm" />
        <div className="relative z-10">
          <Hero />
          <About />
          <Volunteering />
          <Skills />
          <Timeline />
          <Projects />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
