'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { FaFilePdf, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';


const LaptopModel = dynamic(
  () => import('../components/LaptopModel'),
  { ssr: false }
);

const Hero = () => {
  return (
    <section
      id="hero"
      className="main-card flex items-center justify-center  w-full"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center gap-3 text-neutral-200 max-w-3xl mx-auto">
            <span className="main-h1">Hello There!</span>
            <h1 className="main-h2">
              I'm <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-lime-200 to-amber-300 lg:text-6xl">Sarguru</span>
            </h1>
            <p className=" text-neutral-300 sm:text-xl -mt-8 mb-8">Full Stack Developer</p>
          </div>
          <div className="pt-8 w-full">
            <h3 className="text-2xl font-semibold text-white mb-6">Follow Me</h3>
            <div className="flex justify-center flex-wrap gap-4">
              <a
                href="https://github.com/Sarguru25"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 flex-shrink-0"
              >
                <FaGithub className="w-7 h-7" />
              </a>
              <a
                href="https://linkedin.com/in/sarguru25"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 flex-shrink-0"
              >
                <FaLinkedin className="w-7 h-7" />
              </a>    
              <a
                href="https://www.instagram.com/_sarguru._/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 flex-shrink-0"
              >
                <FaInstagram className="w-7 h-7" />
              </a>
              <a
                href="https://wa.me/7010126911"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 flex-shrink-0"
              >
                <FaWhatsapp className="w-7 h-7" />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 mt-8">
            <a
              href="/resume.pdf"
              download="Sarguru_Resume.pdf"
              className="cursor-target group flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-base font-semibold text-white shadow-[0_15px_30px_rgba(0,0,0,0.35)] transition hover:bg-neutral-800"
            >
              Resume
              <span className="grid h-6 w-6 place-items-center rounded-full bg-linear-to-r from-amber-300 to-lime-300 text-neutral-900 transition group-hover:scale-110">
                <FaFilePdf />
              </span>
            </a>

            <a
              href="#contact"
              className="cursor-target rounded-full border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Right side - 3D Model */}
        {/* <div className=" w-[1000px] h-[400px] md:h-[500px]">
          <LaptopModel />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;