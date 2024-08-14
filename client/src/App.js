import { Route, Routes } from "react-router-dom";
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
import CategoryPage from "./Pages/CategoryPage";  // Correctly import CategoryPage
import FooterCategory from "./Pages/FooterCategory";
import TermsAndCondition from "./Pages/TermsAndConditions";
import PrivacyPolicy from "./Pages/Privacy";

function App() {
  return (
    <div>
      <UpperNav />
    
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
         <Route path="/footer-category" element={<FooterCategory/>}/>
         <Route path='/terms' element={<TermsAndCondition/>}/>
         <Route path="/privacy" element={<PrivacyPolicy/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
