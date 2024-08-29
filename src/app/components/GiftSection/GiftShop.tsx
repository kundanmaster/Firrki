import Image from "next/image";
import Link from "next/link";
import React from "react";

const GiftSection = () => {
  return (
    <div className="flex space-x-4 px-8 py-12">
      {/* GIFTS FOR SEASON */}
      <div className="flex flex-col w-1/5 space-y-4">
        <Image
          src="/assets/dashboard/master6.jpeg"
          alt="Block Printing"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
        <Link
          href="#"
          className="text-sm mt-2 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200"
        >
          View All
        </Link>
      </div>
      {/* SHOP BY OCCASION & SHOP BY RECIPIENT */}
      <div className="flex flex-col w-1/5 space-y-4">
        <div className="font-semibold text-lg">Technique</div>
        <ul className="text-sm space-y-2">
          <li className="text-primaryrose hover:text-primaryrosedark hover:font-bold hover:scale-105 transition-transform duration-200">
            <Link href="#">Block Printing</Link>
          </li>
          <li className="text-primaryrose hover:text-primaryrosedark hover:font-bold hover:scale-105 transition-transform duration-200">
            <Link href="#">Quilting</Link>
          </li>
          <li className="text-primaryrose hover:text-primaryrosedark hover:font-bold hover:scale-105 transition-transform duration-200">
            <Link href="#">Hand Embroidery</Link>
          </li>
          <li className="text-primaryrose hover:text-primaryrosedark hover:font-bold hover:scale-105 transition-transform duration-200">
            <Link href="#">Chikankari</Link>
          </li>
          <li className="text-primaryrose hover:text-primaryrosedark hover:font-bold hover:scale-105 transition-transform duration-200">
            <Link href="#">Applique</Link>
          </li>
          <li className="text-primaryrose hover:text-primaryrosedark hover:font-bold hover:scale-105 transition-transform duration-200">
            <Link href="#">Crochet</Link>
          </li>
          <li className="text-primaryrose hover:text-primaryrosedark hover:font-bold hover:scale-105 transition-transform duration-200">
            <Link href="#">Lace</Link>
          </li>
          <li className="text-primaryrose hover:text-primaryrosedark hover:font-bold hover:scale-105 transition-transform duration-200">
            <Link href="#">Cutwork</Link>
          </li>
          <li className="text-primaryrose hover:text-primaryrosedark hover:font-bold hover:scale-105 transition-transform duration-200">
            <Link href="#">Handwoven</Link>
          </li>
        </ul>
      </div>

      {/* GIFTING */}
      <div className="flex flex-col w-1/5 space-y-4">
        <div className="font-semibold text-lg">Bed Linen</div>
        <Image
          src="/assets/dashboard/master6.jpeg"
          alt="Bed Linen"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
        <Link
          href="#"
          className="text-sm mt-2 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200"
        >
          Petite Giftables
        </Link>
      </div>

      {/* GIFT CARDS */}
      <div className="flex flex-col w-1/5 space-y-4">
        <div className="font-semibold text-lg">Bath Linen</div>
        <Image
          src="/assets/dashboard/master5.jpeg"
          alt="Bath Linen"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
        <a
          href="#"
          className="text-sm mt-2 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200"
        >
          Discover Gift Cards &gt;
        </a>
      </div>

      {/* CORPORATE GIFTING */}
      <div className="flex flex-col w-1/5 space-y-4">
        <div className="font-semibold text-lg">Table Linen</div>
        <Image
          src="/assets/dashboard/master6.jpeg"
          alt="Table Linen"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
        <a
          href="#"
          className="text-sm mt-2 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200"
        >
          Explore &gt;
        </a>
      </div>

      {/* GIFT REGISTRY */}
      <div className="flex flex-col w-1/5 space-y-4">
        <div className="font-semibold text-lg">Cushion & Throws</div>
        <Image
          src="/assets/dashboard/master5.jpeg"
          alt="Cushion & Throws"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
        <a
          href="#"
          className="text-sm mt-2 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200"
        >
          Discover &gt;
        </a>
      </div>
    </div>
  );
};

export default GiftSection;
