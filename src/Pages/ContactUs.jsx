import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            We'd love to hear from you! Reach out to us at:
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Contact Information</h3>
              <div className="mt-2 text-sm text-gray-500">
                <p>Email: contact@company.com</p>
                <p>Phone: +91000-0000</p>
                <p>Address: 794 Mcallister St</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
