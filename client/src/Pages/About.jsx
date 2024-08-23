import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

const canonicalUrl = window.location.href;

const AboutPage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Container>
        <Helmet>
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>

        <div className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section id="About" className="bg-white py-10" data-aos="zoom-in" data-aos-duration="1500" >
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">About Us</h1>
            <p className="mt-4 text-gray-700 text-base sm:text-lg">
              Welcome to Bharat Roofers, your premier destination for all property needs in Jabalpur, Madhya Pradesh. With a commitment to excellence and a passion for serving our clients, Bharat Roofers has established itself as a trusted name in the real estate industry.
            </p>
            <p className="mt-4 text-gray-700 text-base sm:text-lg">
              At Bharat Roofers, we understand the importance of finding the perfect property to suit your needs. Whether you're searching for a plot, house, villa, farmhouse, or commercial space, we have a diverse range of options. Our extensive portfolio includes properties available for both sale and rent, ensuring that we can cater to every requirement.
            </p>
            <p className="mt-4 text-gray-700 text-base sm:text-lg">
              With years of experience in the local market, our team of professionals possesses in-depth knowledge and expertise to assist you throughout your property journey. We prioritize transparency, integrity, and personalized service, ensuring that each client receives the attention and support they deserve.
            </p>
            <p className="mt-4 text-gray-700 text-base sm:text-lg">
              Experience the difference with Bharat Roofers as we strive to exceed your expectations and make your property dreams a reality.
            </p>
            <h4 className="mt-8 text-2xl sm:text-3xl font-bold">Our Vision</h4>
            <p className="mt-2 text-gray-700 text-base sm:text-lg">Changing the way India experiences property.</p>
            <h4 className="mt-8 text-2xl sm:text-3xl font-bold">Our Mission</h4>
            <p className="mt-2 text-gray-700 text-base sm:text-lg">
              To be the first choice of our consumers and partners in discovering, renting, buying, selling, and financing a home, and digitally enabling them throughout their journey. We do that with data, design, technology, and above all, the passion of our people while delivering value to our shareholders.
            </p>
            <img src="https://th.bing.com/th/id/OIP.cgn2iMWQBHPgwm14g_eqtgHaE8?w=1500&h=1000&rs=1&pid=ImgDetMain" alt="Property Image" className="mt-10 w-full h-auto max-h-96 object-cover rounded-lg shadow-md" />
          </section>

          <section id="Our-Value" className="bg-gray-100 py-10">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 p-4">
                <img src="https://cdn.americanfinancing.net/images/gallery/learning-center/open_graph/man-holding-two-homes-for-buying-selling_2x.jpg?1510351910" alt="Our Value" className="w-full h-auto max-h-96 object-cover rounded-lg shadow-md"/>
              </div>
              <div className="w-full lg:w-1/2 p-4 flex items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Is spreading joy your mantra too?</h3>
                  <p className="mt-4 text-gray-700">Shoot us an email at <a href="mailto:careers@bharatroofers.com" className="text-blue-600 underline">info@bharatroofers.com</a> and we'll be happy to meet you</p>
                </div>
              </div>
            </div>
          </section>

          <section id="Our" className="bg-white py-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">The Team</h2>
            <div className="mt-8 flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 p-4">
                <div className="flex flex-col">
                  <p className="text-gray-700 mb-4 text-base sm:text-lg">
                    At BharatRoofers, we believe in turning dreams into reality. Our dedicated team of real estate professionals is committed to providing personalized service and expert guidance to help you find the perfect property. Whether you’re buying your first home, looking for an investment opportunity, or seeking a new commercial space, we offer comprehensive support every step of the way. Our deep knowledge of the local market and commitment to excellence ensure that your real estate journey is seamless and rewarding.
                  </p>
                  <p className="text-gray-700 text-base sm:text-lg">
                    With years of experience and a passion for real estate, our team is here to address your unique needs and exceed your expectations. We take pride in our transparent approach, keeping you informed and confident throughout the process. Trust us to be your reliable partner in achieving your real estate goals and making informed decisions. Discover how our expertise can make a difference in your property search and investment strategy.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-4">
                <img src="https://bharatroofers.com/static/media/home.carousal-1.96e2922c75281f50f668.avif" alt="Image Placeholder" className="w-full h-auto max-h-96 object-cover rounded-lg shadow-md"/>
              </div>
            </div>
          </section>

          <section className="bg-gray-100 py-10">
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <div className="w-full lg:w-2/3 p-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Find Us Here</h3>
                <div className="mt-4">
                  <iframe
                    className="w-full h-[27rem] border-2 border-blue-500 rounded-lg"
                    title="location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.179981810829!2d79.92040930961065!3d23.163630310964717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b116195eee4f%3A0x62196cfaef1c23c7!2sDOAGURU%20INFO%20SYSTEMS-%20Best%20Digital%20Marketing%20Company%20in%20Jabalpur%7CBest%20Software%20company%20in%20jabalpur%7CIT%20Company%20in%20Jabalpur!5e0!3m2!1sen!2sin!4v1700317566925!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div className="w-full lg:w-1/3 p-4 mt-10 lg:mt-0">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Bharatroofers.com</h3>
                <p className="mt-4 text-gray-700 text-base sm:text-lg">1815 Wright Town, Jabalpur, Madhya Pradesh, INDIA 482002</p>
                <p className="mt-4 text-gray-700 text-base sm:text-lg">Phone: +91-8839280515</p>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
