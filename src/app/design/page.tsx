import React from "react";
import HeaderLayout from "../components/HeaderLayout";
import Footer from "../components/DashComponents/Footer";

const DesignPage = () => {
  return (
    <>
      <HeaderLayout OtherPage={undefined}>.</HeaderLayout>
      <div className="flex text-6xl bg-primaryrose items-center justify-center">
        Design
      </div>

      {/* <div>
        <div
          className="pb-4"
          style={{
            backgroundImage: `url('/assets/dashboard/master18.jpeg')`,
          }}
        >
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-2 row-span-1">
              <Image
                src="/assets/dashboard/shop1.jpeg"
                alt="First Image"
                className="h-[60vh] w-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-1 row-span-1">
              <Image
                src="/assets/dashboard/shop2.jpeg"
                alt="Second Image"
                className="h-[40vh] w-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-1 row-span-1">
              <Image
                src="/assets/dashboard/shop3.jpeg"
                alt="Third Image"
                className="h-[40vh] w-full object-cover"
                width={1000}
                height={1000}
              />
            </div>

            <div className="col-span-1 row-span-1">
              <Image
                src="/assets/dashboard/shop4.jpeg"
                alt="Fourth Image"
                className="h-[40vh] w-full object-cover "
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-1 row-span-1 ">
              <Image
                src="/assets/dashboard/shop5.jpeg"
                alt="Fifth Image"
                className="h-[40vh] w-full object-cover "
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-1 row-span-1 mt-[-11rem]">
              <Image
                src="/assets/dashboard/shop6.jpeg"
                alt="Sixth Image"
                className="h-[60vh] w-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-1 row-span-1 mt-[-11rem]">
              <Image
                src="/assets/dashboard/shop5.jpeg"
                alt="Fifth Image"
                className="h-[30vh] w-full object-cover pb-6"
                width={1000}
                height={1000}
              />
              <Image
                src="/assets/dashboard/shop5.jpeg"
                alt="Fifth Image"
                className="h-[30vh] w-full object-cover "
                width={1000}
                height={1000}
              />
            </div>
           
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default DesignPage;
