// import React from 'react'
// import HeaderLayout from "@/app/components/HeaderLayout";
// import Footer from '../components/DashComponents/Footer';
// import Image from "next/image";

// const page = () => {
//   return (
//     <div>
//             <HeaderLayout OtherPage={undefined}>s</HeaderLayout>
        
//       <div  className=' flex items-center justify-cente  w-[110rem] h-[90vh] bg-[#AD8C87]'>
//         <Image
//           src="/assets/story/Group 22 (1).png"
//           alt="alt"
//           width={600}
//           height={600}
//           className='flex items-center justify-cente' 
//           />
        

//       </div>
//       <Footer/>


//     </div>
//   )
// }

// export default page


import React from 'react';
import HeaderLayout from "@/app/components/HeaderLayout";
import Footer from '../components/DashComponents/Footer';
import Image from "next/image";

const Page = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <HeaderLayout OtherPage={undefined}>s</HeaderLayout>
      
      <div className='flex-1 flex items-center justify-center bg-[#AD8C87]'>
        <div className='relative w-[96vw] h-[70vh]'>
          <Image
            src="/assets/story/Group 22 (1).png"
            alt="alt"
            layout="fill"
            objectFit="contain"
            className='absolute inset-0'
          />
        </div>
      </div>

      <div
      className="flex items-center justify-center h-[50rem] w-full ]"
      style={{
       
        backgroundImage: `url('/assets/story/Group 25.png')`,
        backgroundSize: '',
        backgroundPosition: '',
      }}
    >
      <div className="flex flex-col md:flex-row items-center   p-6   m-96 w-full"  >
        <div className="  md:w-1/2 ">
         <Image src="/assets/story/Group 24.png" alt="alt" 
         width={600} height={600}
         className='h-[43rem] mr-[60rem]'
          />
          
        </div>
        <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0 ml-2">
          <h1 className="text-4xl font-bold mb-4"> The Beiginning</h1>
          <p className="text-2xl mb-4">
            Here is some dummy data related to the  image.
             This section can include any additional information you want to display on this page.
             Here is some dummy data related to the  image.
             This section can include any additional information you want to display on this page.
             Here is some dummy data related to the  image.
             This section can include any additional information you want to display on this page.
          </p>
        
        </div>
      </div>

      
    </div>

    <div
      className="flex items-center justify-center  bg-[#AD8C87] h-[50rem] w-full ]"
     
    >
      <div className="flex flex-col md:flex-row items-center   p-6   m-96 w-full"  >
        
        <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0 mr-32">
          <h1 className="text-5xl font-bold mb-4 text-white"> Brand Pillers</h1>
          <p className="text-2xl text-white mb-4">
            Here is some dummy data related to the  image.
             This section can include any additional information you want to display on this page.
             Here is some dummy data related to the  image.
             This section can include any additional information you want to display on this page.
             Here is some dummy data related to the  image.
             This section can include any additional information you want to display on this page.
          </p>
        
        </div>
        <div className="  md:w-1/2 ">
         <Image src="/assets/story/Group 26.png" alt="alt" 
         width={600} height={600}
         className='h-[43rem] mr-[60rem] mt-[-165px]'
          />
          
        </div>
      </div>

      
    </div>
      
      <Footer/>
    </div>
  );
}

export default Page;
