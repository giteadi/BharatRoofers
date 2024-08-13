import React from 'react';

const Testimonial = ({ text, author, image }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md transition transform duration-300 ease-in-out hover:scale-105 hover:shadow-blue-400 hover:shadow-md hover:bg-grey-200 max-w-sm flex flex-col gap-5 items-center justify-around">
      <img
        src={image}
        alt={author}
        className="w-16 h-16 rounded-full mx-auto mb-4 transition transform duration-300 ease-in-out hover:scale-110"
      />
      <p className="text-gray-600 mb-4">"{text}"</p>
      <p className="font-semibold">- {author}</p>
    </div>
  );
};

const TestimonialSection = ({ testimonials }) => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Are Saying</h2>
        <div className="flex flex-wrap justify-around items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 p-5">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              text={testimonial.text}
              author={testimonial.author}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Example usage
const testimonialsData = [
  {
    text: "BharatRoofers helped me find the perfect home for my family.",
    author: "Katty",
    image: "https://imgs.search.brave.com/fbxInw05M6mkNEHaT64Qm3dNEzTIVXrwCD4lxk4ve3A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE3LzM0LzY3/LzM2MF9GXzIxNzM0/Njc4Ml83WHBDVHQ4/YkxOSnF2VkFhRFpK/d3Zaam0wZXBRbWo2/ai5qcGc",
  },
  {
    text: "Great service and support throughout the buying process.",
    author: "Sweezen",
    image: "https://imgs.search.brave.com/fbxInw05M6mkNEHaT64Qm3dNEzTIVXrwCD4lxk4ve3A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE3LzM0LzY3/LzM2MF9GXzIxNzM0/Njc4Ml83WHBDVHQ4/YkxOSnF2VkFhRFpK/d3Zaam0wZXBRbWo2/ai5qcGc",
  },
  {
    text: "I highly recommend BharatRoofers for anyone looking to buy or sell property.",
    author: "Laslay",
    image: "https://imgs.search.brave.com/fbxInw05M6mkNEHaT64Qm3dNEzTIVXrwCD4lxk4ve3A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE3LzM0LzY3/LzM2MF9GXzIxNzM0/Njc4Ml83WHBDVHQ4/YkxOSnF2VkFhRFpK/d3Zaam0wZXBRbWo2/ai5qcGc",
  },
];

export default function App() {
  return <TestimonialSection testimonials={testimonialsData} />;
}
