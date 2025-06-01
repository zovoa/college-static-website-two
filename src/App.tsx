import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Courses from './components/sections/Courses';
import News from './components/sections/News';
import Schedule from './components/sections/Schedule';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  // Reveal animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

 
return (
  <BrowserRouter basename="/college-static-website-two">
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <News />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);
}

export default App;