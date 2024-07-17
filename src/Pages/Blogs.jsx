import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextRevealCardPreview } from '../Components/CardAnimation';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Luxurious Villa with Ocean View',
      image: 'https://media.istockphoto.com/id/178988183/photo/house-in-bad-summer-thunderstorm.webp?b=1&s=170667a&w=0&k=20&c=GCKr4PR2gErNiBLYPnH75IbcHEl1PcCVbmoqRUfCAKs=',
      content: 'Escape to this stunning villa nestled along the coast, offering breathtaking views of the azure waters. This spacious retreat features modern amenities and expansive living areas, perfect for both relaxation and entertainment. Enjoy seamless indoor-outdoor living with private terraces and a lush garden oasis.',
    },
    {
      id: 2,
      title: 'Charming Countryside Cottage',
      image: 'https://media.istockphoto.com/id/453944565/photo/home-exterior.webp?b=1&s=170667a&w=0&k=20&c=ONvmTRg63RYsyMJTnySOLpOBZlaoUeh6a9jfYuVQ_iw=',
      content: 'Discover the allure of country living in this picturesque cottage surrounded by rolling hills and tranquil nature. The cottage exudes rustic charm with exposed beams and a cozy fireplace, creating a warm ambiance year-round. Perfect for those seeking serenity and a connection to nature, yet just a short drive from bustling town centers.',
    },
    {
      id: 3,
      title: 'Cozy Mountain Cabin',
      image: 'https://media.istockphoto.com/id/178988183/photo/house-in-bad-summer-thunderstorm.webp?b=1&s=170667a&w=0&k=20&c=GCKr4PR2gErNiBLYPnH75IbcHEl1PcCVbmoqRUfCAKs=',
      content: 'Experience the peace and tranquility of mountain life in this cozy cabin nestled in the heart of the Rockies. With panoramic views and access to hiking trails, this retreat offers a perfect blend of adventure and relaxation. Ideal for those looking to escape the hustle and bustle and reconnect with nature.',
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
              className="h-64 md:min-w-[40rem] cursor-pointer object-cover rounded-lg transition-transform duration-500 transform hover:scale-110 w-full h-full object-cover"
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
