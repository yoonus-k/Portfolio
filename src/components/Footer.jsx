import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Add custom CSS for the footer blur effect
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .footer-blur-background {
        backdrop-filter: blur(15px);
        background-image: linear-gradient(to bottom, rgba(10, 4, 22, 0.2), rgba(10, 4, 22, 0.5), rgba(10, 4, 22, 0.8));
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '#hero' },
      { name: 'About', href: '#about' },
      { name: 'Experience', href: '#experience' },
      { name: 'Projects', href: '#work' },
      { name: 'Resume', href: 'YOONUS_AI_2025.pdf', external: true }, // Resume before Contact
      { name: 'Contact', href: '#contact' },
    ],
    connect: [
      { 
        name: 'GitHub', 
        href: 'https://github.com/yoonus-k',
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        )
      },
      { 
        name: 'LinkedIn', 
        href: 'https://www.linkedin.com/in/yoonus-k/',
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        )
      }
    ]
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-primary overflow-hidden">
      {/* Content with blur background - align top to center of video */}
      <div className="relative z-20 flex flex-col justify-end">
        {/* Spacer to push blurred section to video center (reduced for alignment) */}
        <div className="hidden sm:block" style={{ height: '45vh' }}></div>
        
        {/* Main Content Area with blur - positioned at the bottom */}
        <div className="w-full backdrop-blur-md bg-black/10 border-t border-[#00CFFF]/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-16 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
              
              {/* Brand Section */}
              <motion.div 
                className="md:col-span-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-1 bg-[#00CFFF]"></div>
                  <h3 className="text-white text-2xl font-bold font-sans m-0">
                    Yoonus Kizhakkethil, PMP®
                    <span className="text-[#00CFFF]">.</span>
                  </h3>
                </div>
                <p className="text-[#b0b0b0] text-base leading-relaxed mb-6 font-mono">
                  Crafting digital <span className="text-[#00CFFF]">experiences</span> with code, creativity & a bit of caffeine (of course!). AI/ML Engineer & Full-Stack Developer passionate about innovation.
                </p>
                <p className="text-secondary/80 text-sm">
                  Thanks for stopping by!
                </p>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-4">
                  {footerLinks.quickLinks.map((link, index) => (
                    <li key={index}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-[#915EFF] transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-secondary hover:text-[#915EFF] transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Connect and Get in Touch Column */}
              <div className="space-y-8">
                {/* Connect */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-white text-lg font-semibold mb-6">Connect</h4>
                  <div className="space-y-4">
                    <div className="text-secondary text-sm mb-4">
                      IT Manager at Starbucks | AI/ML Engineer
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex space-x-4">
                      {footerLinks.connect.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-[#915EFF] transition-colors duration-300"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Get in Touch */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-white text-lg font-semibold mb-6">Get in Touch</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-secondary text-sm">
                      <svg className="w-4 h-4 text-[#915EFF]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      <span>yoonusk2001@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-secondary text-sm">
                      <svg className="w-4 h-4 text-[#915EFF]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span>Jeddah, Saudi Arabia</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section with Divider */}
        <div className="backdrop-blur-md bg-black/10 border-t border-[#00CFFF]/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-16 pb-8">
            {/* Horizontal Divider Line - Enhanced to be clearly visible */}
            <motion.div 
              className="pb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <hr className="border-t border-[#00CFFF]/20 mb-6" />
              
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-[#b0b0b0] text-sm font-mono">
                  © {currentYear} Yoonus Kizhakkethil <span className="text-[#00CFFF]">|</span> Portfolio. All rights reserved.
                </p>
                
                <div className="flex space-x-6 text-sm font-mono">
                  <button className="text-[#b0b0b0] hover:text-[#00CFFF] transition-colors duration-300">
                    Privacy Policy
                  </button>
                  <button className="text-[#b0b0b0] hover:text-[#00CFFF] transition-colors duration-300">
                    Terms of Service
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Black Hole Video Background - moved to the bottom and aligned with divider */}
      <div className="absolute inset-x-0 bottom-1 w-full h-full z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hidden sm:block w-full h-full object-cover absolute inset-0"
          style={{ 
            filter: 'brightness(1)', 
            objectPosition: 'center 20%' // Align blackhole center with top of content
          }}
        >
          <source src="/webm/blackhole.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark gradient overlay for video */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/95"></div>
        
        {/* Cyan glow effect matching hero section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00CFFF]/5 to-[#00CFFF]/15"></div>
                {/* Subtle animated blobs matching hero section */}
        <div className="absolute bottom-0 right-20 w-72 h-72 bg-[#00CFFF] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>

      </div>
    </footer>
  );
};

export default Footer;
