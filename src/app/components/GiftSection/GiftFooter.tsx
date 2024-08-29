import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

const GiftFooter = () => {
  return (
    <div
        style={{
          backgroundImage: `url('/assets/dashboard/footer2.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
        className="relative mt-auto flex flex-col items-center h-auto min-h-[600px] sm:min-h-[2000px] md:min-h-[900px] lg:min-h-[1024px] xl:min-h-[1200px] 2xl:min-h-[1500px] py-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-6xl text-center sm:text-left px-4">
          <div className="space-y-5">
            <div className="flex flex-col items-center sm:items-start">
              {/* Logo */}
              <div className="flex justify-center sm:justify-start w-full mb-6">
                <Image
                  src="/assets/dashboard/Firrki_Logo.png"
                  alt="Logo"
                  width={220}
                  height={90}
                  className="h-25 w-25"
                />
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-7 justify-center sm:justify-start">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black p-2 rounded-full"
                >
                  <FaFacebookF className="text-white text-3xl hover:text-gray-500" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black p-2 rounded-full"
                >
                  <FaInstagram className="text-white text-3xl hover:text-gray-500" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black p-2 rounded-full"
                >
                  <FaYoutube className="text-white text-3xl hover:text-gray-500" />
                </a>
              </div>
            </div>

            <div className="mt-6 sm:mt-0">
              <p className="mb-6 text-gray-600 text-xl font-semibold">
                Discover New Arrivals and Exclusive Discounts First
              </p>
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="px-4 py-2 w-full max-w-md border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-6xl">
            <div className="text-center sm:text-left">
              <h2 className="text-4xl font-semibold mb-3">QUICK LINKS</h2>
              <ul className="space-y-2 text-gray-700 text-xl font-semibold">
                <li>
                  <a href="#" className="hover:text-gray-500">
                    Our story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-500">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-500">
                    Returns and Exchange
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-500">
                    Refunds
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-500">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-4xl font-semibold mb-3">CATEGORIES</h3>
              <ul className="space-y-2 text-gray-700 text-xl font-semibold">
                <li>
                  <a href="/new-arrivals" className="hover:text-gray-500">
                    New arrivals
                  </a>
                </li>
                <li>
                  <a href="/bed-linen" className="hover:text-gray-500">
                    Bed Linen
                  </a>
                </li>
                <li>
                  <a href="/cushions" className="hover:text-gray-500">
                    Cushions
                  </a>
                </li>
                <li>
                  <a href="/table-linen" className="hover:text-gray-500">
                    Table Linen
                  </a>
                </li>
                <li>
                  <a href="/gifting" className="hover:text-gray-500">
                    Gifting
                  </a>
                </li>
                <li>
                  <a href="/personalization" className="hover:text-gray-500">
                    Personalization
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}

export default GiftFooter