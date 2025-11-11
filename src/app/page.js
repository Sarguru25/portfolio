'use client'

import { useEffect, useState } from 'react'
import { FaHome, FaUser, FaCog, FaMoon, FaSun } from 'react-icons/fa';
import particlesConfig from './particles-config'
import TargetCursor from './components/TargetCursor'
import Noise from './components/Noise'
import Navbar from './components/Navbar'
import Dock from './components/Dock'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

export default function Home() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let pJS;

    const initParticles = () => {
      if (window.particlesJS) {
        pJS = window.particlesJS('particles-js', particlesConfig);
      }
    };

    const destroyParticles = () => {
      try {
        if (window.pJSDom && Array.isArray(window.pJSDom)) {
          window.pJSDom.forEach(instance => {
            if (instance && typeof instance.destroy === 'function') {
              instance.destroy();
            }
          });
          window.pJSDom = [];
        }
      } catch (error) {
        console.error('Error cleaning up particles:', error);
      }
    };

    if (window.particlesJS) {
      initParticles()
      return () => destroyParticles()
    }

    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js'
    script.async = true
    script.onload = initParticles
    document.body.appendChild(script)

    return () => {
      destroyParticles()
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const items = [
    { 
      icon: <FaHome size={18} />, 
      label: 'Home', 
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) 
    },
    { 
      icon: isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />, 
      label: isDarkMode ? 'Light Mode' : 'Dark Mode', 
      onClick: toggleDarkMode 
    },
    { 
      icon: <FaUser size={18} />, 
      label: 'Profile', 
      onClick: () => {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
      } 
    },
    { 
      icon: <FaCog size={18} />, 
      label: 'Settings', 
      onClick: () => alert('Settings coming soon!') 
    },
  ];

  return (
    <div className="app-wrapper relative">
      <div className="fixed inset-0 -z-10">
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div>

      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <div id="particles-js" className="-z-10" />
      <main className="app-content relative">
        <Navbar />
        <div className="pt-24 px-0">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Dock
            items={items}
            panelHeight={60}
            baseItemSize={50}
            magnification={60}
            orientation="vertical"
            className="right-4"
          />
          <Contact />
          <Footer />


        </div>
      </main>
    </div>
  )
}
