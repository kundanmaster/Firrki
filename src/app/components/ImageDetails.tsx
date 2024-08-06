import { useRouter } from 'next/router';
import Image from 'next/image';
import React from 'react';

interface ImageDetails {
  title: string;
  description: string;
}

const imageDetails: Record<string, ImageDetails> = {
  '/assets/dashboard/master9.png': { title: 'Main Image', description: 'This is the main image description.' },
  '/assets/dashboard/master10.jpeg': { title: 'Image 10', description: 'Description for image 10.' },
  '/assets/dashboard/master11.jpeg': { title: 'Image 11', description: 'Description for image 11.' },
  '/assets/dashboard/master12.jpeg': { title: 'Image 12', description: 'Description for image 12.' },
  '/assets/dashboard/master13.jpeg': { title: 'Image 13', description: 'Description for image 13.' },
  '/assets/dashboard/master14.jpeg': { title: 'Image 14', description: 'Description for image 14.' },
  '/assets/dashboard/master15.jpeg': { title: 'Image 15', description: 'Description for image 15.' },
  '/assets/dashboard/master5.jpeg': { title: 'Image 5', description: 'Description for image 5.' },
  '/assets/dashboard/master6.jpeg': { title: 'Image 6', description: 'Description for image 6.' },
};

const ImageDetails: React.FC = () => {
  const router = useRouter();
  const { src } = router.query;

  if (typeof src !== 'string') {
    return <p>Loading...</p>;
  }

  const details = imageDetails[src];

  if (!details) {
    return <p>Image not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <Image
          src={src}
          alt={details.title}
          width={600}
          height={600}
          objectFit="cover"
          className="rounded-lg shadow-md"
        />
        <h1 className="text-2xl font-bold mt-4">{details.title}</h1>
        <p className="mt-2">{details.description}</p>
        <div className="mt-4 flex space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Buy</button>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
