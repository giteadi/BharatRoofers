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
    author: "John Doe",
    image: "https://render.fineartamerica.com/images/rendered/default/poster/7/8/break/images/artworkimages/medium/3/doremon-deepak-pengoria.jpg",
  },
  {
    text: "Great service and support throughout the buying process.",
    author: "Jane Smith",
    image: "https://i.pinimg.com/736x/53/b6/32/53b6320b4c36ada89533f6d2d3c881e0.jpg",
  },
  {
    text: "I highly recommend BharatRoofers for anyone looking to buy or sell property.",
    author: "Michael Brown",
    image: "https://i.pinimg.com/564x/36/53/e5/3653e53d2bdf1402859c6b95dbdae098.jpg",
  },
];

export default function App() {
  return <TestimonialSection testimonials={testimonialsData} />;
}
