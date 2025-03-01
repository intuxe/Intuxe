"use client";
import React, { useState, useEffect } from 'react';

const IndigmaContent: React.FC = () => {
  const [visibility, setVisibility] = useState<number>(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newVisibility = Math.max(1 - scrollY / window.innerHeight, 0);
      setVisibility(newVisibility);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed w-full h-screen flex items-center justify-center"
      style={{ opacity: visibility }}
    >
      <div
        className="w-96 h-96 bg-black rounded-full flex items-center justify-center"
        style={{
          background: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
        }}
      >
        <div className="text-white text-center drop-shadow-lg">
          <h1 className="text-6xl font-bold">Intuxe</h1>
          <p className="text-lg mt-2">I hold back sometimes i won't</p>
          <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndigmaContent;