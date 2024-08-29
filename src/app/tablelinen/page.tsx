import Image from "next/image";
import Footer from "../components/DashComponents/Footer";
import HeaderLayout from "../components/HeaderLayout";
import { FC } from "react";

interface ImageConfig {
  src: string;
  alt: string;
  widthClass: string;
  heightClass: string;
}
interface ImageConfig {
  src: string;
  alt: string;
  widthClass: string;
  heightClass: string;
}

const images: ImageConfig[] = [
  {
    src: "/assets/tableLinen/image4.png",
    alt: "Table Linen 1",
    widthClass: "col-span-2",
    heightClass: "h-96",
  },
  {
    src: "/assets/tableLinen/image3.png",
    alt: "Table Linen 2",
    widthClass: "col-span-1",
    heightClass: "h-96",
  },
  {
    src: "/assets/tableLinen/image88.png",
    alt: "Table Linen 3",
    widthClass: "col-span-1",
    heightClass: "h-96",
  },
  {
    src: "/assets/tableLinen/image1.png",
    alt: "Table Linen 4",
    widthClass: "col-span-1",
    heightClass: "h-96",
  },
  {
    src: "/assets/tableLinen/image6.png",
    alt: "Table Linen 5",
    widthClass: "col-span-1",
    heightClass: "h-96",
  },
  {
    src: "/assets/tableLinen/image2.png",
    alt: "Table Linen 6",
    widthClass: "col-span-2",
    heightClass: "h-96",
  },
];

const TableLinen: FC = () => {
  return (
    <div>
      {/* Table Linen Section */}
      <HeaderLayout OtherPage={undefined}>s</HeaderLayout>
      {/* Table Linen Section */}
      <div
        className="relative flex items-center justify-center"
        style={{
          backgroundImage: `url('/assets/tableLinen/bacgroundimage.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "80vh",
        }}
      >
        <div className="relative w-full">
          {/* Slider Container */}
          <div className="flex items-center justify-between">
            {/* Left Navigation Button */}
            <button className="text-8xl text-gray-600 hover:text-gray-800 ml-4">
              &#x276E;
            </button>

            {/* Center Content */}
            <div className="text-center flex-grow">
              <h1 className="text-5xl font-bold text-[#2c4456]">TABLE LINEN</h1>
              <div className="flex justify-center mt-[-10px] mb-4">
                <Image
                  src="/assets/dashboard/linenLogo.png"
                  alt="Adorn Logo"
                  className="mx-auto md:mx-0 flex items-center mb-8"
                  width={200}
                  height={100}
                />
              </div>
              <p className="text-xl text-[#2c4456] max-w-sm mx-auto mt-[-40px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
              <button className="mt-4 px-6 py-2 bg-primaryrose hover:bg-primaryrosedark text-white font-semibold z-10">
                VIEW MORE
              </button>
            </div>

            {/* Right Navigation Button */}
            <button className="text-8xl text-gray-600 hover:text-gray-800 mr-4">
              &#x276F;
            </button>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <div
        className="py-12"
        style={{
          backgroundImage: `url('/assets/dashboard/master18.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-wrap justify-center gap gap-8 mt-[-20px] px-8">
          {/* Image Card 1 */}
          <div className="w-[230px] flex flex-col border-5 border-primaryrose hover:border-primaryrosedark mb-6 sm:mb-0">
            <div className="relative w-full h-[300px]">
              <Image
                src="/assets/tableLinen/image.png"
                alt="Placemat"
                layout="fill"
                objectFit="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-2 bg-primaryrose hover:bg-primaryrosedark text-center">
              <p className="text-lg font-semibold text-white">PLACEMATS</p>
            </div>
          </div>

          {/* Image Card 2 */}
          <div className="w-[230px] flex flex-col border-5 border-primaryrose hover:border-primaryrosedark mb-6 sm:mb-0">
            <div className="relative w-full h-[300px]">
              <Image
                src="/assets/tableLinen/image22.png"
                alt="Napkins"
                layout="fill"
                objectFit="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-2 bg-primaryrose hover:bg-primaryrosedark text-center">
              <p className="text-lg font-semibold text-white">NAPKINS</p>
            </div>
          </div>

          {/* Image Card 3 */}
          <div className="w-[230px] flex flex-col border-5 border-primaryrose hover:border-primaryrosedark mb-6 sm:mb-0">
            <div className="relative w-full h-[300px]">
              <Image
                src="/assets/tableLinen/image2.png"
                alt="Runners"
                layout="fill"
                objectFit="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-2 bg-primaryrose hover:bg-primaryrosedark text-center">
              <p className="text-lg font-semibold text-white">RUNNERS</p>
            </div>
          </div>

          {/* Image Card 4 */}
          <div className="w-[230px] flex flex-col border-5 border-primaryrose hover:border-primaryrosedark mb-6 sm:mb-0">
            <div className="relative w-full h-[300px]">
              <Image
                src="/assets/tableLinen/image3.png"
                alt="Table Cloth"
                layout="fill"
                objectFit="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-2 bg-primaryrose hover:bg-primaryrosedark text-center">
              <p className="text-lg font-semibold text-white">TABLE CLOTH</p>
            </div>
          </div>

          {/* Image Card 5 */}
          <div className="w-[230px] flex flex-col border-5 border-primaryrose hover:border-primaryrosedark mb-6 sm:mb-0">
            <div className="relative w-full h-[300px]">
              <Image
                src="/assets/tableLinen/image8.png"
                alt="Coasters"
                layout="fill"
                objectFit="cover"
                className="object-cover w-[230px] h-[490px]"
              />
            </div>
            <div className="p-2 bg-primaryrose hover:bg-primaryrosedark text-center">
              <p className="text-lg font-semibold text-white">COASTERS</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-center mt[-10px]"
        style={{
          backgroundImage: `url('/assets/dashboard/master18.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-5xl italic font-bold text-[#2c4456]">
          Bestsellers
        </h1>
        <div className="flex justify-center">
          <Image
            src="/assets/dashboard/linenLogo.png"
            alt="Adorn Logo"
            className="mx-auto md:mx-0 flex item-center mb-8"
            width={200}
            height={100}
          />
        </div>
      </div>

      <div>
        <div
          className="pb-4"
          style={{
            backgroundImage: `url('/assets/dashboard/master18.jpeg')`,
          }}
        >
          <div className="grid grid-cols-4 gap-4">
            {/* First Row */}
            <div className="col-span-2 row-span-1">
              <Image
                src="/assets/tableLinen/image4.png"
                alt="First Image"
                className="h-auto w-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-1 row-span-1">
              <Image
                src="/assets/tableLinen/image3.png"
                alt="Second Image"
                className="h-[70vh] w-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-1 row-span-1">
              <Image
                src="/assets/tableLinen/image88.png"
                alt="Third Image"
                className="h-[70vh] w-full object-cover"
                width={1000}
                height={1000}
              />
            </div>

            {/* Second Row */}
            <div className="col-span-1 row-span-1">
              <Image
                src="/assets/tableLinen/image1.png"
                alt="Fourth Image"
                className="h-[70vh] w-full object-cover mt-[-11.4rem]"
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-1 row-span-1">
              <Image
                src="/assets/tableLinen/image6.png"
                alt="Fifth Image"
                className="h-[70vh] w-full object-cover mt-[-11.4rem]"
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-2 row-span-1">
              <Image
                src="/assets/tableLinen/image2.png"
                alt="Sixth Image"
                className="h-[50vh] w-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TableLinen;
