import React from 'react';
import backgroundImg from '../assets/IMG-20240824-WA0000.jpg';

export default function Hero() {
  return (
    <div id=''>
      <section className="relative bg-blueGray-50">
        <div className="relative pt-16 pb-12 flex content-center items-center justify-center min-h-screen-75">
          <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
            backgroundImage: `url(${backgroundImg})`
          }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-70 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-3 ml-auto mr-auto text-center">
                <div className="">
                  <h1 className="text-white font-semibold text-5xl">
                    Welcome to Tons Valley Education Trust.
                  </h1>
                  <p className="mt-4 text-lg" style={{ color: "#f1f1f1" }}>
                    Upliftment of the girl child &
                    Empowering children through education and uplifting communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0px)" }}>
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
              <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>
        <section className="pb-10 bg-blueGray-200 -mt-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Vision</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    To uplift the girl child from the poverty and illiteracy and create a confident and cheerful responsible citizen with values of patriotism, honesty and sincerity 
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blue-400 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-bullseye"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Mission</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Empowering through education to give them an opportunity to improve their future without prejudice or discrimination
                    {/* &
                    nurturing them into a good human being */}

                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-compass"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Approach</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      We focus on holistic development by integrating educational programs by ensuring Freedom of Speech, Thought and Action and living with Dignity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
