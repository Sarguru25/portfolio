import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(aboutRef.current, { perspective: 1000 });

      gsap.fromTo(
        itemsRef.current,
        {
          opacity: 0,
          y: 40,
          z: -100,
        },
        {
          opacity: 1,
          y: 0,
          z: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="about" className="main-card" ref={aboutRef}>
      <div className="max-w-6xl mx-auto">
        <div className="rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-7 items-center">
              
              {/* Image */}
              <div ref={(el) => (itemsRef.current[0] = el)}>
                <img
                  src="profile3.jpg"
                  alt="Profile"
                  className="lg:w-[20vw] w-48 mx-auto backdrop-blur-sm object-cover rounded-[15px] shadow-md"
                />
              </div>

              {/* Content */}
              <div ref={(el) => (itemsRef.current[1] = el)}>
                <div className="text-center mb-8">
                  <h1 className="main-h1">About Me!</h1>
                </div>

                <h2 className="main-h2">
                  Who is <span className="main-h2-span">Sarguru?</span>
                </h2>

                {/* <p className="text-gray-300 leading-8 tracking-wider">
                  Full Stack Developer skilled in React, Node.js, Next.js, Tailwind, and MongoDB.
                  Built projects including a MERN timetable app, resume builder, and 3D portfolio.
                  Seeking freelance work and full-time roles to grow and create impact.
                </p> */}
                 <p className="text-gray-300 leading-8 tracking-wider">
                  Full Stack Developer skilled in React, Node.js, Next.js, Tailwind, and MongoDB. Passionate about building modern web applications, solving real-world problems, and creating clean user experiences. Open to freelance opportunities and full-time roles to learn, grow, and make an impact.

                </p>

                <div className="flex flex-wrap justify-center mt-8 gap-4">
                  <span className="cursor-target px-3.5 py-1.5 bg-gray-800 text-white border border-white/30 rounded-full text-sm">
                    Problem Solver
                  </span>
                  <span className="cursor-target px-3.5 py-1.5 bg-gray-800 text-white border border-white/30 rounded-full text-sm">
                    Team Player
                  </span>
                  <span className="cursor-target px-3.5 py-1.5 bg-gray-800 text-white border border-white/30 rounded-full text-sm">
                    Continuous Learner
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
