import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'HTML', icon: '/skills/html.svg' },
  { name: 'CSS', icon: '/skills/css.svg' },
  { name: 'JavaScript', icon: '/skills/javascript.svg' },
  { name: 'React', icon: '/skills/react.svg' },
  { name: 'Tailwind CSS', icon: '/skills/tailwind.svg' },
  { name: 'Figma', icon: '/skills/figma.svg' },
  { name: 'Node.js', icon: '/skills/node.svg' },
  { name: 'Express', icon: '/skills/express.svg', invert: true },
  { name: 'MongoDB', icon: '/skills/mongodb.svg' },
  { name: 'Git', icon: '/skills/git.svg' },
  { name: 'GitHub', icon: '/skills/github.svg', invert: true },
  { name: 'Material-UI', icon: '/skills/mui.svg' },
  { name: 'Postman', icon: '/skills/postman.svg' },
  { name: 'Next.js', icon: '/skills/next.svg' },
  { name: 'Typescript', icon: '/skills/typescript.svg' },
  { name: 'Three.js', icon: '/skills/three.svg'  },
  { name: 'PostgreSQL', icon: '/skills/postgresql.svg' },
  { name: 'prisma', icon: '/skills/prisma.svg'},
  // { name: 'Fastify', icon: '/skills/fastify2.svg' , invert: true},
  // { name: 'NestJS', icon: '/skills/nestjs.svg'},
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
                className={`w-8 h-8 sm:w-14 sm:h-14 md:w-16 md:h-16 ${skill.invert ? 'invert' : ''
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
