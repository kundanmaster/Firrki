import Image from "next/image"; // Assuming you're using Next.js
import HeaderLayout from "../components/HeaderLayout";

const ProductPage = () => {
  // Dummy product data
  const products = [
    {
      name: "Vintage Floral Tea Set",
      description: "A beautiful floral tea set perfect for any occasion.",
      price: 4999,
      image: "/assets/tableLinen/image7.png", // Replace with actual image path
    },
    {
      name: "Elegant Glassware Set",
      description: "An exquisite set of glassware for fine dining.",
      price: 7999,
      image: "/assets/tableLinen/image7.png", // Replace with actual image path
    },
    {
      name: "Classic Dinnerware Collection",
      description: "Timeless dinnerware to elevate your dining experience.",
      price: 9999,
      image: "/assets/tableLinen/image7.png", // Replace with actual image path
    },
    {
      name: "Luxury Cutlery Set",
      description: "Premium cutlery set with elegant design.",
      price: 2999,
      image: "/assets/tableLinen/image7.png", // Replace with actual image path
    },
    {
      name: "Cozy Cushion Covers",
      description: "Soft and stylish cushion covers for your home.",
      price: 1299,
      image: "/assets/tableLinen/image7.png", // Replace with actual image path
    },
    {
      name: "Designer Table Runner",
      description: "Add a touch of elegance to your table with this runner.",
      price: 1599,
      image: "/assets/tableLinen/image7.png", // Replace with actual image path
    },
  ];

  return (
    <>
    <HeaderLayout OtherPage={undefined}>s</HeaderLayout>
    <div className="flex">
      {/* Sidebar for Filters */}
      <aside className="w-1/5 p-4 border-r-2 border-gray-200">
        <h2 className="text-lg font-semibold mb-4">FILTER BY</h2>
        <div>
          <h3 className="text-md font-semibold mb-2">CATEGORY</h3>
          <ul className="mb-6">
            {/* Repeat list items for each filter category */}
            <li className="mb-2">
              <input type="checkbox" className="mr-2" />
              Dining
            </li>
            <li className="mb-2">
              <input type="checkbox" className="mr-2" />
              Drinkware & Bar
            </li>
            {/* Add more filters as needed */}
          </ul>
        </div>
        {/* Additional Filters */}
        <div>
          <h3 className="text-md font-semibold mb-2">COLOUR FAMILY</h3>
          <ul className="mb-6">
            {/* List items for color filters */}
            <li className="mb-2">
              <input type="checkbox" className="mr-2" />
              Red
            </li>
            <li className="mb-2">
              <input type="checkbox" className="mr-2" />
              Blue
            </li>
            {/* Add more filters as needed */}
          </ul>
        </div>
        {/* Repeat for other filters like size, price, etc. */}
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            className="w-full p-3 border-2 border-gray-300 rounded-lg"
            placeholder="Search for products..."
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example of a Product Card */}
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden hover:shadow-lg"
            >
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-[50vh] object-cover"
                width={300}
                height={200}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.description}</p>
                <p className="text-lg font-bold mb-4">₹{product.price}</p>
                <button className="w-full bg-primaryrose hover:bg-primaryrosedark text-white py-2 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductPage;
