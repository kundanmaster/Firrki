
"use client";

import Footer from "@/app/components/DashComponents/Footer";
import HeaderLayout from "@/app/components/HeaderLayout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const images = [
  { src: "/assets/firbhet/Vector (5).png", alt: "Vector 5", label: "Festival" },
  { src: "/assets/firbhet/Vector (4).png", alt: "Vector 4", label: "Personalized" },
  { src: "/assets/firbhet/Vector (6).png", alt: "Vector 6", label: "Corporate" },
  { src: "/assets/firbhet/Vector (5).png", alt: "Vector 7", label: "Wedding" },
];

const GiftDetail = () => {
  const router = useRouter();
  const [image, setImage] = useState<{ src: string; alt: string; label: string } | null>(null);

  useEffect(() => {
  
    const { pathname } = window.location;
    const index = parseInt(pathname.split("/").pop() || "0", 10);

    setImage(images[index] || null);
  }, [window.location]);

  if (!image) return <div>Loading...</div>

  return (

    <>
       <HeaderLayout OtherPage={undefined}>s</HeaderLayout>

     <div
      className="flex items-center justify-center h-[40rem] w-full"
      style={{
        backgroundImage: `url('/assets/dashboard/master18.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col md:flex-row items-center   p-6 max-w-4xl w-full"  >
        <div className="relative flex-shrink-0 md:w-1/2">
          <div className="rounded-tl-full rounded-tr-full  overflow-hidden  p-2 bg-[#AD8C87] shadow-md">
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={600}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="absolute -top-8 -right-8">
    
            <Image
              src="/assets/firbhet/wr.png" 
              alt="Flower decoration"
              width={190}
              height={190}
            />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
          <h1 className="text-4xl font-bold mb-4">{image.label}</h1>
          <p className="text-lg mb-4">
            Here is some dummy data related to the {image.label} image. This section can include any additional information you want to display on this page.
          </p>
          <button
            onClick={() => router.back()}
            className="bg-[#AD8C87] text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default GiftDetail;
