import React from "react";


export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`lux-card shadow-xl rounded-2xl border border-gold-glow bg-black bg-opacity-40 backdrop-blur-md p-6 transition-all duration-300 hover:scale-[1.02] ${className}`}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }) => {
  return (
    <div className={`lux-card-content text-white text-lg ${className}`}>
      {children}
    </div>
  );
};
