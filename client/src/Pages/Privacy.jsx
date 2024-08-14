import React, { useEffect } from 'react';
import Navbar from "../Components/UpperNav";
import NavbarMob from '../Pages/NabMobile';
import ReactGA from "react-ga4";
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const PrivacyPolicy = () => {
  const location = useLocation();
  const canonicalUrl = 'https://bharatroofers.com' + location.pathname;

  useEffect(() => {
    const handleTop = () => {
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
      window.scrollTo(0, 0);
    };
    handleTop();
  }, []);

  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className="hidden lg:block mb-24">
        <Navbar />
      </div>
      <div className="lg:hidden mb-24">
        <NavbarMob />
      </div>

      <div className="container mx-auto mt-10 px-4 lg:px-0">
        <h1 className="text-2xl lg:text-4xl font-bold text-center mb-6">Privacy Policy</h1>

        {/* Add your terms and conditions content here */}
        <div className="space-y-6">
          <p className="text-gray-700">
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. <br />
            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
          </p>

          <h5 className="text-xl font-semibold text-gray-800">Interpretation and Definitions</h5>
          <h5 className="text-lg font-semibold text-gray-800">Interpretation</h5>
          <p className="text-gray-700">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

          <h5 className="text-lg font-semibold text-gray-800">Definitions</h5>
          <p className="text-gray-700">For the purposes of this Privacy Policy:</p>
          <ul className="list-disc list-inside pl-6 text-gray-700">
            <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
            <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
            <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to bharatroofers.com, Jabalpur, Madhya Pradesh, INDIA 482002.</li>
            <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
            <li><strong>Country</strong> refers to: Madhya Pradesh, India.</li>
            <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
            <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
            <li><strong>Service</strong> refers to the Website.</li>
            <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company.</li>
            <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself.</li>
            <li><strong>Website</strong> refers to bharatroofers.com, accessible from https://bharatroofers.com.</li>
            <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
          </ul>

          <h5 className="text-lg font-semibold text-gray-800">Collecting and Using Your Personal Data</h5>
          <p className="text-gray-700"><strong>Types of Data Collected</strong></p>
          
          <h6 className="text-md font-semibold text-gray-800">Personal Data</h6>
          <p className="text-gray-700">
            While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
          </p>
          <ul className="list-disc list-inside pl-6 text-gray-700">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
          </ul>

          <h6 className="text-md font-semibold text-gray-800">Usage Data</h6>
          <p className="text-gray-700">
            Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
            When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
          </p>

          <h5 className="text-lg font-semibold text-gray-800">Tracking Technologies and Cookies</h5>
          <p className="text-gray-700">
            We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
          </p>
          <ul className="list-disc list-inside pl-6 text-gray-700">
            <li><strong>Cookies or Browser Cookies</strong>. A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.</li>
            <li><strong>Web Beacons</strong>. Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email.</li>
          </ul>

          <p className="text-gray-700">
            Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.
          </p>
          <ul className="list-disc list-inside pl-6 text-gray-700">
            <li><strong>Necessary / Essential Cookies</strong>: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features.</li>
            <li><strong>Cookies Policy / Notice Acceptance Cookies</strong>: These Cookies identify if users have accepted the use of cookies on the Website.</li>
            <li><strong>Functionality Cookies</strong>: These Cookies allow us to remember choices You make when You use the Website.</li>
          </ul>

          <h5 className="text-lg font-semibold text-gray-800">Use of Your Personal Data</h5>
          <ul className="list-disc list-inside pl-6 text-gray-700">
            <li>To provide and maintain our Service, including to monitor the usage of our Service.</li>
            <li>To manage Your Account: to manage Your registration as a user of the Service.</li>
            <li>For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products.</li>
            <li>To contact You: By email, telephone calls, SMS, or other equivalent forms of electronic communication.</li>
            <li>To provide You with news, special offers, and general information about other goods, services, and events.</li>
            <li>To manage Your requests: To attend and manage Your requests to Us.</li>
            <li>For business transfers: We may use Your information to evaluate or conduct a merger.</li>
            <li>For other purposes: Such as data analysis, identifying usage trends, and improving our Service.</li>
          </ul>

          <h5 className="text-lg font-semibold text-gray-800">Retention of Your Personal Data</h5>
          <p className="text-gray-700">
            The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.
          </p>

          <h5 className="text-lg font-semibold text-gray-800">Transfer of Your Personal Data</h5>
          <p className="text-gray-700">
            Your information, including Personal Data, is processed at the Company's operating offices and in other places where the parties involved in the processing are located.
          </p>

          <h5 className="text-lg font-semibold text-gray-800">Delete Your Personal Data</h5>
          <p className="text-gray-700">
            You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
          </p>

          <h5 className="text-lg font-semibold text-gray-800">Disclosure of Your Personal Data</h5>
          <p className="text-gray-700">
            <strong>Business Transactions</strong>: If the Company is involved in a merger or asset sale, Your Personal Data may be transferred.
          </p>
          <p className="text-gray-700">
            <strong>Law enforcement</strong>: The Company may disclose Your Personal Data if required to do so by law or in response to valid requests.
          </p>
          <p className="text-gray-700">
            <strong>Other legal requirements</strong>: The Company may disclose Your Personal Data in the good faith belief that such action is necessary to comply with legal obligations.
          </p>

          <h5 className="text-lg font-semibold text-gray-800">Security of Your Personal Data</h5>
          <p className="text-gray-700">
            The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.
          </p>

          <h5 className="text-lg font-semibold text-gray-800">Children's Privacy</h5>
          <p className="text-gray-700">
            Our Service does not address anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.
          </p>

          <h5 className="text-lg font-semibold text-gray-800">Links to Other Websites</h5>
          <p className="text-gray-700">
            Our Service may contain links to other websites that are not operated by Us. We strongly advise You to review the Privacy Policy of every site You visit.
          </p>

          <h5 className="text-lg font-semibold text-gray-800">Changes to this Privacy Policy</h5>
          <p className="text-gray-700">
            We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
          </p>

          <h5 className="text-lg font-semibold text-gray-800">Contact Us</h5>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, You can contact us: <br />
            • By phone number: +918839280515
          </p>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
