import React from "react";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className="bg-blue-50 min-h-screen w-full font-stacksans flex justify-center items-center px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      <div className=" flex flex-col gap-4 justify-center items-center text-center">
        {/* Main title */}
        <div
          className="mb-4 font-light 
            bg-gradient-to-r from-blue-500 to-purple-500 
            bg-clip-text text-transparent
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
        >
          yanatrip
        </div>

        <div
          className="font-thin text-gray-400 mt-8
            text-2xl sm:text-1xl md:text-2xl lg:text-4xl xl:text-6xl"
        >
          <ReactTyped
            strings={[
              "Go Where Your Heart Feels Alive",
              "Collect Moments, Not Things",
              "Every Trip Tells a Story",
              "The World Is Waiting for You",
              "Find Yourself in New Places",
            ]}
            typeSpeed={80}
            backSpeed={50}
            backDelay={1200}
            loop
          />
        </div>

        {/* Subtitle */}
        <div
          className="font-extrabold
            text-4xl sm:text-4xl md:text-8xl lg:text-9xl"
        >
          Travel Redefined
        </div>

        {/* Coming soon */}
        <div
          className="text-zinc-600 font-thin 
            text-lg sm:text-xl md:text-2xl lg:text-3xl"
        >
          Live soon
        </div>
      </div>
    </div>
  );
};

export default Home;
