import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";
import LogoModal from "./LogoModal";
import {
  AiOutlineHome,
  AiOutlinePicture,
  AiOutlineFileText,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [showLogoModal, setShowLogoModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleResumeClick = () => {
    navigate("/resume");
    setActive("Resume");
    if (toggle) setToggle(false);
  };

  const handleNavClick = (link) => {
    const targetId = link.scrollTo || link.id;
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
    setActive(link.title);
    setToggle(false); // Ensure the navbar closes after navigation
  };

  useEffect(() => {
    if (toggle) {
      setActive("");
    }
  }, [toggle]);
  const iconMap = {
    AiOutlineHome: AiOutlineHome,
    FiUser: FiUser,
    AiOutlinePicture: AiOutlinePicture,
    AiOutlineFileText: AiOutlineFileText,
    AiOutlineLinkedin: AiOutlineLinkedin,
  };

  // Custom breakpoint for 1200px
  const [showMobileView, setShowMobileView] = useState(false);

  // Check window width on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setShowMobileView(window.innerWidth < 1200);
    };

    // Initialize on mount
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to handle the back button press
  const handleBackButton = (e) => {
    if (toggle) {
      setToggle(false); // Close the navbar if it's open
      e.preventDefault(); // Prevent default back navigation
    }
    // Let ProjectModal handle its own back button logic if open
  };

  // Use effect for proper cleanup of event listener
  useEffect(() => {
    window.addEventListener("popstate", handleBackButton);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [toggle]);

  const renderNavLinks = () => (
    <ul
      className={`list-none ${
        showMobileView ? "hidden" : "hidden sm:flex"
      } flex-row gap-8`}
    >
      {navLinks.map((link) => {
        const Icon = iconMap[link.icon];
        if (link.url) {
          // External link (e.g., LinkedIn)
          return (
            <li
              key={link.id}
              className="flex items-center gap-2 group text-white hover:text-[#00CFFF] text-[18px] font-medium cursor-pointer relative font-mono transition-all duration-200"
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 navbar-link-underline"
              >
                <Icon className="w-5 h-5" />
                {link.title}
              </a>
              <span className="navbar-underline"></span>
            </li>
          );
        }
        return (
          <li
            key={link.id}
            className={`flex items-center gap-2 group ${
              active === link.title ? "text-[#00CFFF]" : "text-white"
            } hover:text-[#00CFFF] text-[18px] font-medium cursor-pointer relative font-mono transition-all duration-300`}
            onClick={() => {
              if (link.id === "resume") {
                navigate("/resume");
                setActive("Resume");
                if (toggle) setToggle(false);
              } else if (link.id === "home") {
                navigate("/");
                setActive("Home");
                if (toggle) setToggle(false);
              } else {
                handleNavClick(link);
              }
            }}
          >
            <span className="flex items-center gap-2 navbar-link-underline">
              <Icon className="w-5 h-5" />
              {link.title}
            </span>
            <span className="navbar-underline"></span>
          </li>
        );
      })}
    </ul>
  );

  // Effect to handle clicks outside the navbar
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Get the sidebar element and the burger menu icon
      const sidebar = document.querySelector(".fixed.top-0.right-0.h-screen");
      const menuIcon = document.querySelector(".w-\\[28px\\].h-\\[18px\\]");

      // Close the sidebar if click is outside the sidebar and not on the menu icon
      if (
        toggle &&
        sidebar &&
        !sidebar.contains(event.target) &&
        menuIcon &&
        !menuIcon.contains(event.target)
      ) {
        setToggle(false);
      }
    };

    // Add event listener for clicks on document
    document.addEventListener("mousedown", handleOutsideClick);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [toggle]);

  // Add scroll lock effect when sidebar is toggled
  useEffect(() => {
    // check if it's already locked
    if (document.body.style.overflow === "hidden" && toggle) {
      return; // If already locked and toggle is true, do nothing
    } else if (toggle) {
      // Lock scroll when sidebar is open
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px"; // Prevent layout shift

      // Dispatch a custom event to close the modal
      window.dispatchEvent(new Event("closeProjectModal"));
     } 
   
  }, [toggle]);

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 backdrop-blur-md bg-black bg-opacity-20 transition-all duration-100 border-b border-white border-opacity-10`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            {" "}
            <div
              className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#915EFF]/50 cursor-pointer hover:shadow-md hover:shadow-[#915EFF]/30 transition-all duration-200 group relative"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowLogoModal(true);
              }}
              title="Click to enlarge"
            >
              <img
                src={logo}
                alt="logo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/30 flex items-center justify-center transition-opacity duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
            <p className="text-white text-[20px] font-bold cursor-pointer flex">
              YOONUS&nbsp;
              <span
                className={`${showMobileView ? "hidden" : "hidden sm:block"}`}
              >
                KIZHAKKETHIL , PMP®
              </span>
            </p>
          </Link>
          {renderNavLinks()}
          <div
            className={`${
              showMobileView ? "flex" : "sm:hidden flex"
            } flex-1 justify-end items-center`}
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[18px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />{" "}
            {/* Ultra-enhanced full-screen mobile sidebar */}
            <div
              className={`fixed top-0 right-0 h-screen w-80 bg-gradient-to-br from-primary via-[#1a1a2e] to-[#0f0f23] border-l border-white/10 shadow-xl transform transition-transform duration-200 ease-out z-50 ${
                toggle ? "translate-x-0" : "translate-x-full"
              } flex flex-col`}
              style={{
                background: "linear-gradient(135deg, #050816 0%, #1a1a2e 50%, #0f0f23 100%)",
              }}
            >
              {" "}
              {/* Sidebar Header with enhanced effects */}
              <div className="p-6 border-b border-white/10 bg-black/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="relative w-8 h-8 cursor-pointer group"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowLogoModal(true);
                      }}
                      title="Click to enlarge"
                    >
                      <div className="rounded-full overflow-hidden border-2 border-[#915EFF]/50 w-full h-full">
                        <img
                          src={logo}
                          alt="logo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/30 flex items-center justify-center transition-opacity duration-200 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        YOONUS
                      </h3>
                      <p className="text-secondary text-sm">Portfolio</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setToggle(false)}
                    className="text-white hover:text-[#915EFF] transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg"
                  >
                    <img src={close} alt="close" className="w-6 h-6" />
                  </button>
                </div>
              </div>
              {/* Navigation Links */}
              <div className="flex-1 py-8 px-6 overflow-y-auto">
                {" "}
                <nav className="space-y-2">
                  {navLinks.map((link, index) => {
                    const Icon = iconMap[link.icon];
                    return (
                      <div
                        key={link.id}
                        className="group relative cursor-pointer"
                        onClick={() => {
                          if (link.id === "resume") {
                            handleResumeClick();
                          } else if (link.url) {
                            window.open(link.url, "_blank");
                          } else {
                            handleNavClick(link);
                          }
                          setToggle(false);
                        }}
                      >
                        <div
                          className={`flex items-center gap-3 z-10 relative p-4 rounded-xl transition-all duration-200 border border-transparent hover:border-white/30 group-hover:bg-white/10 ${
                            active === link.title
                              ? "text-white bg-[#915EFF]/30 border-[#915EFF]/60"
                              : "text-secondary hover:text-white"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="text-lg font-medium">
                            {link.title}
                          </span>
                          {/* Hover indicator */}
                          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <svg
                              className="w-5 h-5 text-[#915EFF]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </nav>
              </div>
              {/* Sidebar Footer */}
              <div className="p-6 border-t border-white/10 bg-black/20">
                <div className="text-center">
                  <p className="text-secondary text-sm mb-2">Connect with me</p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://github.com/yoonus-k"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-white transition-colors duration-200"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/yoonus-k/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-white transition-colors duration-200"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Backdrop overlay */}
            <div
              className={`fixed inset-0 bg-black/50 transition-opacity duration-200 z-40 ${
                toggle ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              onClick={() => setToggle(false)}
            />
          </div>
        </div>
      </nav>

      {/* Logo Modal */}
      <LogoModal
        logoSrc={logo}
        isOpen={showLogoModal}
        onClose={() => setShowLogoModal(false)}
      />
    </>
  );
};

export default Navbar;
