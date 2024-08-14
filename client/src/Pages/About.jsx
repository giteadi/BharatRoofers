import React from 'react';
import { Helmet } from 'react-helmet';
import {Container} from 'react-bootstrap'
const canonicalUrl = window.location.href;

const AboutPage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
    <Container>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
  
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <section id="About" className="bg-white py-10">
          <h1 className="text-4xl font-extrabold text-gray-900 text-left">About Us</h1>
          <p className="mt-4 text-gray-700">
            Welcome to Bharat Roofers, your premier destination for all property needs in Jabalpur, Madhya Pradesh. With a commitment to excellence and a passion for serving our clients, Bharat Roofers has established itself as a trusted name in the real estate industry.
          </p>
          <p className="mt-4 text-gray-700">
            At Bharat Roofers, we understand the importance of finding the perfect property to suit your needs. Whether you're searching for a plot, house, villa, farmhouse, or commercial space, we have a diverse range of options. Our extensive portfolio includes properties available for both sale and rent, ensuring that we can cater to every requirement.
          </p>
          <p className="mt-4 text-gray-700">
            With years of experience in the local market, our team of professionals possesses in-depth knowledge and expertise to assist you throughout your property journey. We prioritize transparency, integrity, and personalized service, ensuring that each client receives the attention and support they deserve.
          </p>
          <p className="mt-4 text-gray-700">
            Experience the difference with Bharat Roofers as we strive to exceed your expectations and make your property dreams a reality.
          </p>
          <h4 className="mt-8 text-2xl font-bold">Our Vision</h4>
          <p className="mt-2 text-gray-700">Changing the way India experiences property.</p>
          <h4 className="mt-8 text-2xl font-bold">Our Mission</h4>
          <p className="mt-2 text-gray-700">
            To be the first choice of our consumers and partners in discovering, renting, buying, selling, and financing a home, and digitally enabling them throughout their journey. We do that with data, design, technology, and above all, the passion of our people while delivering value to our shareholders.
          </p>
          <img src="https://th.bing.com/th/id/OIP.cgn2iMWQBHPgwm14g_eqtgHaE8?w=1500&h=1000&rs=1&pid=ImgDetMain" alt="Property Image" className="mt-10 w-full h-96 object-cover rounded-lg shadow-md"/>
        </section>
  
        <section id="Our-Value" className="bg-gray-100 py-10">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 p-4">
              <img src="https://cdn.americanfinancing.net/images/gallery/learning-center/open_graph/man-holding-two-homes-for-buying-selling_2x.jpg?1510351910" alt="Our Value" className="w-full h-96 object-cover rounded-lg shadow-md"/>
            </div>
            <div className="w-full lg:w-1/2 p-4 flex items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Is spreading joy your mantra too?</h3>
                <p className="mt-4 text-gray-700">Shoot us an email at <a href="mailto:careers@bharatroofers.com" className="text-blue-600 underline">careers@bharatroofers.com</a> and we'll be happy to meet you</p>
              </div>
            </div>
          </div>
        </section>
  
        <section id="Our" className="bg-white py-10">
          <h2 className="text-4xl font-extrabold text-gray-900 text-left">The Team</h2>
          <div className="mt-8 flex flex-wrap">
            <div className="w-full lg:w-1/2 p-4">
              <div className="flex flex-col lg:flex-row">
                <img src="https://bharatroofers.com/static/media/house.0bdc8d879c852912b9ae.jpg" alt="Team Image" className="w-full h-64 object-cover rounded-lg shadow-md lg:w-1/2"/>
                <div className="mt-4 lg:mt-0 lg:ml-4 lg:w-1/2">
                  <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veniam amet facilis esse exercitationem sint doloribus at sapiente! Sapiente vitae eos voluptas sint reprehenderit doloribus corporis facere autem rerum dolore!</p>
                  <p className="mt-4 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequuntur libero natus ea earum corrupti, nobis impedit officiis ut veniam, odio tempora magni nam atque quam, incidunt pariatur sequi modi!</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <img src="https://bharatroofers.com/static/media/home.carousal-1.96e2922c75281f50f668.avif" alt="Image Placeholder" className="w-full h-96 object-cover rounded-lg shadow-md"/>
            </div>
          </div>
        </section>
  
        <section className="bg-gray-100 py-10">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/3 p-4">
              <h3 className="text-3xl font-bold text-gray-900">Find Us Here</h3>
              <div className="mt-4">
                <iframe className="w-full h-64 border-2 border-blue-500 rounded-lg" title="location" src="https://www.google.com/maps/embed?pb=..."></iframe>
              </div>
            </div>
            <div className="w-full lg:w-1/3 p-4 mt-10 lg:mt-0">
              <h3 className="text-3xl font-bold text-gray-900">Bharatroofers.com</h3>
              <p className="mt-4 text-gray-700">1815 Wright Town, Jabalpur, Madhya Pradesh, INDIA 482002</p>
              <p className="mt-4 text-gray-700">Phone: +91-8839280515</p>
            </div>
          </div>
        </section>
      </div>
    </Container>
  </div>
  
  );
};

export default AboutPage;
