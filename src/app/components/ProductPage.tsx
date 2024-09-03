// import React from "react";
// import ImageSlider from "./ImageSlider";
// import {
//   Card,
//   CardHeader,
//   CardFooter,
//   Button,
//   CardBody,
//   Image,
// } from "@nextui-org/react";
// import Footer from "./DashComponents/Footer";
// import LandingPage1 from "./DashComponents/LandingPage1";
// import LandingPage2 from "./DashComponents/LandingPage2";
// import LandingPage3 from "./DashComponents/LandingPage3";
// import Maincontent from "./DashComponents/Maincontent";
// // import TestimonialSection from "./DashComponents/testimonial";

// function ProductPage() {
//   const images = [
//     "/assets/dashboard/master1.jpeg",
//     "/assets/decore (2).jpg",
//     "/assets/dashboard/master4.jpeg",
//   ];

//   return (
//     <>
     
//       <LandingPage2 />
//       <LandingPage3 />
//       <LandingPage1 />
//       <Maincontent />
    
//       <Footer />
//     </>
//   );
// }

// export default ProductPage;


import React from "react";
import ImageSlider from "./ImageSlider";
import {
  Card,
  CardHeader,
  CardFooter,
  Button,
  CardBody,
  Image,
} from "@nextui-org/react";
import Footer from "./DashComponents/Footer";
import LandingPage1 from "./DashComponents/LandingPage1";
import LandingPage2 from "./DashComponents/LandingPage2";
import LandingPage3 from "./DashComponents/LandingPage3";
import Maincontent from "./DashComponents/Maincontent";
import ScrollToTopButton from "./ScrollToTopButton";


function ProductPage() {
  const images = [
    "/assets/dashboard/master1.jpeg",
    "/assets/decore (2).jpg",
    "/assets/dashboard/master4.jpeg",
  ];

  return (
    <>
      <LandingPage2 />
      <LandingPage3 />
      <LandingPage1 />
      <Maincontent />
      <Footer />
      <ScrollToTopButton/>
    </>
  );
}

export default ProductPage;
