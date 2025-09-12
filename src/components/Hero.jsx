import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <section id="hero" className="relative w-full min-h-screen mx-auto overflow-hidden">
      {/* Transparent background with animated elements */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-[#00CFFF] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        <div className="hidden md:block absolute -bottom-8 right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-6000"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 flex flex-col items-center justify-center h-full">
        {/* Main content container with centered text on mobile, left-aligned on desktop */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-4xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-opacity-20 bg-[#00CFFF] backdrop-blur-sm rounded-full mb-6 border border-[#00CFFF] border-opacity-30">
            <span className="text-[#00CFFF] text-sm font-medium">IT Project Manager & AI Engineer</span>
          </div>
          
          {/* Main heading with premium styling */}
          <h1 className="font-sans font-extrabold text-5xl md:text-7xl text-white leading-tight tracking-tight mb-6" style={{ fontFamily: 'Poppins, Inter, Montserrat, Arial, sans-serif' }}>
            I'm <span className="text-[#00CFFF]">Yoonus</span>,<br />
            <span className="inline-block">a Passionate</span> <span className="inline-block">AI / IT / SW Project Manager.</span>
          </h1>
          
          {/* Typewriter effect with improved styling */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-1 bg-[#00CFFF] mr-4"></div>
            <div>
              <span className="block font-mono text-lg md:text-2xl text-[#00CFFF] mb-1">Specializing in</span>
              <span className="block font-mono text-lg md:text-2xl text-white">
                <Typewriter
                  options={{
                    strings: [
                      "AI/ML Engineering",
                      "Project Management",
                      "Full-Stack Development",
                      "IT Management",
                      "Algorithmic Trading"
                    ],
                    autoStart: true,
                    loop: true,
                    loopCount: Infinity,
                    deleteSpeed: "natural",
                    pauseFor: 1500,
                  }}
                />
              </span>
            </div>
          </div>
          
          {/* Bio with premium styling */}
          <p className="text-[#b0b0b0] text-base md:text-lg font-mono max-w-2xl tracking-wide mb-10 leading-relaxed">
            I am a Computer Science graduate from King Abdulaziz University, specializing in Software Engineering & Artificial Intelligence, and a PMP-Certified Project Manager. In my dual roles as an IT Manager at Starbucks (Arabian Gates) and an AI/ML Engineer for remote clients, I leverage my strong technical background to lead complex IT and AI initiatives from conception to delivery. My expertise spans full-stack development, building predictive algorithmic trading systems, and deploying scalable MLOps workflows.
          </p>
          <p className="text-[#b0b0b0] text-base md:text-lg font-mono max-w-2xl tracking-wide mb-10 leading-relaxed">
           I am passionate about bridging technology and business value, with a proven ability to translate objectives into technical strategy. I excel at managing cross-functional teams and effectively communicating between stakeholders and developers to achieve measurable results, such as 30% efficiency gains in operations, a 20% reduction in checkout times, and developing AI-powered solutions that deliver significant returns.
          </p>
          
          {/* CTA buttons with improved styling and shimmer effect */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="/YOONUS_AI.pdf" download className="relative overflow-hidden bg-transparent border-2 border-[#915EFF] text-[#915EFF] hover:bg-[#915EFF] hover:text-[#18122B] font-mono px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 group">
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 w-0 bg-[#915EFF] opacity-30 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#experience" className="relative overflow-hidden bg-transparent border-2 border-[#00CFFF] text-[#00CFFF] hover:bg-[#00CFFF] hover:text-[#18122B] font-mono px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 group">
              <span className="relative z-10">View Experience</span>
              <div className="absolute inset-0 w-0 bg-[#00CFFF] opacity-30 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#projects" className="relative overflow-hidden bg-transparent border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#18122B] font-mono px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 group">
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 w-0 bg-[#FFD700] opacity-30 transition-all duration-300 group-hover:w-full"></div>
            </a>
          </div>

          {/* Scroll indicator - centered at the bottom of the Hero section */}
          <div className={`hidden md:flex flex-col items-center justify-center w-full fixed left-0 bottom-10 z-10 transition-opacity duration-300 ${scrolled ? 'opacity-0' : 'opacity-100'} pointer-events-none`}>
            <div className="w-[2px] h-[50px] bg-gradient-to-b from-[#00CFFF] to-transparent flex flex-col items-center mx-auto">
              <div className="w-full h-1/2 bg-[#00CFFF] animate-pulse"></div>
            </div>
            <span className="text-[#b0b0b0] text-xs mt-6">Scroll Down</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
