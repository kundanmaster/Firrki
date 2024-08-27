// /* eslint-disable react/no-unescaped-entities */

// "use client";

// import React from 'react';

// const LastHeroSection: React.FC = () => {
//   return (
//     <div
//       className="relative w-full h-screen bg-center bg-cover bg-no-repeat text-center py-12"
//       style={{ backgroundImage: 'url(/assets/dashboard/tigerMaster.jpeg)' }}
//     >
//       <h2 className="text-6xl font-semibold text-pink-600 mb-8">
//         Customer Love in Every Thread
//       </h2>
//       <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="pr-24">
//           <p className="text-2xl italic mb-4">
//             Great shopping experience that I haven't seen in a while. I had a great time looking around here and would like to recommend it to everyone.
//           </p>
//           <p className="font-bold">Anthony Garcia</p>
//           <div className="relative flex justify-center">
//             <p>New York</p>
//             <div className="absolute top-8 flex justify-center items-center space-x-2">
//               <span className="w-3 h-3 bg-pink-900 rounded-full"></span>
//               <span className="w-3 h-3 bg-pink-600 rounded-full"></span>
//               <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
//               <span className="w-3 h-3 bg-pink-300 rounded-full"></span>
//             </div>
//           </div>
//         </div>
//         <div className="pr-24">
//           <p className="text-2xl italic mb-4">
//             This is one of the best interior stores. They have a lot of things for you to explore. The price is reasonable and customer service is dedicated.
//           </p>
//           <p className="font-bold">Gloria Simpson</p>
//           <div className="relative flex justify-center">
//             <p>Arizona</p>
//             <div className="absolute top-8 flex justify-center items-center space-x-2">
//             <span className="w-3 h-3 bg-pink-900 rounded-full"></span>
//               <span className="w-3 h-3 bg-pink-600 rounded-full"></span>
//               <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
//               <span className="w-3 h-3 bg-pink-300 rounded-full"></span>
//             </div>
//           </div>
//         </div>
//         <div className="pr-24">
//           <p className="text-2xl italic mb-4">
//             I received my table yesterday. What exceptional product quality! The delivery service is real quick. This will be one of my favorite stores.
//           </p>
//           <p className="font-bold">Karen Rose</p>
//           <div className="relative flex justify-center">
//             <p>San Jose</p>
//             <div className="absolute top-8 flex justify-center items-center space-x-2">
//             <span className="w-3 h-3 bg-pink-900 rounded-full"></span>
//               <span className="w-3 h-3 bg-pink-600 rounded-full"></span>
//               <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
//               <span className="w-3 h-3 bg-pink-300 rounded-full"></span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LastHeroSection;


"use client";

import React, { useState } from 'react';

const LastHeroSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<null | number>(null); // Track expanded testimonial

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle expanded state
  };

  return (
    <div
      className="relative w-full h-[720px] bg-center bg-cover bg-no-repeat text-center py-12"
      style={{ backgroundImage: 'url(/assets/dashboard/tigerMaster.jpeg)' }}
    >
      <h2 className="text-6xl font-semibold text-pink-600 mb-8">
        Customer Love in Every Thread
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            text: "Great shopping experience that I haven't seen in a while. I had a great time looking around here and would like to recommend it to everyone. The variety of products and the quality are top-notch. The staff is very helpful and knowledgeable about their products.",
            name: "Anthony Garcia",
            location: "New York"
          },
          {
            text: "This is one of the best interior stores. They have a lot of things for you to explore. The price is reasonable and customer service is dedicated. The store is well-organized and the staff is very friendly, making the shopping experience pleasant and stress-free.",
            name: "Gloria Simpson",
            location: "Arizona"
          },
          {
            text: "I received my table yesterday. What exceptional product quality! The delivery service is real quick. This will be one of my favorite stores. The product was exactly as described and arrived on time. The attention to detail in the craftsmanship is impressive.",
            name: "Karen Rose",
            location: "San Jose"
          }
        ].map((testimonial, index) => (
          <div key={index} className="px-6">
            <div className="relative flex flex-col items-center">
              <div className="relative">
                <p
                  className={`text-2xl italic mb-4 transition-all duration-300 ${expandedIndex === index ? 'h-auto' : 'h-32 overflow-hidden'}`}
                >
                  {expandedIndex === index ? testimonial.text : `${testimonial.text.substring(0, 150)}...`} 
                </p>
                {testimonial.text.length > 150 && (
                  <button 
                    className="mt-2 underline cursor-pointer"
                    onClick={() => handleToggle(index)}
                  >
                    {expandedIndex === index ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </div>
              <p className="font-bold">{testimonial.name}</p>
              <div className="relative flex justify-center">
                <p>{testimonial.location}</p>
                <div className="absolute top-8 flex justify-center items-center space-x-2">
                  <span className="w-3 h-3 bg-pink-900 rounded-full"></span>
                  <span className="w-3 h-3 bg-pink-600 rounded-full"></span>
                  <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-pink-300 rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastHeroSection;