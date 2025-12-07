
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <div id="about" className="main-card">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-lg  overflow-hidden">
          <div className="p-8">

            <div className="grid md:grid-cols-2 gap-7 items-center">
              <div>
                <img
                  src="profile3.jpg"
                  alt="Profile"
                  className="lg:w-[20vw] w-48 mx-auto backdrop-blur-sm object-cover rounded-[15px] shadow-md  "
                />
              </div>
              <div>
                <div className="text-center mb-8">
                  <h1 className="main-h1">About Me!</h1>
                </div>
                <h2 className="main-h2">
                  Who is <span className='main-h2-span'>Sarguru?</span>
                </h2>

                <p className=" text-gray-300 leading-8 tracking-wider">
                  Full Stack Developer skilled in React, Node.js, Next.js, Tailwind, and MongoDB.
                  Built projects including a MERN timetable app, resume builder, and 3D portfolio.
                  Seeking freelance work and full-time roles to grow and create impact.
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

                {/* <div className="mt-[50px] bg-white/10 backdrop-blur-md rounded-lg p-4 text-gray-700 dark:text-gray-300">
                  <div className="flex flex-col gap-4 ">
                    <p className="flex-1">
                      <PhoneIcon className="w-5 h-5 inline mr-2 text-slate-200 dark:text-blue-400" />
                      <a
                        href="tel:+917010126911"
                        className="text-slate-200 dark:text-blue-400 "
                      >
                      +91 701 012 6911
                      </a>
                      </p>
                      <p className="flex-1">
                      <EnvelopeIcon className="w-5 h-5 inline mr-2 text-slate-200 dark:text-blue-400" />
                      <a
                      href="mailto:sargurudurai25@gmail.com"
                        className="text-slate-200 dark:text-blue-400 hover:underline"
                      >
                      sargurudurai25@gmail.com
                      </a>
                      </p>
                      </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className="h-[60px] right-[50%] absolute ">
            <Folder size={1} color="#5227FF" className="custom-folder" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;