import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import ContactUs from "./Pages/ContactUs";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import SinglePage from "./Pages/Blog.SinglePage"; 
import Header from "./Components/Header";
import LoginForm from "./Pages/Login";
import RegisterForm from "./Pages/Registration";
import UpperNav from "./Components/UpperNav";


function App() {
  return (
    <div>
      <UpperNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:postId" element={<SinglePage />} /> 
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
