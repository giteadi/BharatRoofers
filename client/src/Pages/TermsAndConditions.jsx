import React, { useEffect } from 'react';
import Navbar from "../Components/UpperNav";
import NavbarMob from '../Pages/NabMobile';
import ReactGA from "react-ga4";
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const TermsAndCondition = () => {
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
      <div className="flex flex-col">
        {/* Navbar components */}
        <div className="hidden lg:block mb-24">
          <Navbar />
        </div>
        <div className="lg:hidden mb-24">
          <NavbarMob />
        </div>
        
        {/* Terms and Conditions Content */}
        <div className="container mx-auto mt-10 px-4">
          <h1 className="mb-6 mt-10 text-3xl font-bold text-center">Terms and Conditions</h1>

          <section className="mt-10">
            <p className="text-gray-700">
              Welcome to bharatroofers.com! <br />
              These terms and conditions outline the rules and regulations for the use of bharatroofers's Website, located at https://bharatroofers.com/. <br />
              By accessing this website we assume you accept these terms and conditions. Do not continue to use bharatroofers.com if you do not agree to take all of the terms and conditions stated on this page. <br />
              The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of in. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
            </p>
          </section>

          <section className="mt-10">
            <h5 className="text-xl font-semibold">Cookies</h5>
            <p className="text-gray-700">
              We employ the use of cookies. By accessing bharatroofers.com, you agreed to use cookies in agreement with the bharatroofers's Privacy Policy. <br />
              Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
            </p>
          </section>

          <section className="mt-10">
            <p className="text-gray-700">
              You must not:<br />
              • Republish material from bharatroofers.com <br />
              • Sell, rent or sub-license material from bharatroofers.com <br />
              • Reproduce, duplicate or copy material from bharatroofers.com <br />
              • Redistribute content from bharatroofers.com <br />
              This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Free Terms and Conditions Generator.<br />
              Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. bharat roofers does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of bharat roofers, its agents and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, bharatroofers shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.<br />
              bharatroofers reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.<br />
              You warrant and represent that:<br />
              • You are entitled to post the Comments on our website and have all necessary licenses and consents to do so; <br />
              • The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;<br />
              • The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy<br />
              • The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.<br />
              You hereby grant bharatroofers a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.<br />
            </p>
          </section>

          <section className="mt-10">
            <h5 className="text-xl font-semibold">iFrames</h5>
            <p className="text-gray-700">
              Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.<br />
            </p>
          </section>

          <section className="mt-10">
            <h5 className="text-xl font-semibold">Content Liability</h5>
            <p className="text-gray-700">
              We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that arise on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.<br />
            </p>
          </section>

          <section className="mt-10">
            <h5 className="text-xl font-semibold">Reservation of Rights</h5>
            <p className="text-gray-700">
              We reserve the right to request that you remove all links or any particular link to our Website. You agree to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.<br />
            </p>
          </section>

          <section className="mt-10">
            <h5 className="text-xl font-semibold">Removal of Links from Our Website</h5>
            <p className="text-gray-700">
              If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to do so or to respond to you directly.<br />
              We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
            </p>
          </section>

          <section className="mt-10">
            <h5 className="text-xl font-semibold">Disclaimer</h5>
            <p className="text-gray-700">
              To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:<br />
              • Limit or exclude our or your liability for death or personal injury; <br />
              • Limit or exclude our or your liability for fraud or fraudulent misrepresentation;<br />
              • Limit any of our or your liabilities in any way that is not permitted under applicable law; or<br />
              • Exclude any of our or your liabilities that may not be excluded under applicable law.<br />
              The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.<br />
              As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default TermsAndCondition;
