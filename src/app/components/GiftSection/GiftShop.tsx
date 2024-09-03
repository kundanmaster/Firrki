
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GiftSection = () => {
  return (
    <div className="px-4 py-8 md:px-8 md:py-12 mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-1 mb-20 md:grid-cols-1 lg:grid-cols-6 gap-2">
        <div className="flex flex-col space-y-1 mb-20  ">
          <Image
            src="/assets/dashboard/master6.jpeg"
            alt="Block Printing"
            width={500}
            height={500}
            className="w-full h-auto object-cover  ml-20 mt-[44px]"
          />
          <Link
            href="#"
            className="text-sm mt-2 ml-20 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200"
          >
            View All
          </Link>
        </div>

        <div className="flex flex-col space-y-1 ml-24 ">
          <div className="font-semibold text-lg">Technique</div>
          <ul className="text-sm space-y-2 mt-[90px]">
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

        <div className="flex flex-col space-y-4">
          <div className="font-semibold text-lg">Bed Linen</div>
          <Image
            src="/assets/shop/bedLinen.jpg"
            alt="Bed Linen"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
          <Link
            href="#"
            className="text-sm mt-2 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200"
          >
            
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="font-semibold text-lg">Bath Linen</div>
          <Image
            src="/assets/shop/bathLinen.png"
            alt="Bath Linen"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
          <a
            href="#"
            className="text-sm mt-2 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200"
          >
            
          </a>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="font-semibold text-lg">Table Linen</div>
          <Image
            src="/assets/shop/tableLinen.png"
            alt="Table Linen"
            width={500}
            height={500}
            className="w-full h-[340px] object-cover"
          />
          <a
            href="#"
            className="text-sm mt-2 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200"
          >
            
          </a>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="font-semibold text-lg">Cushion & Throws</div>
          <Image
            src="/assets/shop/cushionsandthrows.png"
            alt="Cushion & Throws"
            width={500}
            height={500}
            className="w-full h-[340px] object-cover"
          />
          <a
            href="#"
            className="text-sm mt-2 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200"
          >
            
          </a>
        </div>
      </div>
    </div>
  );
};

export default GiftSection;
