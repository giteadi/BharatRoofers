import React from 'react';

const Blogs = () => {
  return (
    <div className="bg-gray-100 py-12" id="blogs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Blogs</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Stay updated with our latest news and articles
          </p>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Blog Post Title 1</h3>
              <p className="mt-2 text-sm text-gray-500">
                A brief description of the blog post goes here. It gives a glimpse of the content inside.
              </p>
            </div>
          </div>
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Blog Post Title 2</h3>
              <p className="mt-2 text-sm text-gray-500">
                A brief description of the blog post goes here. It gives a glimpse of the content inside.
              </p>
            </div>
          </div>
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Blog Post Title 3</h3>
              <p className="mt-2 text-sm text-gray-500">
                A brief description of the blog post goes here. It gives a glimpse of the content inside.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
