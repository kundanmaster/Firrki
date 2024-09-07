


import React from 'react';
import HeaderLayout from "@/app/components/HeaderLayout";
import Footer from '../components/DashComponents/Footer';
import Image from "next/image";

const Page = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <HeaderLayout OtherPage={undefined}>s</HeaderLayout>

      <div className='flex-1 flex items-center justify-center '>
        <div className=' relative w-full h-[70vh]'>
          <Image
            src="/assets/story/Group 27.png"
            alt="alt"
            layout="fill"
            
            className='absolute inset-0 h-[100vh] w-[100vw] '
          />
        </div>
      </div>

      <div
        className="flex items-center justify-center h-[50rem] w-full"
        style={{
          backgroundImage: `url('/assets/story/Group 25.png')`,
          backgroundSize: '',
          backgroundPosition: '',
        }}
      >
        <div className="flex flex-col md:flex-row items-center p-6 m-96 w-full">
          <div className="md:w-1/2">
            <Image
              src="/assets/story/Group 24.png"
              alt="alt"
              width={600}
              height={600}
              className='h-[43rem] mr-[60rem]'
            />
          </div>
          <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0 ml-2">
            <h1 className="text-4xl font-bold mb-4">The Beginning</h1>
            <p className="text-2xl mb-4">
              Here is some dummy data related to the image.
              This section can include any additional information you want to display on this page.
              Here is some dummy data related to the image.
              This section can include any additional information you want to display on this page.
              Here is some dummy data related to the image.
              This section can include any additional information you want to display on this page.
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex items-center justify-center bg-[#c89d9e] h-[44rem] w-full"
      >
        <div className="flex flex-col md:flex-row items-center p-6 m-96 w-full">
          <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0 mr-32">
            <h1 className="text-5xl font-bold mb-4 text-white">Brand Pillars</h1>
            <p className="text-2xl text-white mb-4">
              Here is some dummy data related to the image.
              This section can include any additional information you want to display on this page.
              Here is some dummy data related to the image.
              This section can include any additional information you want to display on this page.
              Here is some dummy data related to the image.
              This section can include any additional information you want to display on this page.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/assets/story/Group 26.png"
              alt="alt"
              width={600}
              height={600}
              className='h-[40rem] mr-[50rem] mt-[-110px] w-[27rem] ml-[12rem]'
            />
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center h-[50rem] w-full"
        style={{
          backgroundImage: `url('/assets/dashboard/master18.jpeg')`,
          backgroundSize: '',
          backgroundPosition: '',
        }}
      >
        <div className="flex flex-col md:flex-row items-center p-6 m-96 w-full">
          <div className="md:w-1/2">
            <Image
              src="/assets/story/Group 28.png"
              alt="alt"
              width={600}
              height={600}
              className='h-[43rem] mr-[60rem]'
            />
          </div>
          <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0 ml-2">
            <h1 className="text-4xl font-bold mb-4">Our Craftsmanship</h1>
            <p className="text-2xl mb-4">
              Here is some dummy data related to the image.
              This section can include any additional information you want to display on this page.
              Here is some dummy data related to the image.
              This section can include any additional information you want to display on this page.
              Here is some dummy data related to the image.
              This section can include any additional information you want to display on this page.
            </p>
          </div>
        </div>
      </div>
      <div
      className="flex justify-center items-center h-96 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/dashboard/master18.jpeg')" }}
    >
   
      <div className="bg-[rgb(219,225,211)] p-32 rounded-lg h-80 w-full mx-auto flex items-center">
  <div className="w-1/2">
    <div className="text-2xl md:text-3xl font-semibold text-[#304659] leading-tight">
      <p>IN A WORLD THAT OFTEN</p>
      <p>OVERLOOKS CRAFTSMANSHIP,</p>
      <p>HAVE YOU DISCOVERED</p>
      <p>THE MAGIC OF</p>
      <p>UNEXPECTED BEAUTY?</p>
    </div>
  </div>
  <div className="flex flex-col items-center justify-center mx-4">
    <div className="relative mb-4">
      <Image src="/assets/story/Group 29.png" alt="Logo" width={70} height={70} />
    </div>
  </div>
  <div className="w-1/2 pl-32">
    <div className="text-[#304659] leading-tight text-xl space-4">
    <p>Our home decor collection celebrates</p>
      <p>serendipity—those delightful, whimsical</p>
      <p>touches that bring wonder to everyday</p>
      <p>living. We’re not just offering decor;</p>
      <p>we’re crafting a modern Indian way of living,</p>
      <p>where each piece tells a story and transforms</p>
      <p>your space into a realm of enchantment.</p>
    </div>
  </div>
     </div>

    </div>

    <div className="w-full mx-auto p-4 bg-[#c89d9e]  ">
      {/* First row */}
      <div className="flex w-full mb-4 gap-3">
        <div className="w-1/2 pr-2">
          <Image
            src="/assets/story/image1.png" 
            alt="Image 1"
            width={1000}
            height={1000}
            className="w-full h-[27rem] object-cover"
          />
        </div>
        <div className="w-1/4 pr-2">
          <Image
            src="/assets/story/image2.png"
            alt="Image 2"
            width={500}
            height={500}
            className="w-full  h-[27rem] object-cover"
          />
        </div>
        <div className="w-1/4 ">
          <Image
            src="/assets/story/image3.png" 
            alt="Image 3"
            width={500}
            height={500}
            className="w-full h-[27rem] object-cover"
          />
        </div>
      </div>
      {/* Second row */}
      <div className="flex w-full gap-3">
        <div className="w-1/4 pr-2">
          <Image
            src="/assets/story/image4.png" 
            alt="Image 4"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-1/4 pr-2">
          <Image
            src="/assets/story/image5.png"
            alt="Image 5"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-1/2">
          <Image
            src="/assets/story/image6.png"
            alt="Image 6"
            width={1000}
            height={1000}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      

    </div>

    <div className="bg-[#c89d9e] p-16 rounded-lg h-52 w-full mx-auto flex items-center">
  <div className="w-full">
    <div className="flex flex-center   text-white text-2xl leading-tight">
     <p className=''>At the heart of our collection lies a meticulous dedication to design and quality
      in every hand crafted piece-we re committed to maintaining this standard!
       Visit any of our 30+ exclusive brand stores, explore leading marketplaces,
       or shop on www.firrki.com to experience the essence of our home decor</p>
    </div>
  </div>
 

     </div>

     <div
        className="flex items-center justify-center h-[50rem] w-full"
        style={{
          backgroundImage: `url('/assets/story/Group 25.png')`,
          backgroundSize: '',
          backgroundPosition: '',
        }}
      >
        <div className="flex flex-col md:flex-row items-center p-6 m-96 w-full">
          <div className="md:w-1/2">
            <Image
              src="/assets/story/Group 12 (1).png"
              alt="alt"
              width={600}
              height={600}
              className='h-[43rem] w-[30rem] mr-[50rem]'
            />
          </div>
          <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0 ml-2">
            <h1 className="text-4xl font-bold mb-4">Our Menifesto</h1>
            <p className="text-2xl mb-4">
              Here is some dummy data related to the image.
              This section can include any additional information you want to display on this page.
              Here is some dummy data related to the image.
              This section can include any additional information you want to display on this page.
              Here is some dummy data related to the image.
              This section can include any additional information you want to display on this page.
            </p>
          </div>
        </div>
      </div>



      <div className="bg-[#c89d9e] p-16 rounded-lg h-[31rem] w-full mx-auto flex items-center"
      
      >
  <div className="w-full"   >
    <div className="flex flex-center   text-white text-2xl leading-tight">
     <p className=''>At the heart of our collection lies a meticulous dedication to design and quality
      in every hand crafted piece-we re committed to maintaining this standard!
       Visit any of our 30+ exclusive brand stores, explore leading marketplaces,
       or shop on www.firrki.com to experience the essence of our home decor
       At the heart of our collection lies a meticulous dedication to design and quality
      in every hand crafted piece-we re committed to maintaining this standard!
       Visit any of our 30+ exclusive brand stores, explore leading marketplaces,
       or shop on www.firrki.com to experience the essence of our home decor
       At the heart of our collection lies a meticulous dedication to design and quality
      in every hand crafted piece-we re committed to maintaining this standard!
       Visit any of our 30+ exclusive brand stores, explore leading marketplaces,
       or shop on www.firrki.com to experience the essence of our home decor
       At the heart of our collection lies a meticulous dedication to design and quality
      in every hand crafted piece-we re committed to maintaining this standard!
       Visit any of our 30+ exclusive brand stores, explore leading marketplaces,
       or shop on www.firrki.com to experience the essence of our home decor
       </p>
      
    </div>
    <div className=" flex justify-center mt-8">
       <button className="bg-[rgb(219,225,211)] text-black text-xl  px-6 py-3  font-semibold hover:bg-[#D1B6B1]">
        EXPLORE
      </button>

       </div>
  </div>
 

     </div>
     <div className='h-[2rem] w-full' style={{
          backgroundImage: `url('/assets/dashboard/master18.jpeg')`,
          backgroundSize: 'center',
          backgroundPosition: 'cover',
        }}>

     </div>


      <Footer />
    </div>
  );
}

export default Page;
