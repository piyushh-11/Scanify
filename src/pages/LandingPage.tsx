import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-5xl rounded-lg relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-8 -left-8 w-64 h-64 bg-gray-200 rounded-lg rotate-12"></div>
        <div className="absolute top-32 -left-16 w-48 h-48 bg-black rounded-lg rotate-45"></div>
        
        <div className="absolute -bottom-8 left-24 w-56 h-56 bg-gray-200 rounded-lg -rotate-6"></div>
        
        <div className="absolute top-8 -right-8 w-48 h-48 bg-gray-200 rounded-lg -rotate-12"></div>
        <div className="absolute top-32 right-0 w-40 h-40 bg-black rounded-lg rotate-45"></div>
        <div className="absolute -bottom-8 right-24 w-48 h-48 bg-gray-200 rounded-lg rotate-12"></div>
        
        {/* Content container */}
        <div className="min-h-[600px] flex flex-col items-center justify-center relative z-10 py-16 px-4">
          {/* Logo placeholder */}
          <div className="bg-gray-300 w-20 h-20 rounded-lg flex items-center justify-center text-sm text-gray-700 mb-12">
            Logo
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Capture, Organize, and Analyze:
          </h1>
          
          {/* Subheading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Your finances in one place
          </h2>
          
          {/* CTA button */}
          <button className="px-8 py-3 border border-gray-300 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;