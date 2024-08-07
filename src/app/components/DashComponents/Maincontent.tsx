/* eslint-disable react/no-unescaped-entities */

"use client";

import React from 'react';

const LastHeroSection: React.FC = () => {
  return (
    <div
      className="relative w-full h-screen bg-center bg-cover bg-no-repeat text-center py-12"
      style={{ backgroundImage: 'url(/assets/dashboard/tigerMaster.jpeg)' }}
    >
      <h2 className="text-4xl font-semibold text-pink-600 mb-8">
        Customer Love in Every Thread
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-4">
          <p className="text-lg italic mb-4">
            Great shopping experience that I haven't seen in a while. I had a great time looking around here and would like to recommend it to everyone.
          </p>
          <p className="font-bold">Anthony Garcia</p>
          <div className="relative">
            <p>New York</p>
            <div className="absolute top-8 flex justify-center items-center space-x-1 ml-24">
              <span className="w-3 h-3 bg-pink-900 rounded-full"></span>
              <span className="w-3 h-3 bg-pink-600 rounded-full"></span>
              <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
              <span className="w-3 h-3 bg-pink-300 rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <p className="text-lg italic mb-4">
            This is one of the best interior stores. They have a lot of things for you to explore. The price is reasonable and customer service is dedicated.
          </p>
          <p className="font-bold">Gloria Simpson</p>
          <div className="relative">
            <p>Arizona</p>
            <div className="absolute top-8 flex justify-center items-center space-x-1 ml-24">
            <span className="w-3 h-3 bg-pink-900 rounded-full"></span>
              <span className="w-3 h-3 bg-pink-600 rounded-full"></span>
              <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
              <span className="w-3 h-3 bg-pink-300 rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <p className="text-xl italic mb-4">
            I received my table yesterday. What exceptional product quality! The delivery service is real quick. This will be one of my favorite stores.
          </p>
          <p className="font-bold">Karen Rose</p>
          <div className="relative">
            <p>San Jose</p>
            <div className="absolute top-10 flex justify-center items-center space-x-1 ml-24">
            <span className="w-3 h-3 bg-pink-900 rounded-full"></span>
              <span className="w-3 h-3 bg-pink-600 rounded-full"></span>
              <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
              <span className="w-3 h-3 bg-pink-300 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastHeroSection;
