import React from 'react';

const Testimonial = ({ text, author, image }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md transition transform duration-300 ease-in-out hover:scale-105 hover:shadow-blue-400 hover:shadow-md hover:bg-grey-200 max-w-sm flex flex-col items-center justify-around ">
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
    <section className="bg-white py-12 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Are Saying</h2>
        <div className="md:flex md:flex-wrap md:justify-around md:items-center flex flex-wrap gap-4 p-5">
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
    image: "https://th.bing.com/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&w=249&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    text: "Great service and support throughout the buying process.",
    author: "Sweezen",
    image: "https://th.bing.com/th/id/OIP.NkNw9UFcwKgQ2PqdxCdB8gHaH_?w=700&h=756&rs=1&pid=ImgDetMain",
  },
  {
    text: "I highly recommend BharatRoofers for anyone looking to buy or sell property.",
    author: "Laslay",
    image: "https://i.pinimg.com/originals/f2/44/fb/f244fb1e12a243ac1579731284c73ff0.jpg",
  },
];

export default function App() {
  return <TestimonialSection testimonials={testimonialsData} />;
}
