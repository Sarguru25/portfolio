'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiDatabase, FiUsers, FiCrosshair, FiFileText } from 'react-icons/fi';

const caseStudies = [
  {
    icon: FiDatabase,
    tag: "BUSINESS AUTOMATION",
    title: "Quote Flow",
    problem: "Providing financial visibility across teams required purchasing additional Zoho Books user licenses, increasing operational cost and making access management difficult.",
    solution: "Built a custom web platform integrated with Zoho Books APIs to create a secure access layer, allowing teams to access only the required financial data.",
    technology: [
      "/skills/next.svg",
      "/skills/tailwind.svg",
      "/skills/typescript.svg",
      "/skills/mongodb.svg"
    ],
    outcome: "Reduced licensing dependency & improved accessibility",
    image: "/case/case-1.png"
  },
  {
    icon: FiUsers,
    tag: "INTERNAL PLATFORM",
    title: "People Track",
    problem: "Manual HR operations including attendance tracking, payroll processing, leave management, and employee workflows consumed time and introduced operational overhead.",
    solution: "Designed and developed a centralized HRMS platform to streamline employee operations and reduce dependency on external subscription tools.",
    technology: [
      "/skills/next.svg",
      "/skills/typescript.svg",
      "/skills/tailwind.svg",
      "/skills/mongodb.svg"
    ],
    outcome: "Centralized HR workflows & efficiency",
    image: "/case/case-2.png"
  },
  {
    icon: FiCrosshair,
    tag: "INTERACTIVE EXPERIENCE",
    title: "3D Product Visualization",
    problem: "Customers relied on repeated calls and additional photos because static product images could not accurately communicate product appearance and details.",
    solution: "Developed an immersive 3D web experience using Next.js and React Three Fiber, enabling customers to explore products interactively before making decisions.",
    technology: [
      "/skills/next.svg",
      "/skills/three.svg",
      "/skills/tailwind.svg",
      "/skills/typescript.svg"
    ],
    outcome: "Improved understanding & reduced inquiries",
    image: "/case/case-3.png"
  },
  {
    icon: FiFileText,
    tag: "WORKFLOW AUTOMATION",
    title: "Quotation Maker",
    problem: "Quotation preparation was handled manually, creating delays, repetitive work, and inconsistent document generation across the sales process.",
    solution: "Built an automated quotation generation system that creates professional quotations instantly through configurable business rules and workflows.",
    technology: [
      "/skills/next.svg",
      "/skills/tailwind.svg",
      "/skills/typescript.svg",
      "/skills/mongodb.svg"
    ],
    outcome: "Faster quotation creation & consistent process",
    image: "/case/case-4.png"
  }
];

const Case = () => {
  return (
    <section id="cases" className="main-card py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-16 md:text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest text-lime-400 uppercase mb-4"
          >
            Featured Work
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight"
          >
            Real problems. <br className="hidden lg:block" />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-lime-200 to-amber-200">Scalable solutions.</span>
          </motion.h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, delay: 0.2 }}
          className="flex flex-roe  flex-shrink-0 overflow-x-auto md:flex-row items-stretch gap-6 md:gap-6 h-auto md:h-[600px] w-full mt-10 mx-auto p-4 md:p-0"
        >
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="relative group flex-grow-1 flex-shrink-0 md:flex-shrink-1 transition-all w-full md:w-24 lg:w-32 h-[500px] md:h-full duration-700 hover:w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 "
            >
              <img
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                src={study.image}
                alt={study.title}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 md:via-black/40 to-transparent group-hover:via-black/80 transition-all duration-500"></div>

              {/* Default State Title (visible when collapsed on desktop) */}
              {/* <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="transform -rotate-90 text-xl font-bold tracking-widest text-white/50 uppercase whitespace-nowrap">
                  {study.title}
                </h3>
              </div> */}

              {/* Expanded Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-10 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">

                <div className="transform translate-y-4 md:translate-y-8 group-hover:translate-y-0 transition-all duration-500 flex flex-col gap-4 lg:gap-6 h-full justify-between">

                  {/* Header */}
                  <div className="flex items-center gap-4 pt-0 md:pt-6">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-lime-400 backdrop-blur-md border border-white/10 shrink-0">
                      <study.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] lg:text-xs text-amber-400 font-bold tracking-widest uppercase mb-1">{study.tag}</div>
                      <h1 className="text-2xl lg:text-4xl font-bold tracking-tight text-white">{study.title}</h1>
                    </div>
                  </div>

                  <div>
                    {/* Problem & Solution Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 opacity-100 py-4 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 md:delay-200">
                      <div>
                        <h5 className="text-[11px] font-bold text-lime-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span> Problem
                        </h5>
                        <p className="text-neutral-300 text-xs lg:text-sm leading-relaxed">{study.problem}</p>
                      </div>

                      <div>
                        <h5 className="text-[11px] font-bold text-lime-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span> Solution
                        </h5>
                        <p className="text-neutral-300 text-xs lg:text-sm leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Bottom Stats */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 py-4 border-t border-white/10 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 md:delay-300">

                      <div>
                        <h5 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2">Technology Used</h5>
                        <div className="flex gap-2 flex-wrap">
                          {study.technology?.map((techImg, i) => (
                            <div key={i} className="w-8 h-8 md:w-10 md:h-10 md:mx-2 rounded bg-gray-600 flex items-center justify-center p-1.5 border border-white/10 hover:bg-white/10 transition-colors">
                              <img src={techImg} alt="Tech" className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity" />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* <div className="bg-lime-400/10 border border-lime-400/20 rounded-lg px-4 py-2 w-full lg:w-auto mt-2 lg:mt-0">
                        <h5 className="text-[10px] font-bold text-lime-400/80 uppercase tracking-widest mb-0.5">Outcome</h5>
                        <p className="text-lime-50 text-xs lg:text-sm font-semibold">{study.outcome}</p>
                      </div> */}

                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Case;