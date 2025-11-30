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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <VerticalTimelineElement
        className={index % 2 === 0 ? "vertical-timeline-element--left" : "vertical-timeline-element--right"}
        position={index % 2 === 0 ? "left" : "right"}
        contentStyle={{
          background: isHovered ? "#1d1836" : "#1a1a2e",
          color: "#fff",
          border: isHovered ? "2px solid #00CFFF" : "2px solid rgba(0, 207, 255, 0.3)",
          boxShadow: isHovered
            ? "0 0 15px 4px rgba(0, 207, 255, 0.3)"
            : "0 2px 8px 1px rgba(0, 0, 0, 0.3)",
          transition: "all 0.3s ease",
          borderRadius: "16px",
          overflow: "hidden",
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
        date=""
        iconStyle={{ 
          background: experience.iconBg,
          border: isHovered ? "4px solid #00CFFF" : "4px solid rgba(0, 207, 255, 0.5)",
          transition: "all 0.3s ease",
          boxShadow: "0 0 10px rgba(0, 207, 255, 0.3)",
          marginTop: "20px"
        }}
        icon={
          <div className="flex justify-center items-center w-full h-full rounded-full bg-opacity-70">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[75%] h-[75%] object-contain"
            />
          </div>
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* No external date badges anymore - they'll be at the bottom */}

        <div>
          <h3 className="text-white text-[24px] font-bold font-['Space_Grotesk']">
            {experience.title}
          </h3>
          <p className="text-[#b0b0b0] text-[16px] font-['Inter'] mb-4" style={{ margin: 0 }}>
            {experience.company_name}
          </p>

          <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, pointIndex) => (
              <li
                key={`experience-point-${pointIndex}`}
                className="text-white-100 text-[14px] pl-1 tracking-wider font-['Inter']"
              >
                {point}
              </li>
            ))}
          </ul>

          {/* Date badge at the bottom of each card */}
          <div className="flex justify-end mt-6">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#FFD700] to-[#00CFFF] rounded-full shadow-lg">
              <span className="text-black font-bold text-sm">
                {experience.date || 'Date not available'}
              </span>
            </div>
          </div>
        </div>
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
      
      /* Premium Date Styling */
      .premium-date {
        background: linear-gradient(to right, #FFD700, #00CFFF) !important;
        color: #000 !important;
        font-weight: bold !important;
        padding: 8px 12px !important;
        border-radius: 20px !important;
        box-shadow: 0 0 15px rgba(0, 207, 255, 0.5) !important;
        display: inline-block !important;
        text-shadow: 0px 0px 2px white !important;
        position: relative !important;
        z-index: 10 !important;
      }
      
      /* Ensure date is always visible */
      .vertical-timeline--two-columns .vertical-timeline-element-content .vertical-timeline-element-date {
        position: absolute !important;
        width: auto !important;
        left: 120% !important;
        top: 6px !important;
        opacity: 1 !important;
        visibility: visible !important;
      }
      
      .vertical-timeline--two-columns .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left) .vertical-timeline-element-content .vertical-timeline-element-date {
        left: auto !important;
        right: 120% !important;
        text-align: right !important;
      }
      
      /* Mobile adjustments - keep the premium style */
      @media only screen and (max-width: 1169px) {
        .vertical-timeline-element-content .vertical-timeline-element-date {
          display: inline-block !important;
          margin-top: 10px !important;
          margin-bottom: 10px !important;
          opacity: 1 !important;
        }
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
        <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-[#00CFFF]/10 via-[#00CFFF]/20 to-[#00CFFF]/10 backdrop-blur-sm rounded-full mb-6 border-2 border-[#00CFFF] border-opacity-30 mx-auto shadow-[0_4px_20px_rgba(0,207,255,0.15)]">
          <span className="text-[#00CFFF] text-sm font-medium font-['Inter']">My Journey</span>
        </div>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>
        <div className="flex items-center justify-center mt-4 mb-6">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#00CFFF] to-transparent mx-2"></div>
        </div>
        <p className="text-[#b0b0b0] text-base md:text-lg font-['Inter'] max-w-2xl mx-auto text-center leading-relaxed mb-12">
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
