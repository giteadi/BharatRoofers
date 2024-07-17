import React from 'react';
import { useParams } from 'react-router-dom';

const SinglePage = () => {
  const { postId } = useParams();
  
  
  const imageArray = [
    {
      id: 1,
      link: "https://thumbs.dreamstime.com/b/beautiful-house-flowers-garden-318576951.jpg",
      post: {
        id: 1,
        title: "Post 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imagePosition: "left"
      }
    },
    {
      id: 2,
      link: "https://w0.peakpx.com/wallpaper/257/683/HD-wallpaper-beautiful-house-gate-windows-house-flowers-white-thumbnail.jpg",
      post: {
        id: 2,
        title: "Post 2",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imagePosition: "right"
      }
    },
    {
      id: 3,
      link: "https://media.istockphoto.com/id/1269776313/photo/suburban-house.jpg?s=2048x2048&w=is&k=20&c=EbPPSMkI6lNpsSnKAUiVV3fR5XzAEbu3AQbBr-K4jdc=",
      post: {
        id: 3,
        title: "Post 3",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imagePosition: "left"
      }
    },
    {
      id: 4,
      link: "https://media.istockphoto.com/id/178988183/photo/house-in-bad-summer-thunderstorm.webp?b=1&s=170667a&w=0&k=20&c=GCKr4PR2gErNiBLYPnH75IbcHEl1PcCVbmoqRUfCAKs=",
      post: {
        id: 4,
        title: "Post 4",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imagePosition: "right"
      }
    }
  ];

  
  console.log(imageArray, postId)
  const post = imageArray.find(item => item.post.id == Number(postId));
  if (!post) return <div>Post not found</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{post.post.title}</h2>
      <img src={post.link} alt={post.post.title} className="h-auto w-full object-cover rounded-lg mb-4" />
      <p className="text-gray-700">{post.post.content}</p>
    </div>
  );
};

export default SinglePage;
