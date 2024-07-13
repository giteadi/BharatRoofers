import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Nav2 from "./Pages/Nav2";
function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="h" element={<Nav2/>}/>
      </Routes>
    </div>
  );
}

export default App;
