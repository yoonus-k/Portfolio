import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageZoomed, setIsImageZoomed] = useState(false); // State to track zoomed image

  // Create an array of valid images if project exists
  const galleryImages = project ? [
    project.image,
    project.image2, 
    project.image3,
    project.image4
  ].filter(img => img !== undefined && img !== null) : [];

  // Define callback functions before conditional returns
  const nextImage = useCallback(() => {
    if (galleryImages.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }
  }, [galleryImages.length]);

  const prevImage = useCallback(() => {
    if (galleryImages.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    }
  }, [galleryImages.length]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px'; // Prevent layout shift
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isOpen]);

  // Reset currentImageIndex and isImageZoomed when project changes or modal reopens
  useEffect(() => {
    if (isOpen && project) {
      setCurrentImageIndex(0);
      setIsImageZoomed(false);
    }
  }, [isOpen, project]);
  
  // Add keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen || !project || galleryImages.length <= 1) return;
      
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, project, galleryImages.length, nextImage, prevImage]);

  // Auto-swiping images in the gallery
  useEffect(() => {
    if (isOpen && galleryImages.length > 1) {
      const interval = setInterval(() => {
        nextImage();
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval); // Cleanup interval on unmount or modal close
    }
  }, [isOpen, galleryImages.length, nextImage]);

  if (!project) return null;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-[99999] p-4"
          onClick={onClose}
          style={{ isolation: 'isolate' }}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`${styles.cardStyle} max-w-4xl w-full max-h-[90vh] overflow-y-auto relative`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-[#00CFFF]/20">
              <h2 className={`${styles.gradientText} text-2xl font-bold`}>{project.name}</h2>
              <button
                onClick={onClose}
                className="text-white hover:text-[#00CFFF] text-2xl transition-colors"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Image Gallery */}
              {galleryImages.length > 0 && (
                <div className="relative">
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden border border-white/10 bg-black/40">
                    <img
                      src={galleryImages[currentImageIndex]}
                      alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain cursor-pointer"
                      onClick={() => setIsImageZoomed(true)} // Open zoomed image on click
                    />
                    
                    {/* Gallery Navigation - only shown if there are multiple images */}
                    {galleryImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-[#00CFFF]/30 transition-colors border border-white/10"
                          aria-label="Previous image"
                        >
                          ←
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-[#00CFFF]/30 transition-colors border border-white/10"
                          aria-label="Next image"
                        >
                          →
                        </button>
                        
                        {/* Gallery Indicators - only shown if there are multiple images */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {galleryImages.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentImageIndex ? 'bg-[#00CFFF]' : 'bg-white/50'
                              }`}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Image counter - shows which image is currently displayed */}
                  {galleryImages.length > 1 && (
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full border border-[#00CFFF]/30">
                      {currentImageIndex + 1}/{galleryImages.length}
                    </div>
                  )}
                </div>
              )}

              {/* Zoomed Image Modal */}
              {isImageZoomed && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-[99999] p-4"
                  onClick={() => setIsImageZoomed(false)} // Close zoomed image on click
                >
                  {/* Left Arrow */}
                  {galleryImages.length > 1 && (
                    <button
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-[#00CFFF]/30 transition-colors border border-white/20 z-10"
                      aria-label="Previous image"
                    >
                      &#8592;
                    </button>
                  )}
                  <img
                    src={galleryImages[currentImageIndex]}
                    alt={`${project.name} zoomed screenshot`}
                    className="max-w-full max-h-full object-contain"
                  />
                  {/* Right Arrow */}
                  {galleryImages.length > 1 && (
                    <button
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-[#00CFFF]/30 transition-colors border border-white/20 z-10"
                      aria-label="Next image"
                    >
                      &#8594;
                    </button>
                  )}
                </div>
              )}

              {/* Project Description */}
              <div>
                <h3 className="text-white text-xl font-semibold mb-3 border-b border-[#00CFFF]/20 pb-2">Project Overview</h3>
                <p className="text-secondary text-[16px] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies Used */}
              <div>
                <h3 className="text-white text-xl font-semibold mb-3 border-b border-[#00CFFF]/20 pb-2">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-[#00CFFF]/10 text-[#00CFFF] border border-[#00CFFF]/20"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Key Achievements / Metrics (dynamic) */}
              {project.metrics && Object.keys(project.metrics).length > 0 && (
                <div className="flex flex-row flex-wrap justify-between items-stretch gap-4 mt-8 mb-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="flex-1 min-w-[120px] max-w-[220px] bg-dark-800/70 rounded-xl p-4 text-center border border-[#FFD700]/20 shadow-sm flex flex-col justify-center">
                      <div className="text-lg font-bold text-[#FFD700] mb-1">{value}</div>
                      <div className="text-sm text-secondary capitalize">{key.replace(/_/g, ' ')}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                {project.source_code_link && project.source_code_link !== "#" && (
                  <a 
                    href={project.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 min-w-[160px] inline-block bg-[#FFD700] hover:bg-[#F6CA00] text-black font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 text-center cursor-pointer"
                  >
                    <div className="flex items-center justify-center pointer-events-none">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </div>
                  </a>
                )}
                
                {project.live_demo_link && project.live_demo_link !== "#" && (
                  <a 
                    href={project.live_demo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 min-w-[160px] inline-block bg-[#00CFFF] hover:bg-[#00B8E5] text-black font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 text-center cursor-pointer"
                  >
                    <div className="flex items-center justify-center pointer-events-none">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </div>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
