'use client'

import { useEffect } from 'react'
import particlesConfig from './particles-config'
import TargetCursor from './components/TargetCursor'
import Noise from './components/Noise'
import Navbar from './components/Navbar'
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

  return (
    <div className="app-wrapper relative">

      <div className="fixed inset-0 -z-10">
        {/* <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
          /> */}
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
          <Contact />
          <Footer />
        </div>

      </main>
    </div>
  )
}
