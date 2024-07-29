import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #1a1a1a; /* Dark background for contrast */
  z-index: 10;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(-100%)")};
  border-bottom: 1px solid #eaeaea;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem; /* Tailwind's rounded-md class */
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  // &:hover {
  //   background-color: #1e90ff; /* Blue background on hover */
  //   color: #fff; /* White text on hover */
  // }

  &:focus {
    outline: 2px solid #1e90ff; /* Blue outline for focus ring */
    outline-offset: 2px;
  }
`;

export default function UpperNav() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <NavbarContainer show={showNavbar}>
      <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
        <div className="text-2xl font-bold text-white">BharatRoofers</div>
        <nav className="hidden md:flex flex-wrap space-x-4 font-bold">
          <NavLink to="/" className="hover:border focus:outline-none focus:ring-2 focus:ring-green-500">Home</NavLink>
          <NavLink to="/blogs" className="focus:outline-none hover:border focus:ring-green-500">Blogs</NavLink>
          <NavLink to="/contact" className="focus:outline-none hover:border focus:ring-green-500">Contact us</NavLink>
          <NavLink to="/login" className="focus:outline-none hover:border focus:ring-green-500">Login</NavLink>
          <NavLink to="/register" className="focus:outline-none hover:border focus:ring-green-500">Register</NavLink>
        </nav>
      </div>
    </NavbarContainer>
  );
}
