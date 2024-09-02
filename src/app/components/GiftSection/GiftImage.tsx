import Image from "next/image";
import Link from "next/link";
import React from "react";

const GiftSection = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-6 px-4 py-6">
      <div className="flex flex-col w-full sm:w-1/4 md:w-1/5 space-y-4">
        <div className="font-semibold text-lg text-center">Festival</div>
        <Image
          src="/assets/firbhet/festival.jpg"
          alt="Festival"
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-lg"
        />
        <Link
          href="#"
          className="text-sm mt-2 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200 text-center"
        ></Link>
      </div>

      <div className="flex flex-col w-full sm:w-1/4 md:w-1/5 space-y-4">
        <div className="font-semibold text-lg text-center">Personalized</div>
        <Image
          src="/assets/firbhet/personalized.png"
          alt="Personalized"
          width={500}
          height={550}
          className="w-full h-[455px] object-cover rounded-lg"
        />
        <Link
          href="#"
          className="text-sm mt-2 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200 text-center"
        ></Link>
      </div>

      <div className="flex flex-col w-full sm:w-1/4 md:w-1/5 space-y-4">
        <div className="font-semibold text-lg text-center">Corporate</div>
        <Image
          src="/assets/firbhet/corporate.jpg"
          alt="Corporate"
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-lg"
        />
        <Link
          href="#"
          className="text-sm mt-2 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200 text-center"
        ></Link>
      </div>

      <div className="flex flex-col w-full sm:w-1/4 md:w-1/5 space-y-4">
        <div className="font-semibold text-lg text-center">Wedding</div>
        <Image
          src="/assets/firbhet/wedding.jpg"
          alt="Wedding"
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-lg"
        />
        <Link
          href="#"
          className="text-sm mt-2 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200 text-center"
        ></Link>
      </div>
    </div>
  );
};

export default GiftSection;
