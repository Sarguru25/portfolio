"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Testimonial = () => {
  const containerRef = useRef(null);

  const testimonials = [
    {
      name: "Arun Kumar",
      role: "Frontend Peer",
      feedback:
        "Sarguru showed incredible consistency during the 30-day challenge.",
    },
    {
      name: "Vignesh",
      role: "Mentor",
      feedback:
        "Strong dedication and fast learning ability. Great improvement.",
    },
    {
      name: "Rahul",
      role: "Student",
      feedback:
        "His responsiveness and UI thinking really stood out.",
    },
    {
      name: "Karthik",
      role: "Peer",
      feedback:
        "Very consistent and focused throughout the challenge.",
    },
    {
      name: "Dinesh",
      role: "Frontend Learner",
      feedback:
        "Clean UI and good problem-solving approach.",
    },
  ];

  const transformStyles = [
    "rotate(5deg) translate(-170px)",
    "rotate(0deg) translate(-80px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(80px)",
    "rotate(-5deg) translate(170px)",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".card",
        { scale: 0 },
        {
          scale: 1,
          stagger: 0.2,
          ease: "elastic.out(1, 0.5)",
          delay: 0.5,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const getNoRotationTransform = (transformStr) => {
    return transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)");
  };

  const getPushedTransform = (baseTransform, offsetX) => {
    const match = baseTransform.match(/translate\(([-0-9.]+)px\)/);
    if (match) {
      const newX = parseFloat(match[1]) + offsetX;
      return baseTransform.replace(
        /translate\(([-0-9.]+)px\)/,
        `translate(${newX}px)`
      );
    }
    return `${baseTransform} translate(${offsetX}px)`;
  };

  const pushSiblings = (hoveredIdx) => {
    const q = gsap.utils.selector(containerRef);

    testimonials.forEach((_, i) => {
      const el = q(`.card-${i}`);
      const base = transformStyles[i];

      if (i === hoveredIdx) {
        gsap.to(el, {
          transform: getNoRotationTransform(base),
          duration: 0.4,
          ease: "back.out(1.4)",
        });
      } else {
        const offsetX = i < hoveredIdx ? -160 : 160;

        gsap.to(el, {
          transform: getPushedTransform(base, offsetX),
          duration: 0.4,
          ease: "back.out(1.4)",
        });
      }
    });
  };

  const resetSiblings = () => {
    const q = gsap.utils.selector(containerRef);

    testimonials.forEach((_, i) => {
      gsap.to(q(`.card-${i}`), {
        transform: transformStyles[i],
        duration: 0.4,
        ease: "back.out(1.4)",
      });
    });
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-transparent text-white">
      
      {/* Title */}
        <h1 className="main-h1">Testimonials</h1>

        <h2 className="main-h2">
          What People Say About{" "}
          <span className="main-h2-span">My Work</span>
        </h2>

      {/* Cards */}
      <div
        ref={containerRef}
        className="relative flex items-center justify-center"
        style={{ width: 600, height: 300 }}
      >
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className={`card card-${idx} absolute w-[300px] h-[220px] rounded-2xl border border-white/20 overflow-hidden hover:z-10 `}
            style={{
              transform: transformStyles[idx],
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
            onMouseEnter={() => pushSiblings(idx)}
            onMouseLeave={resetSiblings}
          >
            <div className="w-full h-full p-4 flex flex-col justify-between bg-white/10 backdrop-blur-lg">
              
              {/* Stars */}
              <div className="text-yellow-400 text-sm">★★★★★</div>

              {/* Feedback */}
              <p className="text-sm leading-relaxed text-gray-200">
                “{t.feedback}”
              </p>

              {/* User */}
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <span className="text-xs text-gray-400">{t.role}</span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;