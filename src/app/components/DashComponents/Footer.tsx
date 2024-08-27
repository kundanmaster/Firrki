// import React from 'react';
// import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
// import Image from 'next/image';

// const Footer: React.FC = () => {
//   return (
//     <div
//       className="relative w-full h-[45rem] bg-top bg-cover text-center"
//       style={{
//         backgroundImage: `url('/assets/dashboard/footer.jpeg')`,
//       }}
//     >
//       <div className="flex flex-col items-center pt-12">
//         <h2 className="text-3xl font-semibold text-gray-700 mb-8">
//           Transform Your Space: Discover Elegance in Every Thread
//         </h2>
//         <div className="flex justify-center mb-8">
//           <Image
//             src="/assets/dashboard/Firrki_Logo.png"
//             alt="Logo"
//             width={150}
//             height={40}
//             className="h-16"
//           />
//         </div>
//         <div className="flex justify-center space-x-4 mb-8">
//           <FaFacebookF className="text-2xl text-gray-700 hover:text-gray-900" />
//           <FaInstagram className="text-2xl text-gray-700 hover:text-gray-900" />
//           <FaYoutube className="text-2xl text-gray-700 hover:text-gray-900" />
//         </div>
//         <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-16 w-full px-4">
//           <div className="text-left">
//             <h3 className="font-semibold text-gray-700 mb-4">QUICK LINKS</h3>
//             <ul className="space-y-2">
//               <li><a href="#about-us" className="text-gray-700 hover:text-gray-900 font-semibold">About Us</a></li>
//               <li><a href="#faqs" className="text-gray-700 hover:text-gray-900 font-semibold">FAQs</a></li>
//               <li><a href="#returns" className="text-gray-700 hover:text-gray-900 font-semibold">Returns and Exchange</a></li>
//               <li><a href="#refunds" className="text-gray-700 hover:text-gray-900 font-semibold">Refunds</a></li>
//               <li><a href="#privacy-policy" className="text-gray-700 hover:text-gray-900 font-semibold">Privacy Policy</a></li>
//               <li><a href="#terms" className="text-gray-700 hover:text-gray-900 font-semibold">Terms and Conditions</a></li>
//             </ul>
//           </div>
//           <div className="text-center">
//             <p className="mb-4 text-gray-700">
//               Stay in the Loop: Discover New Arrivals and Exclusive Discounts First
//             </p>
//             <input
//               type="email"
//               placeholder="Enter your Email Address"
//               className="p-2 border border-gray-300 rounded mb-4"
//             />
//           </div>
//           <div className="text-left">
//             <h3 className="font-semibold text-gray-700 mb-4">PRODUCTS</h3>
//             <ul className="space-y-2">
//               <li><a href="#new-arrivals" className="text-gray-700 hover:text-gray-900 font-semibold">New Arrivals</a></li>
//               <li><a href="#bed-linen" className="text-gray-700 hover:text-gray-900 font-semibold">Bed Linen</a></li>
//               <li><a href="#cushions" className="text-gray-700 hover:text-gray-900 font-semibold">Cushions</a></li>
//               <li><a href="#table-linen" className="text-gray-700 hover:text-gray-900 font-semibold">Table Linen</a></li>
//               <li><a href="#gifting" className="text-gray-700 hover:text-gray-900 font-semibold">Gifting</a></li>
//               <li><a href="#personalization" className="text-gray-700 hover:text-gray-900 font-semibold">Personalization</a></li>
//             </ul>   
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;




import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/assets/dashboard/footer2.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        height: '1200px',
        
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-6xl mt text-center sm:text-left">
        <div className="space-y-5" style={{ marginTop: '-105px' }}>
          <div className="flex flex-col items-start" style={{ marginTop: '120px' }}>
            {/* Logo */}
            <div className="flex w-full" style={{ justifyContent: 'center' }}>
              <Image
                src="/assets/dashboard/Firrki_Logo.png"
                alt="Logo"
                width={220}
                height={90}
                className="h-28 w-25 mb-5"
                style={{ marginLeft: '70px' }}
              />
            </div>
            <br/>

            {/* Social Media Icons */}
            <div className="flex gap-7" style={{ paddingLeft: '170px', marginLeft: '40px' }}>
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

          <div className="mb-4" style={{ marginLeft: '105px', marginTop: '15px' }}>
            <p className="mb-6 text-gray-600 text-xl font-semibold">
              Discover New Arrivals and Exclusive Discounts First
            </p>
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="px-4 py-2 w-[430px] max-w-md border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-6xl mt-10">
          <div className='ml-[100px]' style={{ marginRight: '-170px' }}>
            <h2 className="text-4xl font-semibold mb-3">QUICK LINKS</h2>
            <br/>
            <ul className="space-y-2 text-gray-700 text-xl font-semibold">
              <li><a href="" className="hover:text-gray-500">Our story</a></li>
              <li><a href="" className="hover:text-gray-500">FAQs</a></li>
              <li><a href="" className="hover:text-gray-500">Returns and Exchange</a></li>
              <li><a href="" className="hover:text-gray-500">Refunds</a></li>
              <li><a href="" className="hover:text-gray-500">Privacy Policy</a></li>
              <li><a href="" className="hover:text-gray-500">Terms and Conditions</a></li>
            </ul>
          </div>
          <div className='ml-[150px]'>
            <h3 className="text-4xl font-semibold mb-3">CATEGORIES</h3>
            <br/>
            <ul className="space-y-2 text-gray-700 text-xl font-semibold">
              <li><a href="/new-arrivals" className="hover:text-gray-500">New arrivals</a></li>
              <li><a href="/bed-linen" className="hover:text-gray-500">Bed Linen</a></li>
              <li><a href="/cushions" className="hover:text-gray-500">Cushions</a></li>
              <li><a href="/table-linen" className="hover:text-gray-500">Table Linen</a></li>
              <li><a href="/gifting" className="hover:text-gray-500">Gifting</a></li>
              <li><a href="/personalization" className="hover:text-gray-500">Personalization</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
