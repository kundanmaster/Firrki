

import Image from "next/image";
import Link from "next/link";
import React from "react";

const GiftSection = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-6 px-4 py-6">
      <div className="flex flex-col w-full sm:w-1/4 md:w-1/5 space-y-4">
        <Link href="">
          <Image
            src="/assets/firbhet/Group2.png"
            alt="Festival"
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
          />
        </Link>
        <Link
          href="/festival"
          className="text-sm mt-2 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200 text-center"
        >
          {/* Festival */}
        </Link>
      </div>

      <div className="flex flex-col w-full sm:w-1/4 md:w-1/5 space-y-4">
        <Link href="/personalized">
          <Image
            src="/assets/firbhet/Group 3.png"
            alt="Personalized"
            width={500}
            height={550}
            className="w-full h-[435px] object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
          />
        </Link>
        <Link
          href=""
          className="text-sm mt-2 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200 text-center"
        >
          {/* Personalized */}
        </Link>
      </div>

      <div className="flex flex-col w-full sm:w-1/4 md:w-1/5 space-y-4">
        <Link href="">
          <Image
            src="/assets/firbhet/Group 4.png"
            alt="Corporate"
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
          />
        </Link>
        <Link
          href="/corporate"
          className="text-sm mt-2 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200 text-center"
        >
          {/* Corporate */}
        </Link>
      </div>

      <div className="flex flex-col w-full sm:w-1/4 md:w-1/5 space-y-4">
        <Link href="">
          <Image
            src="/assets/firbhet/Group 5.png"
            alt="Wedding"
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
          />
        </Link>
        <Link
          href=""
          className="text-sm mt-2 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200 text-center"
        >
      
        </Link>
      </div>
    </div>
  );
};

export default GiftSection;
