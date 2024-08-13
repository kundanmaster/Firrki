import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div
      className="relative w-full h-[45rem] bg-top bg-cover text-center"
      style={{
        backgroundImage: `url('/assets/dashboard/footer.jpeg')`,
      }}
    >
      <div className="flex flex-col items-center pt-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-8">
          Transform Your Space: Discover Elegance in Every Thread
        </h2>
        <div className="flex justify-center mb-8">
          <Image
            src="/assets/dashboard/Firrki_Logo.png"
            alt="Logo"
            width={150}
            height={40}
            className="h-16"
          />
        </div>
        <div className="flex justify-center space-x-4 mb-8">
          <FaFacebookF className="text-2xl text-gray-700 hover:text-gray-900" />
          <FaInstagram className="text-2xl text-gray-700 hover:text-gray-900" />
          <FaYoutube className="text-2xl text-gray-700 hover:text-gray-900" />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-16 w-full px-4">
          <div className="text-left">
            <h3 className="font-semibold text-gray-700 mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#about-us" className="text-gray-700 hover:text-gray-900 font-semibold">About Us</a></li>
              <li><a href="#faqs" className="text-gray-700 hover:text-gray-900 font-semibold">FAQs</a></li>
              <li><a href="#returns" className="text-gray-700 hover:text-gray-900 font-semibold">Returns and Exchange</a></li>
              <li><a href="#refunds" className="text-gray-700 hover:text-gray-900 font-semibold">Refunds</a></li>
              <li><a href="#privacy-policy" className="text-gray-700 hover:text-gray-900 font-semibold">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-700 hover:text-gray-900 font-semibold">Terms and Conditions</a></li>
            </ul>
          </div>
          <div className="text-center">
            <p className="mb-4 text-gray-700">
              Stay in the Loop: Discover New Arrivals and Exclusive Discounts First
            </p>
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="p-2 border border-gray-300 rounded mb-4"
            />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-gray-700 mb-4">PRODUCTS</h3>
            <ul className="space-y-2">
              <li><a href="#new-arrivals" className="text-gray-700 hover:text-gray-900 font-semibold">New Arrivals</a></li>
              <li><a href="#bed-linen" className="text-gray-700 hover:text-gray-900 font-semibold">Bed Linen</a></li>
              <li><a href="#cushions" className="text-gray-700 hover:text-gray-900 font-semibold">Cushions</a></li>
              <li><a href="#table-linen" className="text-gray-700 hover:text-gray-900 font-semibold">Table Linen</a></li>
              <li><a href="#gifting" className="text-gray-700 hover:text-gray-900 font-semibold">Gifting</a></li>
              <li><a href="#personalization" className="text-gray-700 hover:text-gray-900 font-semibold">Personalization</a></li>
            </ul>   
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
