import React from 'react';

const Blog = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="container mx-auto flex py-8">
        <MainContent />
        <Sidebar />
      </div>
      
    </div>
  );
};

const Header = () => (
  <header className="bg-blue-900 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold">BharatRoofers</h1>
      <nav className="flex space-x-4">
        <a href="/" className="hover:text-green-500">Home</a>
        <a href="/property" className="hover:text-green-500">Property</a>
        <a href="/pages" className="hover:text-green-500">Pages</a>
        <a href="/blog" className="hover:text-green-500">Blog</a>
        <a href="/contact" className="hover:text-green-500">Contact</a>
      </nav>
    </div>
  </header>
);

const MainContent = () => (
  <main className="flex-grow">
    <div className="bg-white p-4 rounded shadow-sm mb-4">
      <img src="https://bharatroofers.com/static/media/blog6.1884f99d91c0b1aade14.avif" alt="Post" className="rounded w-full" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Lorem ipsum dolor sit amet</h2>
        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <a href="/" className="text-green-500 hover:text-green-700">Read More</a>
      </div>
    </div>
    {/* Repeat similar blocks for more posts */}
    <div className="bg-white p-4 rounded shadow-sm mb-4">
      <img src="https://bharatroofers.com/static/media/blog4.c13b6b74e4ac48492bfa.avif" alt="Post" className="rounded w-full" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Lorem ipsum dolor sit amet</h2>
        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <a href="/" className="text-green-500 hover:text-green-700">Read More</a>
      </div>
    </div>
  </main>
);

const Sidebar = () => (
  <aside className="w-64 ml-8">
    <div className="bg-white p-4 rounded shadow-sm mb-4">
      <h3 className="text-xl font-bold mb-2">About Me</h3>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3zrKYCOqu13Na1qqCvmdvlCL-LhQSj9swg&s" alt="About" className="rounded-full w-16 h-16 mx-auto mb-2" />
      <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>
    {/* Repeat similar blocks for more sidebar content */}
    <div className="bg-white p-4 rounded shadow-sm mb-4">
      <h3 className="text-xl font-bold mb-2">Popular Feeds</h3>
      <ul>
        <li className="mb-2">
          <a href="/" className="text-green-500 hover:text-green-700">Lorem ipsum dolor sit amet</a>
          <p className="text-gray-600 text-sm">August 25, 2020</p>
        </li>
        <li className="mb-2">
          <a href="/" className="text-green-500 hover:text-green-700">Responsive Web And Desktop Developer</a>
          <p className="text-gray-600 text-sm">August 25, 2020</p>
        </li>
        <li className="mb-2">
          <a href="/" className="text-green-500 hover:text-green-700">Admin Web Is Django Highlights Models</a>
          <p className="text-gray-600 text-sm">August 25, 2020</p>
        </li>
      </ul>
    </div>
    <div className="bg-white p-4 rounded shadow-sm mb-4">
      <h3 className="text-xl font-bold mb-2">Category</h3>
      <ul>
        <li className="mb-2">
          <a href="/" className="text-gray-700 hover:text-gray-900">Design <span className="text-gray-500">(26)</span></a>
        </li>
        <li className="mb-2">
          <a href="/" className="text-gray-700 hover:text-gray-900">Villa House <span className="text-gray-500">(21)</span></a>
        </li>
        <li className="mb-2">
          <a href="/" className="text-gray-700 hover:text-gray-900">Business <span className="text-gray-500">(20)</span></a>
        </li>
      </ul>
    </div>
    <div className="bg-white p-4 rounded shadow-sm mb-4">
      <h3 className="text-xl font-bold mb-2">Instagram Feed</h3>
      <div className="grid grid-cols-3 gap-2">
        <img src="https://bharatroofers.com/uploads/1706280814074-WhatsApp%20Image%202024-01-26%20at%2020.21.48_87b3d98e.jpg" alt="Instagram" className="rounded" />
        <img src="https://bharatroofers.com/static/media/blog8.893a9c1a3a5bba7ae622.avif" alt="Instagram" className="rounded" />
        <img src="https://bharatroofers.com/static/media/blog8.893a9c1a3a5bba7ae622.avif" alt="Instagram" className="rounded" />
      </div>
    </div>
    <div className="bg-white p-4 rounded shadow-sm mb-4">
      <h3 className="text-xl font-bold mb-2">Popular Tags</h3>
      <div className="flex flex-wrap gap-2">
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Popular</span>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Art</span>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Business</span>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Design</span>
      </div>
    </div>
  </aside>
);


export default Blog;
