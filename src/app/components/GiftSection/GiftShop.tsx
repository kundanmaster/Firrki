



// // components/GiftShop.js
// import Image from 'next/image';

// export default function GiftSection() {
//   return (
//     <div className="flex justify-between w-full p-8 bg-white">
//       {/* Left Column */}
//       <div className="flex flex-col space-y-2 ml-56">
//         <h2 className="font-bold text-lg mb-4">The Gift Shop</h2>
//         <ul className="space-y-2 text-base text-gray-800">
//           <li>Best of Firrki Gifts</li>
//           <li>Comes in Gift Box</li>
//           <li>Gifts for her</li>
//           <li>Gifts for him</li>
//           <li>Gifts Under Rs 2000</li>
//           <li>Gifts Under Rs 5000</li>
//           <li>Gifts Under Rs 7000</li>
//           <li>Gifts Under Rs 10000</li>
//           <li>Gift Trees</li>
//         </ul>
//       </div>
  





//       {/* Middle Column */}
//       <div className="flex flex-col space-y-2 ml-8">
//         <h2 className="font-bold text-lg mb-4">Gift Card</h2>
//         <ul className="space-y-2 text-base text-gray-800">
//           <li>Shop by Technique </li>
//           <li>Bed Linen</li>
//           <li>Bath Linen</li>
//           <li>Table Linen</li>
//           <li>Cushions</li>
         
//         </ul>
//       </div>

//       {/* Right Column with Images */}
//       <div className="flex space-x-4 ml-16">
//         {/* First Image */}
//         <div className="flex flex-col items-center rou">
//           <Image
//             src="/assets/shop/Group 6.png" // Replace with the path to shop1.png
//             alt="Gift Card"
//             width={200}
//             height={200}
//             className="object-cover h-[24rem] w-[20rem] rounded-md"
//           />
       
//         </div>

//         {/* Second Image */}
//         <div className="flex flex-col items-center">
//           <Image
//             src="/assets/shop/Group 7.png" // Replace with the path to shop2.png
//             alt="Festive"
//             width={200}
//             height={200}
//             className="object-cover rounded-md h-[24rem] w-[20rem]"
//           />
          
//         </div>
//       </div>
//     </div>
//   );
// }


// components/GiftShop.js
import Image from 'next/image';
import Link from 'next/link'; // import Link from Next.js

export default function GiftSection() {
  return (
    <div className="flex justify-between w-full p-8 bg-white">
      {/* Left Column */}
      <div className="flex flex-col space-y-2 ml-56">
        <h2 className="font-bold text-lg mb-4">The Gift Shop</h2>
        <ul className="space-y-2 text-base text-gray-800">
          <li>Best of Firrki Gifts</li>
          <li>Comes in Gift Box</li>
          <li>Gifts for her</li>
          <li>Gifts for him</li>
          <li>Gifts Under Rs 2000</li>
          <li>Gifts Under Rs 5000</li>
          <li>Gifts Under Rs 7000</li>
          <li>Gifts Under Rs 10000</li>
          <li>Gift Trees</li>
        </ul>
      </div>

      {/* Middle Column */}
      <div className="flex flex-col space-y-2 ml-8">
        <h2 className="font-bold text-lg mb-4">Gift Card</h2>
        <ul className="space-y-2 text-base text-gray-800">
          <li>Shop by Technique</li>
          <li>Bed Linen</li>
          <li>Bath Linen</li>
          <li>Table Linen</li>
          <li>Cushions</li>
        </ul>
      </div>

      {/* Right Column with Images */}
      <div className="flex space-x-4 ml-16">
        {/* First Image */}
        <div className="flex flex-col items-center">
          <Link href="/gift-card-page">
            <Image
              src="/assets/shop/Group 6.png"
              alt="Gift Card"
              width={200}
              height={200}
              className="object-cover h-[24rem] w-[20rem] rounded-md transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </Link>
        </div>

        {/* Second Image */}
        <div className="flex flex-col items-center">
          <Link href="/festive-gift-page">
            <Image
              src="/assets/shop/Group 7.png"
              alt="Festive"
              width={200}
              height={200}
              className="object-cover rounded-md h-[24rem] w-[20rem] transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
