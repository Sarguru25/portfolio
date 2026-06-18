'use client'

import { useEffect, useState } from 'react'
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
import { IconCloudDemo } from './components/Demo'
import Testimonial from './pages/Testimonial'
import Case from './pages/Case'
export default function Home() {
  const [introVisible, setIntroVisible] = useState(true)
  const [mainVisible, setMainVisible] = useState(false)

  // intro → main animation sequence
  useEffect(() => {
    // Fade intro out
    const introTimer = setTimeout(() => {
      setIntroVisible(false)
    }, 4000)

    // Fade main in AFTER intro fade starts
    const mainTimer = setTimeout(() => {
      setMainVisible(true)
    }, 4000)

    return () => {
      clearTimeout(introTimer)
      clearTimeout(mainTimer)
    }
  }, [])

  // particles (start only after intro)
  useEffect(() => {
    if (typeof window === 'undefined' || introVisible) return

    let pJS

    const initParticles = () => {
      if (window.particlesJS) {
        pJS = window.particlesJS('particles-js', particlesConfig)
      }
    }

    const destroyParticles = () => {
      try {
        if (window.pJSDom && Array.isArray(window.pJSDom)) {
          window.pJSDom.forEach(instance => {
            instance?.destroy?.()
          })
          window.pJSDom = []
        }
      } catch (err) {
        console.error('Particles cleanup error:', err)
      }
    }

    if (window.particlesJS) {
      initParticles()
      return () => destroyParticles()
    }

    const script = document.createElement('script')
    script.src =
      'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js'
    script.async = true
    script.onload = initParticles
    document.body.appendChild(script)

    return () => {
      destroyParticles()
      script.parentNode?.removeChild(script)
    }
  }, [introVisible])

  return (
    <>
      {/* INTRO */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-transparent transition-opacity duration-300 ${introVisible
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
          }`}
      >
        <IconCloudDemo />
      </div>

      {/* MAIN APP */}
      <div
        className={`app-wrapper relative transition-opacity duration-700 ${mainVisible ? 'opacity-100' : 'opacity-0'
          }`}
      >
        {/* <div className="fixed inset-0 -z-10">
          <Noise /> 
        </div> */}

        <TargetCursor
          spinDuration={2}
          hideDefaultCursor
          parallaxOn
        />

        <div id="particles-js" className="-z-10" />

        <main className="app-content relative">
          <Navbar />
          <div className="pt-24 px-0">
            <Hero />
            <About />
            <Skills />
            <Case />
            <Projects />
            {/* <Testimonial /> */}
            <Contact />
            <Footer />
          </div>
        </main>
      </div>
    </>
  )
}
