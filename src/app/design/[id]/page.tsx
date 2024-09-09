


// "use client"

// import { useParams, useRouter } from 'next/navigation';
// import Image from 'next/image';
// import HeaderLayout from '../../components/HeaderLayout';
// import Footer from '../../components/DashComponents/Footer';

// const ProductDetails = () => {
//   const router = useRouter();
//   const { id } = useParams();
// console.log(id);

//   // Sample data, you might fetch this from an API or use context
//   const products = {
//     1: {
//       id: 1,
//       image: '/assets/design/img1.png',
//       name: 'Beehive Glass Vase Olive',
//       price: '₹3,897.90',
//       originalPrice: '₹5,400.00',
//       description: 'A beautiful glass vase with a beehive pattern in olive color.',
//     },
//     2: {
//       id: 2,
//       image: '/assets/design/img2.jpeg',
//       name: 'Elegant Table Lamp',
//       price: '₹2,500.00',
//       originalPrice: '₹3,200.00',
//       description: 'A stylish and modern table lamp for your bedroom or living room.',
//     },
//     3: {
//       id: 3,
//       image: '/assets/design/design1.jpg',
//       name: 'Wooden Bed Frame',
//       price: '₹15,000.00',
//       originalPrice: '₹18,000.00',
//       description: 'A handcrafted wooden bed frame that adds warmth to any bedroom.',
//     },
//   };

//   const product = products[id as unknown as keyof typeof products];

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   return (
//     <div>
//       <HeaderLayout OtherPage={undefined}>.</HeaderLayout>

//       <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full flex">
//           <div className="w-1/2 p-6">
//             <Image
//               src={product.image}
//               alt={product.name}
//               width={500}
//               height={500}
//               className="object-contain"
//             />
//           </div>
//           <div className="w-1/2 p-6 flex flex-col items-start">
//             <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
//             <p className="text-gray-500 mb-2 line-through">{product.originalPrice}</p>
//             <p className="text-green-600 text-lg font-bold mb-4">{product.price}</p>
//             <p className="text-gray-600 mb-4">{product.description}</p>
//             <button className="bg-primaryrose text-white px-4 py-2 rounded-md hover:bg-primaryrosedark mb-2">
//               Buy Now
//             </button>
//             <button className="bg-primaryrose text-white px-4 py-2 rounded-md hover:bg-primaryrosedark mb-2">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default ProductDetails;


// "use client";

// import { useParams, useRouter } from 'next/navigation';
// import Image from 'next/image';
// import HeaderLayout from '../../components/HeaderLayout';
// import Footer from '../../components/DashComponents/Footer';

// const ProductDetails = () => {
//   const router = useRouter();
//   const { id } = useParams();
//   console.log(id);

//   // Sample data, you might fetch this from an API or use context
//   const products = {
//     1: {
//       id: 1,
//       image: '/assets/design/img1.png',
//       name: 'Beehive Glass Vase Olive',
//       price: '₹3,897.90',
//       originalPrice: '₹5,400.00',
//       description: 'A beautiful glass vase with a beehive pattern in olive color.',
//       relatedImages: [
//         '/assets/design/design1.jpg',
//         '/assets/design/design2.jpg',
//         '/assets/design/design3.jpg',
//       ],
//     },
//     2: {
//       id: 2,
//       image: '/assets/design/img2.jpeg',
//       name: 'Elegant Table Lamp',
//       price: '₹2,500.00',
//       originalPrice: '₹3,200.00',
//       description: 'A stylish and modern table lamp for your bedroom or living room.',
//       relatedImages: [
//         '/assets/design/design1.jpg',
//         '/assets/design/design2.jpg',
//         '/assets/design/design3.jpg',
//       ],
//     },
//     3: {
//       id: 3,
//       image: '/assets/design/design1.jpg',
//       name: 'Wooden Bed Frame',
//       price: '₹15,000.00',
//       originalPrice: '₹18,000.00',
//       description: 'A handcrafted wooden bed frame that adds warmth to any bedroom.',
//       relatedImages: [
//         '/assets/design/design1.jpg',
//         '/assets/design/design2.jpg',
//         '/assets/design/design3.jpg',
//       ],
//     },
//   };

//   const product = products[id as unknown as keyof typeof products];

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   return (
//     <div>
//       <HeaderLayout OtherPage={undefined}>.</HeaderLayout>

//       <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full flex flex-col">
//           <div className="w-full p-6 flex">
//             <div className="w-1/2 p-6">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 width={500}
//                 height={500}
//                 className="object-contain"
//               />
//             </div>
//             <div className="w-1/2 p-6 flex flex-col items-start">
//               <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
//               <p className="text-gray-500 mb-2 line-through">{product.originalPrice}</p>
//               <p className="text-green-600 text-lg font-bold mb-4">{product.price}</p>
//               <p className="text-gray-600 mb-4">{product.description}</p>
//               <button className="bg-primaryrose text-white px-4 py-2 rounded-md hover:bg-primaryrosedark mb-2">
//                 Buy Now
//               </button>
//               <button className="bg-primaryrose text-white px-4 py-2 rounded-md hover:bg-primaryrosedark mb-2">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
          
//           {/* Related Images */}
//           <div className="w-full p-6">
//             <h3 className="text-xl font-semibold mb-4">Related Images</h3>
//             <div className="flex gap-4">
//               {product.relatedImages.map((image, index) => (
//                 <div key={index} className="w-1/4">
//                   <Image
//                     src={image}
//                     alt={`Related image ${index + 1}`}
//                     width={200}
//                     height={200}
//                     className="object-contain"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default ProductDetails;

"use client";

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import HeaderLayout from '../../components/HeaderLayout';
import Footer from '../../components/DashComponents/Footer';

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);

  // Sample data, you might fetch this from an API or use context
  const products = {
    1: {
      id: 1,
      image: '/assets/design/img1.png',
      name: 'Beehive Glass Vase Olive',
      price: '₹3,897.90',
      originalPrice: '₹5,400.00',
      description: 'A beautiful glass vase with a beehive pattern in olive color.',
      relatedImages: [
        '/assets/design/design1.jpg',
        '/assets/design/design2.jpg',
        '/assets/design/design3.jpg',
      ],
    },
    2: {
      id: 2,
      image: '/assets/design/img2.jpeg',
      name: 'Elegant Table Lamp',
      price: '₹2,500.00',
      originalPrice: '₹3,200.00',
      description: 'A stylish and modern table lamp for your bedroom or living room.',
      relatedImages: [
        '/assets/design/lamp1.png',
        '/assets/design/lamp2.png',
        '/assets/design/img2.jpeg',
      ],
    },
    3: {
      id: 3,
      image: '/assets/design/design1.jpg',
      name: 'Wooden Bed Frame',
      price: '₹15,000.00',
      originalPrice: '₹18,000.00',
      description: 'A handcrafted wooden bed frame that adds warmth to any bedroom.',
      relatedImages: [
        '/assets/design/design1.jpg',
        '/assets/design/design2.jpg',
        '/assets/design/design3.jpg',
      ],
    },
  };

  const product = products[id as unknown as keyof typeof products];

  // State for the main image
  const [mainImage, setMainImage] = useState(product.image);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <HeaderLayout OtherPage={undefined}>.</HeaderLayout>

      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-5xl w-full flex">
          {/* Main Image */}
          <div className="w-2/4 p-6">
            <Image
              src={mainImage}
              alt={product.name}
              width={800}
              height={800}
              className="object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="w-1/3 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-500 mb-2 line-through">{product.originalPrice}</p>
              <p className="text-green-600 text-lg font-bold mb-4">{product.price}</p>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex gap-4 mb-4">
                <button className="bg-primaryrose text-white px-2 py-2 rounded-md hover:bg-primaryrosedark">
                  Buy Now
                </button>
                <button className="bg-primaryrose text-white px-4 py-2 rounded-md hover:bg-primaryrosedark">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Related Images */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Related Images</h3>
              <div className="flex gap-4 overflow-x-auto">
                {product.relatedImages.map((image, index) => (
                  <div
                    key={index}
                    className="cursor-pointer w-1/4"
                    onClick={() => setMainImage(image)}
                  >
                    <Image
                      src={image}
                      alt={`Related image ${index + 1}`}
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;

