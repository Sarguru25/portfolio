import React from 'react';

// Image paths from public directory
const html = '/html.svg';
const css = '/css.svg';
const javascript = '/javascript.svg';
const react = '/react.svg';
const tailwind = '/tailwind.svg';
const node = '/node.svg';
const express = '/express.svg';
const mongodb = '/mongodb.svg';
const git = '/git.svg';
const github = '/github.svg';
const mui = '/mui.svg';
const postman = '/postman.svg';
const next = '/next.svg';

const skills = [
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'JavaScript', icon: javascript },
  { name: 'React', icon: react },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'Node.js', icon: node },
  { name: 'Express', icon: express, invert: true },
  { name: 'MongoDB', icon: mongodb },
  { name: 'Git', icon: git },
  { name: 'GitHub', icon: github, invert: true },
  { name: 'Material-UI', icon: mui },
  { name: 'Postman', icon: postman },
  { name: 'Next.js', icon: next },
];

const Skills = () => {
  return (
    <section id="skills" className="main-card">
      <div className="max-w-6xl mx-auto">
              <h1 className="text-sm uppercase tracking-[0.4em] text-neutral-400 mb-6">My Skills!</h1>

                <h2 className="text-4xl font-semibold text-white sm:text-4xl mb-10">
                  Language and Tool That  <span className='text-transparent pr-2 bg-clip-text bg-linear-to-r from-lime-300 via-lime-200 to-amber-300 lg:text-5xl italic'>Power My Work</span>
                </h2>

        <div className="flex flex-wrap justify-center gap-8 px-5 w-full max-w-[1600px] mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="cursor-target w-20 h-20 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-white/5 backdrop-blur-md mb-3 rounded-[8px] shadow-xl flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className={`w-8 h-8  sm:w-14 sm:h-14 md:w-16 md:h-16 transition-transform duration-300 hover:scale-110 ${
                  skill.invert ? 'invert' : ''
                }`}
              />
              <p className="mt-2 text-[9.5px] sm:text-sm md:text-base font-medium text-center text-white">
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
