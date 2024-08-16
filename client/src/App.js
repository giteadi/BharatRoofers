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
import Spinner from "./Pages/Spinner";
import Test from "./Pages/test";

// ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
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
        {/* <Route path="/spinner" element={<Spinner />} /> */}
        {/* <Route path="/t" element={<Test />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
