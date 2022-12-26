import React, { useEffect, useState } from "react";
import Logo from "../../assets/img/logo.svg";
import Icon1 from "../../assets/img/nav-icon1.svg";
import Icon2 from "../../assets/img/nav-icon2.svg";
import Icon3 from "../../assets/img/nav-icon3.svg";
import closeMenu from "../../assets/img/x.svg";
import menu from "../../assets/img/menu.svg";
import "./navbar.css";

export const Navbar = () => {
  const [link, setLink] = useState("home");
  const [scroll, setScroll] = useState();
  const [toggle, setToggle] = useState(false);

  window.onscroll = () => setScroll(window.scrollY);

  return (
    <div
      className={`fixed  box-border w-screen z-50  ${
        scroll > 50 && "bg-black py-0"
      } transition-all duration-200 ease-linear `}
    >
      <div
        className={`navbar flex items-center py-5 mx-auto  justify-between ${
          scroll > 50 && "py-2"
        } transition-all duration-200 ease-linear `}
      >
        <div className="logo-container  flex items-center justify-between">
          <a className="logo" href="/">
            <img src={Logo}  className="h-6 relative top-4" alt="" />
          </a>

          
          <div className="hidden burger-menu" onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <img src={closeMenu} alt="" />
            ) : (
              <img src={menu} alt="" />
            )}
          </div>
        </div>


        <div className={`flex navbar-content gap-12 items-center ${toggle && "active" } transition- duration-500 ` }>
          {/* links container */}
          <div className="flex navbar-links items-center">
            <a
              onClick={() => setLink("home")}
              className={`text-lg text-white nav-link ${
                link == "home" && "active"
              } `}
              href="#home"
            >
              Home
            </a>
            <a
              onClick={() => setLink("skills")}
              className={`text-lg px-12 text-white nav-link ${
                link == "skills" && "active"
              } `}
              href="#skills"
            >
              Skills
            </a>
            <a
              onClick={() => setLink("projects")}
              className={`text-lg text-white nav-link ${
                link == "projects" && "active"
              } `}
              href="#projects"
            >
              Projects
            </a>
          </div>
          {/* social media container */}
          <div className="flex gap-3 navbar-socialMedia social-icon">
            <a
              href="#linkedin"
              className=" relative border w-10 h-10 rounded-full flex items-center justify-center"
            >
              <img src={Icon1} className="w-4 h-4" alt="" />
            </a>

            <a
              href="#github"
              className=" relative border w-10 h-10 rounded-full flex items-center justify-center"
            >
              <img src={Icon2} className="w-5 h-5" alt="" />
            </a>

            <a
              href="#linkedin"
              className=" relative border w-10 h-10 rounded-full flex items-center justify-center"
            >
              <img src={Icon3} className="w-4 h-4" alt="" />
            </a>
          </div>
          <a href="#contact" className="button-animation">
            Let's connect
          </a>
        </div>
      </div>
    </div>
  );
};
