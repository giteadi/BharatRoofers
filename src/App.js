import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import ContactUs from "./Pages/ContactUs";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";

function App() {
  return (
    <div >
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
