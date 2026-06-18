'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiGithub, FiExternalLink, FiChevronRight } from 'react-icons/fi';
import dynamic from 'next/dynamic';

// Dynamically import TargetCursor with SSR disabled
const TargetCursor = dynamic(
  () => import('../components/TargetCursor'),
  { ssr: false }
);

// Dynamically import Noise with SSR disabled
const Noise = dynamic(
  () => import('../components/Noise'),
  { ssr: false }
);

// Import your project data
const projects = [
  {
    title: 'Timetable Generator',
    desc: 'A timetable generator for schools and colleges using the MERN stack, with Python optimization algorithms for efficient scheduling.',
    img: '/projects/timetable.png',
    tags: ['React.js', 'MongoDB', 'Node.js', 'Express', 'Python'],
    features: [
      'Automated timetable generation using optimization algorithms',
      'User-friendly admin panel to manage classes, teachers, and rooms',
      // 'Dynamic timetable updates and conflict resolution',
      // 'Responsive interface for both students and faculty',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/Sarguru25/timetable',
  },
  {
    title: 'Portfolio Website',
    desc: 'A modern and responsive personal portfolio website developed using Next.js to showcase skills, projects, and contact information.',
    img: '/projects/portfolio.png',
    tags: ['Next.js', 'Particles.js', 'Tailwind CSS', 'Particles.js'],
    features: [
      'Responsive and mobile-first design',
      'Showcases personal projects and skills',
      'Contact form with email integration',
      'Fast loading and SEO optimized',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/Sarguru25/portfolio',
  },
  {
    title: 'Food Ordering App',
    desc: 'A full-stack food ordering application built with the MERN stack, featuring user authentication and cart functionality.',
    img: '/projects/food.png',
    tags: ['React.js', 'MongoDB', 'Express', 'Node.js'],
    features: [
      'User authentication and profile management',
      'Add, remove, and manage items in cart',
      'Order history and tracking',
      'Responsive UI for desktop and mobile',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/Sarguru25/food-order-app',
  },
  {
    title: 'Photographer Portfolio Website',
    desc: 'A responsive portfolio website designed for photographers, built using React.js to showcase photography work beautifully.',
    img: '/projects/photographer.png',
    tags: ['React.js', 'CSS',],
    features: [
      'Responsive gallery layout for showcasing photos',
      'Lightbox view for images',
      'Contact form for inquiries',
      'Smooth animations and transitions',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/Sarguru25/photographer-portfolio',
  },
  {
    title: 'Resume Builder',
    desc: 'A resume builder application built with the MERN stack and AI integration to generate professional resumes.',
    img: '/projects/resume.png',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Gemini API'],
    features: [
      'AI-powered resume content suggestions',
      'Multiple templates for resumes',
      'Save and download resumes as PDF',
      'User authentication and profile management',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/Sarguru25/resume',
  },
  {
    title: 'Access Control & Cost Optimization for Zoho Books',
    desc: 'A custom internal finance access platform integrated with Zoho Books APIs to reduce licensing costs and provide controlled financial visibility across teams.',

    img: '/case/case-1.png',

    tags: [
      'Next.js',
      'Zoho Books API',
      'RBAC',
      'Dashboard'
    ],

    features: [
      'Secure integration with Zoho Books APIs',
      'Role-based access control for employees',
      'Centralized finance dashboard',
      'Controlled financial data exposure',
      'Reduced dependency on additional Zoho Books licenses'
    ],

    liveUrl: '#',
    githubUrl: 'https://github.com/Sarguru25/Quotation',

  },

  {
    title: 'HRMS Platform',
    desc: 'A complete employee management and HRMS solution built to automate attendance, payroll, leave tracking, and internal employee workflows.',

    img: '/case/case-2.png',

    tags: [
      'Next.js',
      'MongoDB',
      'Node.js',
      'Automation'
    ],

    features: [
      'Employee check-in / check-out system',
      'Attendance tracking',
      'Payroll generation',
      'Automated payslip generation and email delivery',
      'Leave management workflow',
      'Employee dashboard and HR admin panel'
    ],

    liveUrl: '#',
    githubUrl: 'https://github.com/Sarguru25/Attendance',

  },

  {
    title: 'Interactive 3D Product Visualization',
    desc: 'An immersive 3D product visualization platform that allows customers to explore products interactively before making decisions.',

    img: '/case/case-3.png',

    tags: [
      'Next.js',
      'React Three Fiber',
      'Three.js',
      '3D Rendering'
    ],

    features: [
      'Realistic 3D product rendering',
      'Interactive rotate and zoom controls',
      'Responsive experience across devices',
      'Optimized asset loading',
      'Improved customer self-service experience'
    ],

    liveUrl: '#',
    githubUrl: 'https://github.com/Sarguru25/Acoustics-3D',

  },

  // {
  //   title: 'Automated Quotation Generation System',
  //   desc: 'A business workflow platform that automates quotation generation and standardizes quotation creation across teams.',

  //   img: '/case/case-4.png',

  //   tags: [
  //     'Next.js',
  //     'PDF Generation',
  //     'Workflow Automation',
  //     'Dashboard'
  //   ],

  //   features: [
  //     'Dynamic quotation generation',
  //     'Customer and product management',
  //     'Automated calculations',
  //     'Export and sharing workflows',
  //     'Admin management dashboard'
  //   ],

  //   liveUrl: '#',
  //   githubUrl: '#',

  // },
];


const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="  group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className=" relative h-48 overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className={`w-full h-full text-white object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'
            }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-6 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
          <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center">
              {project.title}
              <FiChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">{project.desc}</p>
          </div>
        </div>

        {/* Hover overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6 relative">
        <div className=" flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="cursor-target px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        <ul className="space-y-3 mb-6">
          {project.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start group/feature"
            >
              <div className="flex-shrink-0 w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/feature:bg-blue-500/30 transition-colors duration-300">
                <svg className="h-3 w-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-300 text-sm leading-relaxed group-hover/feature:text-gray-200 transition-colors duration-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between border-t border-gray-700/50 pt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target text-gray-400 hover:text-white transition-all duration-300 flex items-center group/github hover:bg-gray-700/50 px-3 py-2 rounded-lg"
          >
            <FiGithub className="mr-2 group-hover/github:scale-110 transition-transform duration-300" />
            <span className="group-hover/github:translate-x-1 transition-transform duration-300">Code</span>
          </a>
          {/* <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-target inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 group/live"
          >
            <span className="group-hover/live:translate-x-1 transition-transform duration-300">Live Demo</span>
            <FiExternalLink className="ml-2 group-hover/live:scale-110 transition-transform duration-300" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Extract all unique tags for filtering
  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags))];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Full-screen noise texture */}
      <div className="fixed inset-0 -z-10">
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div>

      {/* Target Cursor */}
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
            Featured Projects
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            My Projects
          </h1>
          {/* <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Here are some of my recent projects. Each one was built to solve real-world problems and improve my skills.
          </p>*/}
        </div>

        {/* Filter Tabs */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`cursor-target px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === tag
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700/50'
                }`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-lg mb-4">No projects found for this filter.</div>
            <button
              onClick={() => setActiveFilter('all')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
            >
              Show All Projects
            </button>
          </div>
        )}

        {/* Enhanced Back Button */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="cursor-target inline-flex items-center px-6 py-3 border border-gray-700 text-gray-300 hover:bg-gray-800 rounded-lg transition-all duration-300 hover:border-gray-600 hover:scale-105 group/back"
          >
            <span className="transform group-hover/back:-translate-x-1 transition-transform duration-300">←</span>
            <span className="ml-2 group-hover/back:translate-x-1 transition-transform duration-300">Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;