import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'HTML', icon: '/html.svg' },
  { name: 'CSS', icon: '/css.svg' },
  { name: 'JavaScript', icon: '/javascript.svg' },
  { name: 'React', icon: '/react.svg' },
  { name: 'Tailwind CSS', icon: '/tailwind.svg' },
  { name: 'Figma', icon: '/figma.svg' },
  { name: 'Node.js', icon: '/node.svg' },
  { name: 'Express', icon: '/express.svg', invert: true },
  { name: 'MongoDB', icon: '/mongodb.svg' },
  { name: 'Git', icon: '/git.svg' },
  { name: 'GitHub', icon: '/github.svg', invert: true },
  { name: 'Material-UI', icon: '/mui.svg' },
  { name: 'Postman', icon: '/postman.svg' },
  { name: 'Next.js', icon: '/next.svg' },
];

const Skills = () => {
  const cardsRef = useRef([]);

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.set('.skills-grid', { perspective: 1000 });

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40, z: -120 },
      {
        opacity: 1,
        y: 0,
        z: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: { each: 0.07, grid: 'auto', from: 'start' },
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 80%',
          once: true,
        },
      }
    );
  });

  return () => ctx.revert();
}, []);


  return (
    <section id="skills" className="main-card">
      <div className="max-w-6xl mx-auto">
        <h1 className="main-h1">My Skills!</h1>

        <h2 className="main-h2">
          Language and Tool That <span className="main-h2-span">Power My Work</span>
        </h2>

        <div className="skills-grid flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-[1600px] mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="cursor-target w-20 h-20 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-white/5 backdrop-blur-md rounded-lg shadow-xl flex flex-col items-center justify-center"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className={`w-8 h-8 sm:w-14 sm:h-14 md:w-16 md:h-16 ${
                  skill.invert ? 'invert' : ''
                }`}
              />
              <p className="mt-2 text-xs sm:text-sm text-white">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
