// import React from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Folder from '@/app/components/Folder';
const About = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white dark:text-white mb-4">About Me</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="profile2.png"
                  alt="Profile"
                  className="lg:w-[20vw] w-48 mx-auto backdrop-blur-sm object-cover rounded-t-[500px] rounded-b-[5px] shadow-md  "
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white-900 dark:text-white mb-4">
                  Who is <span className='text-[#dadd1f]'>Sarguru</span>?
                </h2>
                <p className="text-gray-400 dark:text-gray-300 mb-4">
                  I am a passionate web developer who creates modern, responsive, and user-friendly websites, helping businesses grow their online presence.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    Problem Solver
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                    Team Player
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                    Continuous Learner
                  </span>
                </div>
                <div className="mt-[120px] bg-white/10 backdrop-blur-md rounded-lg p-4 text-gray-700 dark:text-gray-300">
                  <div className="flex flex-col gap-4">
                    <p className="flex-1">
                      <PhoneIcon className="w-5 h-5 inline mr-2 text-blue-600 dark:text-blue-400" />
                      <a
                        href="tel:+917010126911"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        +91 701 012 6911
                      </a>
                    </p>
                    <p className="flex-1">
                      <EnvelopeIcon className="w-5 h-5 inline mr-2 text-blue-600 dark:text-blue-400" />
                      <a
                        href="mailto:sargurudurai25@gmail.com"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        sargurudurai25@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
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