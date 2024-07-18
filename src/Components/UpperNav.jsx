import { Link } from "react-router-dom"

export default function UpperNav(){
    return(
        <div>
             <div className="container mx-auto flex flex-wrap justify-between items-center p-4  "style={{ zIndex: 10 }}>
        <div className="text-2xl font-bold">BharatRoofers</div>
        <nav className="hidden md:flex flex-wrap space-x-4 font-bold">
        <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link to="/blogs" className="text-gray-600 hover:text-gray-900">Blogs</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact us</Link>
          <Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
          <Link to="/register" className="text-gray-600 hover:text-gray-900">Register</Link>
        </nav>
        {/* <div className="flex space-x-4 items-center">
          <FaSearch className="text-gray-600" />
          <FaUser className="text-gray-600" />
        </div> */}
      </div>
        </div>
    )
}