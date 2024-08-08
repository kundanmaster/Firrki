
import { FaHandSparkles, FaLeaf, FaExchangeAlt, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Anthony Garcia",
    location: "New York",
    text: "Great shopping experience that I haven't seen in a while. I had a great time looking around here and would like to recommend it to everyone.",
  },
  {
    name: "Gloria Simpson",
    location: "Arizona",
    text: "This is one of the best interior stores. They have a lot of things for you to explore. The price is reasonable and customer service is dedicated.",
  },
  {
    name: "Karen Rose",
    location: "San Jose",
    text: "I received my table yesterday. What an exceptional product quality! The delivery service is real quick. This will be one of my favorite stores.",
  },
];

const stats = [
  { value: 236, label: "DESIGN AWARDS" },
  { value: 5204, label: "SATISFIED CUSTOMERS" },
  { value: 143, label: "ON MEDIA" },
  { value: 1592, label: "HAPPY FEEDBACKS" },
];

const TestimonialSection = () => {
  return (
    <div className="relative w-full py-12 px-4 md:px-16 lg:px-32" style={{ backgroundImage: "url('/assets/dashboard/tigerMaster.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex justify-center space-x-8 pb-12">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <FaHandSparkles className="text-pink-600 text-2xl" />
          </div>
          <h3 className="mt-4 font-semibold text-black">Hand Embroidered</h3>
          <p className="text-center text-gray-700">The embroidery on our pieces is done by hand by artisans across India. This is the reason our pieces reflect different styles of Indian artisanal craft.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <FaLeaf className="text-pink-600 text-2xl" />
          </div>
          <h3 className="mt-4 font-semibold text-black">Sustainably Produced</h3>
          <p className="text-center text-gray-700">We do not produce bulk quantities. We also use excess fabric left over from garment production which would otherwise go into landfills.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <FaExchangeAlt className="text-pink-600 text-2xl" />
          </div>
          <h3 className="mt-4 font-semibold text-black">Easy Returns & Exchanges</h3>
          <p className="text-center text-gray-700">If you are not fully satisfied with your purchase, or wish to exchange, we offer an easy returns and exchange policy.</p>
        </div>
      </div>
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-black">Testimonial</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative">
            <div className="flex items-center justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            <p className="text-lg italic mb-2 text-black leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
              {testimonial.text}
            </p>
            <p className="font-semibold text-black">{testimonial.name}</p>
            <p className="text-sm text-gray-700">{testimonial.location}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-8 mt-12 text-black">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-4xl font-bold">{stat.value}</h3>
            <p className="text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
