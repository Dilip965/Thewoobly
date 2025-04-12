import React from "react";
import ReactPlayer from "react-player";

const VideoBackgroundHero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <ReactPlayer
        url="https://www.youtube.com/watch?v=bFv0zgnVhY8"
        playing
        muted
        loop
        controls={false}
        width="100%"
        height="100%"
        config={{
          youtube: {
            playerVars: { modestbranding: 1, showinfo: 0 }
          }
        }}
        className="absolute top-0 left-0 object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gold-500 drop-shadow-lg">
          Experience the Future of Hospitality
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
          MyWoobly GENIE – The AI Butler for Ultra-Luxury Hotels & Restaurants
        </p>
        <button className="mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gold-400 transition-all duration-300">
          Discover the Experience
        </button>
      </div>
    </div>
  );
};

export default VideoBackgroundHero;
