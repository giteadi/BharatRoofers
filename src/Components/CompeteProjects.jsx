import React from 'react';

const CompletedProjects = () => {
  // Example data for completed projects
  const projects = [
    {
      id: 1,
      title: 'Modern Apartment',
      description: 'A luxurious apartment project completed in 2023.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
      tags: ['Residential', 'Luxury'],
    },
    {
      id: 2,
      title: 'Corporate Office Building',
      description: 'State-of-the-art office building designed for productivity.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
      tags: ['Commercial', 'Office'],
    },
    {
      id: 3,
      title: 'Renovated Historic Landmark',
      description: 'Historical landmark restored to its former glory.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
      tags: ['Historical', 'Renovation'],
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Completed Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-500 text-white px-2 py-1 text-sm rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompletedProjects;
