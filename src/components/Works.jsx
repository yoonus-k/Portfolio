import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectModal from "./ProjectModal";
import { styles } from "../styles";

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="w-full"
      whileHover={{ 
        scale: 1.02,
        y: -8,
        zIndex: 10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ 
        scale: 1,
        y: 0,
        zIndex: 1
      }}
      animate={{ 
        scale: 1,
        y: 0,
        zIndex: 1
      }}
      whileInView={{ 
        scale: [0.95, 1],
        opacity: [0.8, 1],
        transition: { duration: 0.6, ease: "easeOut" }
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div 
        className={`relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full bg-tertiary/30 backdrop-blur-sm rounded-xl border-2 border-[#FFD700]/30 hover:border-[#FFD700]/50`}
        onClick={onClick}
      >
        {/* Subtle gradient overlay with animation */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-[#FFD700]/10 rounded-xl"></div>
        
        {/* Content wrapper */}
        <div className="relative z-10">
          {/* Project Image */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300"></div>
            
            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-black/80 text-[#FFD700] text-xs px-3 py-1.5 rounded-full border border-[#FFD700]/40 font-medium relative overflow-hidden group-hover:border-[#FFD700]/60 transition-all duration-700 font-mono animate-glow">
                {project.category || 'Project'}
              </span>
            </div>
            
            {/* Action buttons overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
              {project.source_code_link && project.source_code_link !== "#" && (
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.source_code_link, "_blank");
                  }}
                  className="bg-black/80 hover:bg-[#FFD700]/80 text-white hover:text-black p-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-[#FFD700] shadow-xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={github} alt="github" className="w-6 h-6" />
                </motion.button>
              )}
              
              {project.live_demo_link && project.live_demo_link !== "#" && (
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.live_demo_link, "_blank");
                  }}
                  className="bg-black/80 hover:bg-[#FFD700]/80 text-white hover:text-black p-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-[#FFD700] shadow-xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.button>
              )}
            </div>
          </div>
          
          {/* Project Content */}
          <div className="p-6 space-y-4 relative">
            {/* Project title with status indicator */}
            <div className="flex items-start justify-between">
              <h3 className="text-white text-xl font-bold leading-tight flex-1">
                {project.name}
              </h3>
              {project.status && (
                <span className={`text-xs px-2 py-1 rounded-full ml-3 flex-shrink-0 ${
                  project.status === 'completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                  project.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                  'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {project.status.replace('-', ' ')}
                </span>
              )}
            </div>
            
            <p className="text-secondary text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Performance metrics (dynamic, if available) */}
            {project.metrics && Object.keys(project.metrics).length > 0 && (
              <div className="flex flex-row flex-nowrap justify-between items-center gap-1 md:gap-2 text-[11px] md:text-xs text-secondary bg-[#FFD700]/5 rounded-lg p-1 md:p-3 backdrop-blur-sm border border-[#FFD700]/20">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="flex-1 min-w-[60px] max-w-[120px] md:min-w-[90px] md:max-w-[180px] text-center flex flex-col justify-center">
                    <div className="text-[#FFD700] font-semibold text-[12px] md:text-base">{value}</div>
                    <div className="capitalize text-[10px] md:text-xs">{key.replace(/_/g, ' ')}</div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 min-h-[2rem]">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag.name}
                  className="text-xs px-3 py-1.5 rounded-full bg-[#FFD700]/10 text-[#FFD700] border border-[#FFD700]/30 font-medium transition-all duration-200 hover:scale-105"
                >
                  {tag.name}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="text-xs px-3 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/30 font-medium transition-all duration-200">
                  +{project.tags.length - 3} more
                </span>
              )}
            </div>
            
            {/* View Details Button */}
            <motion.button
              onClick={() => onClick(project)}
              className={styles.secondaryButton + " w-full flex items-center justify-center gap-2"}
              whileHover={{ 
                scale: 1.02
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Details</span>
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Ensure projects are loaded properly
  React.useEffect(() => {
    try {
      if (projects && projects.length > 0) {
        setIsLoaded(true);
      } else {
        console.warn("Projects array is empty or undefined");
        setHasError(true);
      }
    } catch (error) {
      console.error("Error loading projects:", error);
      setHasError(true);
    }
  }, []);
  
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    
    // Use a safer method to interact with the canvas that doesn't affect WebGL context
    try {
      const canvasElements = document.querySelectorAll('canvas');
      canvasElements.forEach(canvas => {
        if (canvas && !canvas.__isProjectsCanvas) {
          canvas.style.visibility = 'hidden';
        }
      });
    } catch (error) {
      console.error("Error hiding canvas:", error);
      // The project modal should still work even if canvas manipulation fails
    }
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    
    // Use a safer method to interact with the canvas that doesn't affect WebGL context
    setTimeout(() => {
      try {
        const canvasElements = document.querySelectorAll('canvas');
        canvasElements.forEach(canvas => {
          if (canvas && !canvas.__isProjectsCanvas) {
            canvas.style.visibility = 'visible';
          }
        });
      } catch (error) {
        console.error("Error showing canvas:", error);
        // The user should still be able to see projects even if canvas restoration fails
      }
    }, 300);
  };
  
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <div className="inline-flex items-center px-4 py-2 bg-opacity-20 bg-[#FFD700] backdrop-blur-sm rounded-full mb-6 border border-[#FFD700] border-opacity-30 mx-auto">
          <span className="text-[#FFD700] font-mono">Portfolio</span>
        </div>
        <h2 className={`${styles.sectionHeadText} mb-4`}>Projects</h2>
      </motion.div>
      
      <div className="w-full flex justify-center">
        <motion.p variants={fadeIn("", "", 0.1)} className="mt-3 text-secondary text-base md:text-lg max-w-2xl text-center leading-relaxed mb-8">
          Following projects showcase my expertise in AI/ML engineering, full-stack development, 
          and IT solutions. Each project demonstrates real-world problem solving, from algorithmic 
          trading systems to enterprise software solutions, with links to repositories and live demos.
        </motion.p>
      </div>

      {hasError ? (
        <div className="mt-20 text-center py-10 border border-[#00CFFF]/30 rounded-xl bg-tertiary/50 backdrop-blur-sm">
          <p className="text-white text-xl font-semibold mb-2">Unable to load projects</p>
          <p className="text-secondary">Please refresh the page to try again.</p>
        </div>
      ) : !isLoaded ? (
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="h-[500px] rounded-2xl bg-tertiary/50 animate-pulse"></div>
          ))}
        </div>
      ) : (
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects && projects.map((project, index) => (
            <ProjectCard 
              key={`project-${index}`} 
              project={project} 
              index={index}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      )}

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default SectionWrapper(Works, "projects");
