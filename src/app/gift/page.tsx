import Image from 'next/image';
import React from 'react';

const GiftSection = () => {
  return (
    <div className="flex space-x-4 px-8 py-12">
      {/* GIFTS FOR SEASON */}
      <div className="flex flex-col w-1/5 space-y-4">
        {/* <div className="font-semibold text-lg">Block Printing</div> */}
        <Image src="/assets/dashboard/master6.jpeg" alt="Block Printing" width={500} height={500} className="w-full h-auto object-cover" />
        <a href="#" className="text-sm mt-2">View All</a>
      </div>
      {/* - Block Printing
- Quilting
-Hand Embroidery
- Embroidery
- Chikankari
- Applique
- Crochet
- Lace
- Cutwork
- Handwoven */}
      {/* SHOP BY OCCASION & SHOP BY RECIPIENT */}
      <div className="flex flex-col w-1/5 space-y-4">
        <div className="font-semibold text-lg">Technique</div>
        <ul className="text-sm space-y-2">
          <li>Block Printing</li>
          <li>Quilting</li>
          <li>Hand Embroidery</li>
          <li>Chikankari</li>
          <li>Applique</li>
          <li>Crochet</li>
        {/* </ul> */}
        {/* <div className="font-semibold text-lg mt-6">SHOP BY RECIPIENT</div> */}
        {/* <ul className="text-sm space-y-2"> */}
          <li>Lace</li>
          <li>Cutwork</li>
          <li>Handwoven</li>
          
        </ul>
      </div>

      {/* GIFTING */}
      <div className="flex flex-col w-1/5 space-y-4">
        <div className="font-semibold text-lg">Bed Linen</div>
        <Image src="/assets/dashboard/master6.jpeg" alt="Bed Linen" width={500} height={500} className="w-full h-auto object-cover" />
        <a href="#" className="text-sm mt-2">Petite Giftables</a>
      </div>

      {/* GIFT CARDS */}
      <div className="flex flex-col w-1/5 space-y-4">
        <div className="font-semibold text-lg">Bath Linen</div>
        <Image src="/assets/dashboard/master5.jpeg" alt="Bath Linen" width={500} height={500} className="w-full h-auto object-cover" />
        <a href="#" className="text-sm mt-2">Discover Gift Cards &gt;</a>
      </div>

      {/* CORPORATE GIFTING */}
      <div className="flex flex-col w-1/5 space-y-4">
        <div className="font-semibold text-lg">Table Linen</div>
        <Image src="/assets/dashboard/master6.jpeg" alt="Table Linen" width={500} height={500} className="w-full h-auto object-cover" />
        <a href="#" className="text-sm mt-2">Explore &gt;</a>
      </div>

      {/* GIFT REGISTRY */}
      <div className="flex flex-col w-1/5 space-y-4">
        <div className="font-semibold text-lg">Cushion & Throws</div>
        <Image src="/assets/dashboard/master5.jpeg" alt="Cushion & Throws" width={500} height={500} className="w-full h-auto object-cover" />
        <a href="#" className="text-sm mt-2">Discover &gt;</a>
      </div>
    </div>
  );
};

export default GiftSection;