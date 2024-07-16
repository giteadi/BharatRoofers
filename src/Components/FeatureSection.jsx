import React, { useState } from 'react';
import { FaHome, FaBuilding, FaRegBuilding, FaTimes } from 'react-icons/fa';
import Carausal from './Carausal';
import Carousel3 from './Carausal3';
import CarouselSlider from '../Pages/CardSlider';
const FeatureSection = () => {
  const imageArray = [
    "https://solverwp.com/demo/react/mingrand/assets/img/product/cat-1.png",
    "https://solverwp.com/demo/react/mingrand/assets/img/product/cat-2.png",
    "https://solverwp.com/demo/react/mingrand/assets/img/product/cat-3.png",
    "https://solverwp.com/demo/react/mingrand/assets/img/product/cat-4.png"
  ];
  const titles = [
    "Image 1 Title",
    "Image 2 Title",
    "Image 3 Title",
    "Image 4 Title",
    "Image 5 Title",
    "Image 6 Title",
    "Image 7 Title"
];
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  function handleClick() {
    setIsVideoOpen(!isVideoOpen); 
  }

  return (
    <div>
      {/* Image Grid Section */}
      <section className="mt-8 md:mt-12 max-w-screen mx-auto flex items-center justify-center px-4 hover:cursor-pointer">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl w-full">
          <div className="col-span-2 sm:col-span-1 md:col-span-2 relative overflow-hidden">
            <img
              src="https://solverwp.com/demo/react/mingrand/assets/img/product/cat-1.png"
              alt="home1"
              className="transition-transform duration-500 transform hover:scale-110 w-full h-full object-cover"
            />
            <p className="text-white text-3xl transition delay-100 ease-in-out transform hover:text-green-400 font-bold absolute top-5 left-5">Orchard</p>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-2 relative overflow-hidden">
            <img
              src="https://solverwp.com/demo/react/mingrand/assets/img/product/cat-2.png"
              alt="home2"
              className="transition-transform duration-500 transform hover:scale-110 w-full h-full object-cover"
            />
            <p className="text-white text-3xl transition delay-100 ease-in-out transform hover:text-green-400 font-bold absolute top-5 left-5">Rose Cottage</p>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-2 relative overflow-hidden">
            <img
              src="https://solverwp.com/demo/react/mingrand/assets/img/product/cat-3.png"
              alt="home3"
              className="transition-transform duration-500 transform hover:scale-110 w-full h-full object-cover"
            />
            <p className="text-white text-3xl transition delay-100 ease-in-out transform hover:text-green-400 font-bold absolute top-5 left-5">Ong Barn</p>
          </div>
          <div className="col-span-2 sm:col-span-3 md:col-span-4 relative overflow-hidden">
            <img
              src="https://solverwp.com/demo/react/mingrand/assets/img/product/cat-4.png"
              alt="home4"
              className="transition-transform duration-500 transform hover:scale-110 w-full h-full object-cover"
            />
            <p className="text-white text-3xl transition delay-100 ease-in-out transform hover:text-green-400 font-bold absolute top-5 left-5">Beach House</p>
          </div>
          <div className="col-span-2 sm:col-span-3 md:col-span-2 relative overflow-hidden">
            <img
              src="https://solverwp.com/demo/react/mingrand/assets/img/product/cat-5.png"
              alt="home5"
              className="transition-transform duration-500 transform hover:scale-110 w-full h-full object-cover"
            />
            <p className='text-white text-3xl transition delay-300 transform:ease-in-out hover:text-green-400  font-bold absolute top-5 left-5'>Family House</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 md:mb-8">Explore Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaHome className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Buy a Home</h3>
              <p className="text-gray-600">Find your dream home from our extensive collection of listings.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaBuilding className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Rent a Home</h3>
              <p className="text-gray-600">Explore rental options that suit your budget and lifestyle.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaRegBuilding className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Sell a Home</h3>
              <p className="text-gray-600">Get the best value for your property with our expert assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Carosal */}
      <section>
        <Carausal />
      </section>

      {/* Video section */}
      <section className="bg-black w-full h-[35rem] relative overflow-hidden">
  <div className="absolute inset-0">
    <img src="https://c4.wallpaperflare.com/wallpaper/846/173/87/5c1cbaf96bcec-wallpaper-preview.jpg" alt="bg_image" className="object-cover w-full h-full filter blur-sm opacity-20" />
  </div>
  <div className="absolute inset-0 flex items-center justify-center">
    {isVideoOpen ? (
      <div className="relative w-screen">
        <button onClick={handleClick} className="absolute top-2 right-2 text-white">
          <FaTimes className="text-2xl hover:text-gray-300" />
        </button>
        <iframe
          width="100%"
          height="525"
          src="https://www.youtube.com/embed/4BzjUq921Y4?si=OayxmXarULwq_ZY3"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    ) : (
      <div className="flex items-center space-x-8">
        <button onClick={handleClick} className="flex items-center justify-center h-20 w-20 bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-75">
          <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA5L3JtNTgxLWVsZW1lbnQtMTA2LnBuZw.png" alt="click button" className="h-12 w-12 object-contain" />
        </button>
        <div className="text-white">
          <h2 className="text-2xl font-bold mb-2">Watch Our Work</h2>
          <p className="text-lg">
            Discover the amazing projects and creative work we have done. Click the button to watch the video and see for yourself!
          </p>
        </div>
      </div>
    )}
  </div>
</section>


      {/* Recommanded */}
      <span className=' font-bold flex  items-center justify-center text-3xl font-bold text-center mb-6 md:mb-8 mt-6'>Our Property</span>
      <section  className='flex justify-around items-center flex-wrap'>
        <div>
          <p className='text-2xl font-bold flex items-center justify-center'>Recomended Property</p>
        <CarouselSlider titles={titles} images={imageArray}/>
        </div>
        <div>
          <p className='text-2xl font-bold flex items-center justify-center'>Most View</p>
        <CarouselSlider titles={titles} images={imageArray}/>
        </div>
       <div>
        <p className='text-2xl font-bold flex items-center justify-center'>Recents projects</p>
       <CarouselSlider titles={titles} images={imageArray}/>
       </div>
      </section>
    </div>

  );
};

export default FeatureSection;
