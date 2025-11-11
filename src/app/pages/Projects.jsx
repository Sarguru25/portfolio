'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react'
// Image paths from public directory
const project1 = '/timetable.png';
const project2 = '/resume.png';
const project3 = '/portfolio.png';
const project4 = '/food.png';
const project5 = '/photographer.png';

import Link from 'next/link'

const cards = [
  {
    title: 'Timetable Generator',
    desc: 'MERN app with Python optimization',
    img: project1,
    tags: ['MERN', 'Python', 'Optimization'],
  },
  {
    title: 'Resume Builder',
    desc: 'Resume builder with MERN stack',
    img: project2,
    tags: ['React.js', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Portfolio Website',
    desc: 'Modern personal portfolio using Next.js',
    img: project3,
    tags: ['Next.js', 'React', 'Tailwind'],
  },
  {
    title: 'Food Ordering App',
    desc: 'Full-stack food ordering application',
    img: project4,
    tags: ['MERN', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Photographer Portfolio',
    desc: 'Responsive portfolio for photographers',
    img: project5,
    tags: ['React', 'CSS', 'Responsive Design'],
  },
]



const ProjectCard = React.memo(({ title, desc, img, tags, isDragging = false }) => (
  <div className={`cursor-target relative w-64 h-80 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md  overflow-hidden transition-all duration-300 hover:shadow-[0_40px_90px_rgba(0,0,0,0.55)] p-4 ${
    isDragging ? 'scale-105 rotate-0 shadow-2xl' : 'hover:scale-105'
  }`}>
    {/* Image with gradient overlay */}
    <div className="relative h-40 w-full overflow-hidden rounded-xl">
      <img 
        src={img} 
        alt={title} 
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/50" />
    </div>
    
    {/* Content */}
    <div className="pt-4">
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-white/70 mb-3 leading-relaxed">{desc}</p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="cursor-target px-2 py-1 text-xs bg-white/10 text-white/80 rounded-full border border-white/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
    
    {/* <button className={`absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg ring-1 ring-white/15 transition-all duration-300 ${
      isDragging ? 'scale-110' : 'hover:scale-110 hover:shadow-xl'
    }`}>
      <span className="text-xl leading-none">+</span>
    </button> */}
    
    {/* Hover effect layer */}
    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 to-purple-600/10 pointer-events-none" />
  </div>
))

const Projects = () => {
  const rem = 16
  const initialItems = [
    { cardIdx: 3, left: 0 * rem, top: 5 * rem, rotate: -6, z: 20 },
    { cardIdx: 1, left: 10 * rem, top: -0.5 * rem, rotate: -2, z: 30 },
    { cardIdx: 2, left: 20 * rem, top: 6 * rem, rotate: 2, z: 40 },
    { cardIdx: 0, left: 28 * rem, top: 2 * rem, rotate: -1, z: 25 },
    { cardIdx: 4, left: 40 * rem, top: 4 * rem, rotate: 5, z: 35 },
  ]

  const containerRef = useRef(null)
  const [items, setItems] = useState(initialItems.map((it) => ({ ...it, dx: 0, dy: 0 })))
  const [maxZ, setMaxZ] = useState(Math.max(...initialItems.map((i) => i.z)))
  const [offsetX, setOffsetX] = useState(0)
  const [activeCard, setActiveCard] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Recalculate layout
  const recalc = useCallback(() => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const cardW = 16 * rem
    const minLeft = Math.min(...initialItems.map((i) => i.left))
    const maxRight = Math.max(...initialItems.map((i) => i.left + cardW))
    const deckWidth = maxRight - minLeft
    const next = (rect.width - deckWidth) / 2 - minLeft
    setOffsetX(next)
  }, [])

  useEffect(() => {
    recalc()
    window.addEventListener('resize', recalc)
    return () => window.removeEventListener('resize', recalc)
  }, [recalc])

  const onPointerDown = useCallback((i) => (e) => {
    e.preventDefault()
    const container = containerRef.current
    if (!container) return
    
    setActiveCard(i)
    
    const rect = container.getBoundingClientRect()
    const startX = e.clientX
    const startY = e.clientY
    const it = items[i]
    const grabOffsetX = startX - (rect.left + offsetX + it.left + it.dx)
    const grabOffsetY = startY - (rect.top + it.top + it.dy)

    // Bring dragged card to front
    setItems((prev) => prev.map((p, idx) => 
      idx === i ? { ...p, z: maxZ + 1, rotate: 0 } : p
    ))
    setMaxZ((z) => z + 1)

    const onMove = (ev) => {
      const x = ev.clientX - rect.left - grabOffsetX
      const y = ev.clientY - rect.top - grabOffsetY
      setItems((prev) =>
        prev.map((p, idx) => 
          idx === i ? { ...p, dx: x - (offsetX + p.left), dy: y - p.top } : p
        )
      )
    }

    const onUp = () => {
      setActiveCard(null)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }, [items, offsetX, maxZ])

  const resetLayout = useCallback(() => {
    setItems(initialItems.map((it) => ({ ...it, dx: 0, dy: 0 })))
  }, [])

  return (
    <section id="projects" className="main-card">
      <div
        className="relative mx-auto w-full rounded-3xl px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20"
        // style={{
        //   backgroundImage:
        //     'radial-gradient(1200px 800px at 10% 10%, rgba(125, 58, 180, 0.35), transparent 60%), radial-gradient(900px 600px at 85% 20%, rgba(6, 40, 90, 0.45), transparent 65%), linear-gradient(180deg, rgba(18,16,34,0.9), rgba(9,12,23,0.95))',
        // }}
      >
        {/* Animated background pattern */}
        <div
          className="pointer-events-none absolute inset-10 rounded-3xl opacity-50"
          // style={{
          //   backgroundImage:
          //     'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          //   backgroundSize: '24px 24px, 24px 24px',
          //   animation: 'backgroundShift 20s linear infinite',
          // }}
        />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
              <h1 className="main-h1">My Projects!</h1>

                <h2 className="main-h2">
                  Let’s Have a Look at <span className='main-h2-span'>My Few Projects</span>
                </h2>
            
            {/* Reset Layout Button - Desktop only */}
            {!isMobile && (
              <button
                onClick={resetLayout}
                className="cursor-target mt-6 px-6 py-2 text-sm text-white/80 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Reset Layout
              </button>
            )}
          </div>

          {/* Desktop Project Cards Container */}
          <div 
            className="hidden h-[500px] md:block relative flex items-center justify-center" 
            ref={containerRef} 
            style={{ touchAction: 'none' }}
          >
            {items.map((it, i) => (
              <div
                key={i}
                className="absolute transition-transform duration-300 ease-out"
                style={{
                  left: offsetX + it.left + it.dx,
                  top: it.top + it.dy,
                  zIndex: it.z,
                  transform: `rotate(${it.rotate}deg)`,
                }}
                onPointerDown={onPointerDown(i)}
              >
                <div className="cursor-grab active:cursor-grabbing transition-transform duration-200">
                  <ProjectCard 
                    {...cards[it.cardIdx]} 
                    isDragging={activeCard === i}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile & Tablet Carousel */}
          <div className="md:hidden">
            <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 px-4 scrollbar-hide">
              {cards.map((card, i) => (
                <div key={i} className="snap-center shrink-0 first:ml-4 last:mr-4">
                  <ProjectCard {...card} />
                </div>
              ))}
            </div>
            
            {/* Carousel Indicators */}
            {/* <div className="flex justify-center gap-2 mt-6">
              {cards.map((_, i) => (
                <div 
                  key={i}
                  className="w-2 h-2 rounded-full bg-white/30 transition-all duration-300"
                />
              ))}
            </div> */}
          </div>

          {/* CTA Section */}
          <div className="text-">
            <button className="cursor-target px-8 py-3 bg-gradient-to-r from-lime-100 to-lime-300  text-gray-900 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xlfont-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 transform">
              <Link href="/projects">View All Projects</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Add CSS animation for background */}
      <style jsx>{`
        @keyframes backgroundShift {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 24px 24px, 24px 24px; }
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default Projects