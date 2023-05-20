import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [togglemenu, setToggleMenu] = useState(true);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            {" "}
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is GPT3?</a>
          </p>
          <p>
            {" "}
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">CaseStudy</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {togglemenu ? (
          <AiOutlineMenu color="#fff" size={27} onClick={()=>{setToggleMenu(false)}} />
        ) : (
          <AiOutlineClose color="#fff" size={27} onClick={()=>{setToggleMenu(true)}} />
        )}

        {!togglemenu && (
         <div className="gpt3__navbar-menu_container scale-up-center">
         <div className="gpt3__navbar-menu_container-links">
           <p><a href="#home">Home</a></p>
           <p><a href="#wgpt3">What is GPT3?</a></p>
           <p><a href="#possibility">Open AI</a></p>
           <p><a href="#features">Case Studies</a></p>
           <p><a href="#blog">Library</a></p>
         </div>
         <div className="gpt3__navbar-menu_container-links-sign">
           <p>Sign in</p>
           <button type="button">Sign up</button>
         </div>
       </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
