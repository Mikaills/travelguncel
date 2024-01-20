import React, { useState, setActivate } from "react";
import "./navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiCloseCircleLine } from "react-icons/ri";
import { TbDots } from "react-icons/tb";

const Navbar = () => {
  const [activate, setActivate] = useState("navBar");
  // fonksiyon navBar için//
  const showNav = ()=>{
    setActivate ('navBar activateNavbar')



  }
  const removeNavBar = ()=>{
    setActivate ('navBar')
  }



  return (
    <section className="navBarSection">
      <header className="header grid">
        <div className="logoDiv">
          <a href="/*logo getir*/" className="logo flex"></a>
          <h1>
            <MdOutlineTravelExplore className="icon" />
            Arif Işık Travel
          </h1>

        </div>

        <div className={activate}>
          <ul className="navLists grid">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="#" className="">
                BookNow
              </a>
            </button>
          </ul>
          <div onClick={removeNavBar} className="closeNavBar">
            <RiCloseCircleLine className="icon" />
          </div>
          
        </div>
        <div onClick={showNav} className="toggleNavBar">
            <TbDots className="icon" />
          </div>

          </header>

      
    </section>
  );
};

export default Navbar;
