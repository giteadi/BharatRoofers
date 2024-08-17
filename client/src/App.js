import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Components/Home";
import ContactUs from "./Pages/ContactUs";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import SinglePage from "./Pages/Blog.SinglePage";
import LoginForm from "./Pages/Login";
import RegisterForm from "./Pages/Registration";
import UpperNav from "./Components/UpperNav";
import PropertyCard from "./Pages/PropertyCard";
import Box from "./Components/LightBox";
import Footer from "./Components/Footer";
import CategoryPage from "./Pages/CategoryPage";
import FooterCategory from "./Pages/FooterCategory";
import TermsAndCondition from "./Pages/TermsAndConditions";
import PrivacyPolicy from "./Pages/Privacy";
import Singleblog1 from "./Pages/Single Blogs/Singleblog1";
import Singleblog2 from "./Pages/Single Blogs/Singleblog2";
import Singleblog3 from "./Pages/Single Blogs/Singleblog3";
import Singleblog4 from "./Pages/Single Blogs/Singleblog4";
import Singleblog5 from "./Pages/Single Blogs/Singleblog5";
import Singleblog6 from "./Pages/Single Blogs/Singleblog6";
import Singleblog7 from "./Pages/Single Blogs/Singleblog7";
import Singleblog8 from "./Pages/Single Blogs/Singleblog8";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on pathname change (for forward navigation)
    window.scrollTo(0, 0);

    // Scroll to top on backward navigation
    const handlePopState = () => {
      window.scrollTo(0, 0);
    };

    // Add event listener for popstate (backward navigation)
    window.addEventListener("popstate", handlePopState);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [pathname]);

  return null;
}



function App() {
  return (
    <div>
      <UpperNav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:postId" element={<SinglePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/property/:id" element={<PropertyCard />} />
        <Route path="/box" element={<Box />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/footer-category" element={<FooterCategory />} />
        <Route path="/terms" element={<TermsAndCondition />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/single-1" element={<Singleblog1/>}/>
        <Route path="/single-2" element={<Singleblog2/>}/>
        <Route path="/single-3" element={<Singleblog3/>}/>
        <Route path="/single-4" element={<Singleblog4/>}/>
        <Route path="/single-5" element={<Singleblog5/>}/>
        <Route path="/single-6" element={<Singleblog6/>}/>
        <Route path="/single-7" element={<Singleblog7/>}/>
        <Route path="/single-8" element={<Singleblog8/>}/>
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
