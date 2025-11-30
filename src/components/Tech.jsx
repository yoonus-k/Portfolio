import React, { useState, useEffect, useRef, useCallback } from "react";
import TechGrid from "./canvas/Ball"; // Updated import to use new TechGrid component
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";

// Enhanced AutoScroller component for smooth horizontal scrolling
const AutoScroller = ({ children }) => {
  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 = right, -1 = left
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollPositionRef = useRef(0);
  
  // Pause auto-scroll when user is interacting with the scroller
  useEffect(() => {
    if (isHovering) {
      setIsAutoScrolling(false);
    } else {
      // Resume auto-scrolling after a short delay
      const timer = setTimeout(() => setIsAutoScrolling(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isHovering]);

  // Auto-scrolling effect
  useEffect(() => {
    if (!isAutoScrolling) return;
    
    let animationFrameId;
    let lastTimestamp = 0;
    const scrollSpeed = 0.2; // slower for smoother scrolling
    
    const autoScroll = (timestamp) => {
      if (!scrollRef.current || !isAutoScrolling) {
        animationFrameId = requestAnimationFrame(autoScroll);
        return;
      }

      const delta = lastTimestamp ? timestamp - lastTimestamp : 0;
      lastTimestamp = timestamp;
      
      const container = scrollRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      // Update scroll position
      scrollPositionRef.current += (scrollDirection * scrollSpeed * delta);
      
      // Handle edge cases
      if (scrollPositionRef.current >= maxScroll) {
        scrollPositionRef.current = maxScroll;
        setScrollDirection(-1); // reverse direction
      } else if (scrollPositionRef.current <= 0) {
        scrollPositionRef.current = 0;
        setScrollDirection(1); // reverse direction
      }
      
      // Apply smooth scroll
      container.scrollLeft = scrollPositionRef.current;
      
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    // Start animation
    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isAutoScrolling, scrollDirection]);

  // Track user interaction
  const handleInteraction = () => {
    if (scrollRef.current) {
      scrollPositionRef.current = scrollRef.current.scrollLeft;
    }
  };
  
  return (
    <div 
      ref={scrollRef}
      className="overflow-x-auto overflow-y-hidden tech-scroll-container"
      style={{ 
        scrollBehavior: 'smooth',
        WebkitOverflowScrolling: 'touch',
        overflowY: 'hidden',      // Force no vertical scrollbar
        height: '100%',           // Force height to match parent
        msOverflowStyle: 'none',  // Hide scrollbars in IE
        scrollbarWidth: 'none'    // Hide scrollbars in Firefox
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onScroll={handleInteraction}
    >
      {children}
    </div>
  );
};

// Enhanced Tech component with auto-cycling categories and preloaded tech balls
// Define categories outside the component for consistency with Fast Refresh
const techCategories = {
  "Programming Languages": technologies.filter(tech => 
    ["Python", "JavaScript", "C++", "C#", "Java", "PHP"].includes(tech.name)),
  "Frontend": technologies.filter(tech => 
    ["HTML", "CSS", "React JS", "Next.js", "Tailwind CSS", "Bootstrap"].includes(tech.name)),
  "Backend": technologies.filter(tech => 
    ["Node JS", "Laravel", "Django"].includes(tech.name)),
  "Databases": technologies.filter(tech => 
    ["MySQL", "MongoDB", "PostgreSQL", "SQLite", "Oracle"].includes(tech.name)),
  "Tools": technologies.filter(tech => 
    ["Git", "Firebase", "Figma", "Three.js", "Canva", "AWS"].includes(tech.name)),
};

// Tech component with consistent exports for Fast Refresh compatibility
function Tech() {
  // Use pre-defined categories

  const categoryKeys = Object.keys(techCategories);
  // State for tracking the active category
  const [activeCategory, setActiveCategory] = useState(categoryKeys[0]);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);  // Load all icons immediately to prevent lazy loading issues
  const allTechnologies = technologies.map(tech => tech.icon);
  // State to track if it's the first auto-cycle iteration
  const isFirstCycleRef = useRef(true);
  
  // Auto cycle through tabs with faster first iteration
  const startAutoCycle = useCallback(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Set up a new interval with standard speed
    intervalRef.current = setInterval(() => {
      setActiveCategory(prevCategory => {
        const currentIndex = categoryKeys.indexOf(prevCategory);
        const nextIndex = (currentIndex + 1) % categoryKeys.length;
        return categoryKeys[nextIndex];
      });
    }, 3000); // Standard 3-second interval for all cycles
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [categoryKeys]);  // Start auto-cycling when component mounts or when user stops interacting
  useEffect(() => {
    if (!isUserInteracting) {
      return startAutoCycle();
    } else {
      // Clear existing interval if user is interacting
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  }, [isUserInteracting, startAutoCycle]);  // Handle tab click with more reliable auto-cycling resume
  const handleTabClick = useCallback((category) => {
    // Set the category immediately
    setActiveCategory(category);
    
    // Temporarily pause auto-cycling
    setIsUserInteracting(true);
    
    // Clear any existing timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    // Set a timeout to resume auto-cycling with a short delay
    timeoutRef.current = setTimeout(() => {
      // Resume auto-cycling
      setIsUserInteracting(false);
    }, 5000); // Reduced time to 5 seconds for more responsive feel
    
    // Return a cleanup function to ensure timeouts are properly managed
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };  }, [startAutoCycle]);  // Use useEffect to preload all tech icons on mount and setup auto-cycling
  useEffect(() => {
    // Start auto-cycling immediately
    const cleanup = startAutoCycle();
    

    
    // Preload all images to ensure immediate display
    const preloadImages = () => {
      const imagePromises = allTechnologies.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = src;
        });
      });
      
      // When all images are loaded, ensure we're displaying properly
      Promise.all(imagePromises).then(() => {
        // Force a re-render to show loaded images
        setActiveCategory(prev => prev);
      });
    };
    
    preloadImages();
      // Cleanup function for intervals and timeouts
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }    };
  }, [allTechnologies, startAutoCycle]);
  
  return (
    <motion.div 
      className="flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Category selector tabs with animated transitions */}
      {/* Section header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-[#00CFFF]/10 via-[#00CFFF]/20 to-[#00CFFF]/10 backdrop-blur-sm rounded-full mb-6 border-2 border-[#00CFFF] border-opacity-30 shadow-[0_4px_20px_rgba(0,207,255,0.15)]">
          <span className="text-[#00CFFF] text-sm font-medium font-['Inter']">My Tech Stack</span>
        </div>
        <h2 className="font-['Space_Grotesk'] font-extrabold text-4xl md:text-5xl text-white leading-tight tracking-tight mb-6">Technologies</h2>
        <div className="flex items-center justify-center mt-4 mb-6">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#00CFFF] to-transparent mx-2"></div>
        </div>
      </div>

      {/* Category selector tabs with animated transitions */}
      <div className="flex flex-wrap justify-center mb-10 gap-5">
        {categoryKeys.map((category) => (
          <motion.button
            key={category}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border-2 font-['Inter'] ${
              activeCategory === category 
                ? "border-[#00CFFF] bg-gradient-to-r from-[#00CFFF]/10 to-[#915EFF]/10 text-[#00CFFF] shadow-[0_4px_20px_rgba(0,207,255,0.25)]" 
                : "border-white/20 bg-transparent text-white/70 hover:border-white/40 hover:text-white hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)]"
            }`}
            onClick={() => handleTabClick(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={activeCategory === category ? {
              scale: [1, 1.05, 1],
              transition: { duration: 0.5, repeat: 0 }
            } : {}}
          >
            <span>{category}</span>
          </motion.button>
        ))}
      </div>
        {/* Hidden div to force eager loading of all tech ball canvases */}
      <div style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none' }}>
        {Object.values(techCategories).flat().map(({ name, icon }) => (
          <div key={`preload-${name}`} style={{ width: 1, height: 1, position: 'absolute', opacity: 0 }}>
            <img src={icon} alt={name} />
          </div>
        ))}
      </div>
        {/* Tech icons with responsive layout for different screen sizes */}
      <div className="relative w-full tech-section-container"> {/* Removed fixed height to allow responsive behavior */}
        {/* Desktop view with horizontal scrolling */}
        <div className="hidden md:block relative overflow-hidden h-40">
          {/* Left shadow overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-primary to-transparent pointer-events-none"></div>
          
          {/* Right shadow overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-primary to-transparent pointer-events-none"></div>
          
          {/* AutoScroller for desktop */}
          <AutoScroller>
            <div className="flex flex-row gap-10 py-4 px-12 min-w-max">
              {techCategories[activeCategory].map(({ name, icon }) => (
                <motion.div 
                  className="w-28 flex-shrink-0 flex flex-col items-center justify-center"
                  key={`desktop-${name}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-24" style={{ aspectRatio: "1/1" }}>
                    <TechGrid icon={icon} />
                  </div>
                  <p className="text-center mt-1 text-white text-[14px] font-medium">{name}</p>
                </motion.div>
              ))}
            </div>
          </AutoScroller>
        </div>
        
        {/* Mobile view with grid layout */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-5 px-4 py-2">
            {techCategories[activeCategory].map(({ name, icon }) => (
              <motion.div 
                className="flex flex-col items-center justify-center py-2"
                key={`mobile-${name}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20" style={{ aspectRatio: "1/1" }}>
                  <TechGrid icon={icon} />
                </div>
                <p className="text-center mt-1 text-white text-[12px] font-medium">{name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Use named export instead of default export for better Fast Refresh compatibility
export const TechSection = SectionWrapper(Tech, "");
