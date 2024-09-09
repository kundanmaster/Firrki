

// "use client"
// import { useState } from 'react';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation'; // Use next/navigation
// import HeaderLayout from '../components/HeaderLayout';
// import Footer from '../components/DashComponents/Footer';

// export default function DesignPage() {
//   const [selectedProduct, setSelectedProduct] = useState<any>(null);
//   const router = useRouter(); // Initialize useRouter from next/navigation

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

//   const handleHotspotClick = (productId: number) => {
//     setSelectedProduct(products[productId]);
//   };

//   const handleViewProductClick = (productId: number) => {
//     router.push(`/design/${productId}`); // Navigate to the product details page with ID
//   };

//   return (
//     <div>
//       <HeaderLayout OtherPage={undefined}>.</HeaderLayout>

//       <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-7xl w-full flex">
//           <div
//             className={`relative ${
//               selectedProduct ? 'w-2/3' : 'w-full'
//             } transition-all duration-500 h-[33rem]`}
//           >
//             <Image
//               src="/assets/design/maindesign.jpg"
//               alt="Bedroom Design"
//               layout="fill"
//               objectFit="cover"
//               className="w-full h-full object-cover"
//             />

//             <div className="absolute top-1/4 left-1/4">
//               <div
//                 onClick={() => handleHotspotClick(1)}
//                 className="bg-white border-2 border-gray-400 rounded-full w-6 h-6 cursor-pointer flex items-center justify-center"
//                 title="Hotspot 1"
//               >
//                 <span className="text-gray-600">+</span>
//               </div>
//             </div>
//             <div className="absolute top-1/2 left-2/3">
//               <div
//                 onClick={() => handleHotspotClick(2)}
//                 className="bg-white border-2 border-gray-400 rounded-full w-6 h-6 cursor-pointer flex items-center justify-center"
//                 title="Hotspot 2"
//               >
//                 <span className="text-gray-600">+</span>
//               </div>
//             </div>
//             <div className="absolute bottom-1/4 left-1/2">
//               <div
//                 onClick={() => handleHotspotClick(3)}
//                 className="bg-white border-2 border-gray-400 rounded-full w-6 h-6 cursor-pointer flex items-center justify-center"
//                 title="Hotspot 3"
//               >
//                 <span className="text-gray-600">+</span>
//               </div>
//             </div>
//           </div>

//           {selectedProduct && (
//             <div className="w-1/3 h-[33rem] bg-white p-6 shadow-lg flex flex-col items-center justify-center transition-all duration-500">
//               <Image
//                 src={selectedProduct.image}
//                 alt={selectedProduct.name}
//                 width={150}
//                 height={150}
//                 className="object-contain mb-4"
//               />
//               <h2 className="text-xl font-semibold mb-2">{selectedProduct.name}</h2>
//               <p className="text-gray-500 mb-2 line-through">{selectedProduct.originalPrice}</p>
//               <p className="text-green-600 text-lg font-bold mb-4">{selectedProduct.price}</p>
//               <p className="text-gray-600 text-center mb-4">{selectedProduct.description}</p>
//               <button
//                 onClick={() => handleViewProductClick(selectedProduct.id)}
//                 className="bg-primaryrose text-white px-4 py-2 rounded-md hover:bg-primaryrosedark mb-2"
//               >
//                 View Product Details
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Use next/navigation
import HeaderLayout from '../components/HeaderLayout';
import Footer from '../components/DashComponents/Footer';

// Step 1: Define ProductType Interface
interface ProductType {
  id: number;
  image: string;
  name: string;
  price: string;
  originalPrice: string;
  description: string;
}

export default function DesignPage() {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null); // Ensure state type is ProductType or null
  const router = useRouter(); // Initialize useRouter from next/navigation

  // Step 2: Define products with numeric keys and ProductType values
  const products: { [key: number]: ProductType } = {
    1: {
      id: 1,
      image: '/assets/design/img1.png',
      name: 'Beehive Glass Vase Olive',
      price: '₹3,897.90',
      originalPrice: '₹5,400.00',
      description: 'A beautiful glass vase with a beehive pattern in olive color.',
    },
    2: {
      id: 2,
      image: '/assets/design/img2.jpeg',
      name: 'Elegant Table Lamp',
      price: '₹2,500.00',
      originalPrice: '₹3,200.00',
      description: 'A stylish and modern table lamp for your bedroom or living room.',
    },
    3: {
      id: 3,
      image: '/assets/design/design1.jpg',
      name: 'Wooden Bed Frame',
      price: '₹15,000.00',
      originalPrice: '₹18,000.00',
      description: 'A handcrafted wooden bed frame that adds warmth to any bedroom.',
    },
  };

  const handleHotspotClick = (productId: number) => {
    setSelectedProduct(products[productId]); // Use productId to fetch product
  };

  const handleViewProductClick = (productId: number) => {
    router.push(`/design/${productId}`); // Navigate to the product details page with ID
  };

  return (
    <div>
      <HeaderLayout OtherPage={undefined}>.</HeaderLayout>

      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-7xl w-full flex">
          <div
            className={`relative ${
              selectedProduct ? 'w-2/3' : 'w-full'
            } transition-all duration-500 h-[33rem]`}
          >
            <Image
              src="/assets/design/maindesign.jpg"
              alt="Bedroom Design"
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-1/4 left-1/4">
              <div
                onClick={() => handleHotspotClick(1)}
                className="bg-white border-2 border-gray-400 rounded-full w-6 h-6 cursor-pointer flex items-center justify-center"
                title="Hotspot 1"
              >
                <span className="text-gray-600">+</span>
              </div>
            </div>
            <div className="absolute top-1/2 left-2/3">
              <div
                onClick={() => handleHotspotClick(2)}
                className="bg-white border-2 border-gray-400 rounded-full w-6 h-6 cursor-pointer flex items-center justify-center"
                title="Hotspot 2"
              >
                <span className="text-gray-600">+</span>
              </div>
            </div>
            <div className="absolute bottom-1/4 left-1/2">
              <div
                onClick={() => handleHotspotClick(3)}
                className="bg-white border-2 border-gray-400 rounded-full w-6 h-6 cursor-pointer flex items-center justify-center"
                title="Hotspot 3"
              >
                <span className="text-gray-600">+</span>
              </div>
            </div>
          </div>

          {selectedProduct && (
            <div className="w-1/3 h-[33rem] bg-white p-6 shadow-lg flex flex-col items-center justify-center transition-all duration-500">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                width={150}
                height={150}
                className="object-contain mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{selectedProduct.name}</h2>
              <p className="text-gray-500 mb-2 line-through">{selectedProduct.originalPrice}</p>
              <p className="text-green-600 text-lg font-bold mb-4">{selectedProduct.price}</p>
              <p className="text-gray-600 text-center mb-4">{selectedProduct.description}</p>
              <button
                onClick={() => handleViewProductClick(selectedProduct.id)}
                className="bg-primaryrose text-white px-4 py-2 rounded-md hover:bg-primaryrosedark mb-2"
              >
                View Product Details
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
