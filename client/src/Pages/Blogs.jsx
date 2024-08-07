import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextRevealCardPreview } from '../Components/CardAnimation';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'The Critical Role of Home Inspections: A Buyers Guide to Informed Decisions',
      image: 'https://media.istockphoto.com/id/178988183/photo/house-in-bad-summer-thunderstorm.webp?b=1&s=170667a&w=0&k=20&c=GCKr4PR2gErNiBLYPnH75IbcHEl1PcCVbmoqRUfCAKs=',
      content: 'Escape to this stunning villa nestled along the coast, offering breathtaking views of the azure waters. This spacious retreat features modern amenities and expansive living areas, perfect for both relaxation and entertainment. Enjoy seamless indoor-outdoor living with private terraces and a lush garden oasis.',
    },
    {
      id: 2,
      title: 'New Construction vs. Resale Homes: Making the Right Choice for Your Next Property',
      image: 'https://media.istockphoto.com/id/453944565/photo/home-exterior.webp?b=1&s=170667a&w=0&k=20&c=ONvmTRg63RYsyMJTnySOLpOBZlaoUeh6a9jfYuVQ_iw=',
      content: 'In the quest for a new home, buyers often face the dilemma of choosing between new construction and resale properties. Each option comes with its own set of advantages and drawbacks, making the decision a crucial one in the home-buying journey.',
    },
    {
      id: 3,
      title: 'Looking for1 BHK Apartment Duplex',
      image: 'https://bharatroofers.com/static/media/blog3.a868ed5bc837e5adec6a.avif',
      content: "Imagine having a cozy yet multi-level living space. That's precisely what a 1 BHK apartment duplex offers - a one-bedroom home spread across two levels, typically featuring a bedroom, a living area, and a kitchen. It's a smart fusion of compactness and practicality",
    },
    {
      id: 4,
      title: 'Budget Allocations and Real Estate: Paving the Path Ahead',
      image: 'https://bharatroofers.com/static/media/blog4.c13b6b74e4ac48492bfa.avif',
      content: "Budget allocations in real estate are the architectural blueprints of success. They delineate the financial framework within which the industry operates, affecting everything from property development to market stability.",
    },
    {
      id: 5,
      title: 'Buying a 1 BHK Apartment: Ideal Space for Comfortable Living',
      image: 'https://bharatroofers.com/static/media/blog8.893a9c1a3a5bba7ae622.avif',
      content: "Finding the perfect home is a thrilling yet daunting task. For many individuals or couples looking for their first property or an investment opportunity, a 1 BHK (Bedroom, Hall, Kitchen) apartment offers a promising and practical choice.",
    },
    {
      id: 6,
      title: 'Looking for Rented House: Deciphering 2BHK vs. 3BHK',
      image: 'https://bharatroofers.com/static/media/blog5.0eed389ad68383154b5d.jpg',
      content: "The quest for a rented house, be it a 2BHK or 3BHK, is a significant decision that intertwines numerous considerations. Choosing the ideal abode involves a blend of personal preferences, financial analysis, and future aspirations.",
    },
    {
      id: 7,
      title: 'Looking for a 1 BHK Flat on Rent',
      image: 'https://bharatroofers.com/static/media/blog6.1884f99d91c0b1aade14.avif',
      content: "Moving into a new place is an exhilarating experience, but the quest for the perfect 1 BHK (One Bedroom Hall Kitchen) flat on rent can often feel like a daunting task. This guide aims to simplify this journey by providing insights, tips, and guidance to ease your search process.",
    },
    {
      id: 8,
      title: 'Sale on 2-3 BHK House: Navigating the Real Estate Market',
      image: 'https://bharatroofers.com/static/media/blog8.893a9c1a3a5bba7ae622.avif',
      content: "Real estate markets have been abuzz with the enticing prospects of buying or selling 2-3 BHK houses. As the real estate landscape continues to evolve, these properties have garnered substantial attention for their versatility.",
    },

  ];

  const navigate = useNavigate();

  const handleClick = (postId) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <div className="container max-w-screen mx-auto px-4 py-8">
      {/* <span className="flex justify-center items-center text-4xl font-bold underline">Blogs</span> */}
      <span>
        <TextRevealCardPreview/>
      </span>
      {posts.map((post, index) => (
        <div
          key={post.id}
          className={`flex flex-col md:flex-row items-center mb-8 ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
          onClick={() => handleClick(post.id)}
          style={{ cursor: 'pointer' }}
        >
          <div className="w-full md:max-w-[40rem] md:h-1/2 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="h-64 md:min-w-[40rem] cursor-pointer object-fit rounded-lg transition-transform duration-500 transform hover:scale-110 w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
