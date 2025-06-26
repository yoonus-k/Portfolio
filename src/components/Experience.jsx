import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileInView={{ 
        scale: [0.95, 1.05, 1],
        // Completely removed box shadow animation from the motion.div wrapper
      }}
      style={{ boxShadow: 'none' }} // Ensure no shadow on the wrapper
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <VerticalTimelineElement
        className={index % 2 === 0 ? "vertical-timeline-element--left" : "vertical-timeline-element--right"}
        position={index % 2 === 0 ? "left" : "right"}
        contentStyle={{
          background: isHovered ? "#1d1836" : "#1a1a2e",
          color: "#fff",
          border: isHovered ? "2px solid #00CFFF" : "2px solid rgba(0, 207, 255, 0.3)",
          boxShadow: isHovered
            ? "0 0 32px 8px #00CFFF, 0 0 64px 16px #00CFFF33, 0 0 0 4px #00CFFF44"
            : "0 2px 8px 1px rgba(0, 0, 0, 0.3)",
          filter: isHovered ? "drop-shadow(0 0 16px #00CFFF)" : "none",
          transform: isHovered ? "scale(1.03)" : "scale(1)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          borderRadius: "16px",
          overflow: "hidden", // Contain everything within the card
        }}
        contentArrowStyle={{ 
          borderRight: index % 2 === 0 
            ? (isHovered ? "8px solid #00CFFF" : "8px solid rgba(0, 207, 255, 0.5)")
            : "none",
          borderLeft: index % 2 === 1 
            ? (isHovered ? "8px solid #00CFFF" : "8px solid rgba(0, 207, 255, 0.5)")
            : "none",
          transition: "border-color 0.4s ease-in-out"
        }}
        date={
          <motion.span 
            className="text-secondary font-medium"
            whileHover={{ scale: 1.1, color: "#00CFFF" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {experience.date}
          </motion.span>
        }
        iconStyle={{ 
          background: experience.iconBg,
          border: isHovered ? "4px solid #00CFFF" : "4px solid rgba(0, 207, 255, 0.5)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isHovered ? "scale(1.15)" : "scale(1)",
          boxShadow: isHovered 
            ? "0 0 30px rgba(0, 207, 255, 0.6), inset 0 0 15px rgba(255, 255, 255, 0.3)" 
            : "0 0 15px rgba(0, 207, 255, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(5px)",
        }}
        icon={
          <motion.div 
            className="flex justify-center items-center w-full h-full rounded-full bg-opacity-70"
            whileHover={{ rotate: 360 }}
            whileInView={{ 
              scale: [1, 1.15, 1],
              rotate: [0, 10, 0]
            }}
            animate={{
              boxShadow: [
                "inset 0 0 5px rgba(0, 207, 255, 0.3)",
                "inset 0 0 15px rgba(0, 207, 255, 0.5)",
                "inset 0 0 5px rgba(0, 207, 255, 0.3)"
              ]
            }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ 
              duration: 1.5, 
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[75%] h-[75%] object-contain filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
              style={{ 
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.3s ease'
              }}
            />
          </motion.div>
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <motion.h3 
            className="text-white text-[24px] font-bold font-sans"
            whileHover={{ scale: 1.05, color: "#00CFFF" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {experience.title}
          </motion.h3>
          <motion.p 
            className="text-[#b0b0b0] text-[16px] font-mono mb-4" 
            style={{ margin: 0 }}
            whileHover={{ scale: 1.02 }}
          >
            {experience.company_name}
          </motion.p>

          {/* Progress indicators for achievements */}
          <div className="mb-4 space-y-2">
            {experience.points.slice(0, 2).map((point, pointIndex) => (
              <motion.div
                key={pointIndex}
                className="flex items-center gap-2"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: (index * 0.2) + (pointIndex * 0.1), duration: 0.8 }}
              >
                <div className="w-2 h-2 bg-[#00CFFF] rounded-full"></div>
                <div className="flex-1 h-1 bg-tertiary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#00CFFF] to-[#00CFFF] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: isHovered ? "100%" : "70%" }}
                    transition={{ delay: (index * 0.3) + (pointIndex * 0.2), duration: 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.ul 
            className="mt-5 list-disc ml-5 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            {experience.points.map((point, pointIndex) => (
              <motion.li
                key={`experience-point-${pointIndex}`}
                className="text-white-100 text-[14px] pl-1 tracking-wider hover:text-[#00CFFF] transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: (index * 0.2) + (pointIndex * 0.1), 
                  duration: 0.4,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ x: 5, scale: 1.02 }}
              >
                {point}
              </motion.li>
            ))}
          </motion.ul>

          {/* Interactive timeline connector */}
          {isHovered && (
            <motion.div
              className="absolute -left-3 top-1/2 w-6 h-6 bg-[#00CFFF] rounded-full opacity-50"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          )}
        </motion.div>
      </VerticalTimelineElement>
    </motion.div>
  );
};

const Experience = () => {
  // Add CSS to ensure no unwanted shadows or glows on timeline elements
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .vertical-timeline-element,
      .vertical-timeline-element-content,
      .vertical-timeline {
        box-shadow: none !important;
        -webkit-box-shadow: none !important;
      }
      .vertical-timeline::before {
        box-shadow: none !important; 
        -webkit-box-shadow: none !important;
      }
      .vertical-timeline-element-icon {
        box-shadow: none !important;
        -webkit-box-shadow: none !important;
      }
      .vertical-timeline-element-content-arrow {
        filter: drop-shadow(0 0 0 transparent) !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <div className="inline-flex items-center px-4 py-2 bg-opacity-20 bg-[#00CFFF] backdrop-blur-sm rounded-full mb-6 border border-[#00CFFF] border-opacity-30 mx-auto">
          <span className="text-[#00CFFF] text-sm font-medium font-mono">My Journey</span>
        </div>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>
        <div className="flex items-center justify-center mt-4 mb-6">
          <div className="w-12 h-1 bg-[#00CFFF] mx-2"></div>
        </div>
        <p className="text-[#b0b0b0] text-base md:text-lg font-mono max-w-2xl mx-auto text-center leading-relaxed mb-12">
          My professional journey showcases a blend of technical expertise and leadership roles across different industries.
        </p>
      </motion.div>

      <div className="mt-10 flex flex-col">
        <VerticalTimeline 
          lineColor="rgba(0, 207, 255, 0.5)"
          className="!shadow-none !bg-transparent"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={`experience-${index}`} 
              experience={experience} 
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
