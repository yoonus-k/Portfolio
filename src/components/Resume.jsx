import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, slideIn } from "../utils/motion";
import BackToTop from "./BackToTop";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Configure PDF.js worker with HTTPS to avoid mixed content issues
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@4.8.69/build/pdf.worker.min.mjs`

const ResumeNew = () => {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const PDF_PATH = '/YOONUS_PMP_SW_AI.pdf';

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoading(false);
    setError(false);
  }

  function onDocumentLoadError(error) {
    console.error("Error loading PDF:", error);
    setError(true);
    setLoading(false);
  }

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    
    window.addEventListener("resize", handleResize);
    setWidth(window.innerWidth);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-primary pt-20 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#915EFF]/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          variants={fadeIn("down", "spring", 0.1, 0.75)}
          initial="hidden"
          animate="show"
          className="text-center mb-12"
        >
          <div className={styles.badgeStyle + " mx-auto"}>
            <span className="text-[#00CFFF] font-mono">My Professional Journey</span>
          </div>
          <h2 className={`${styles.sectionHeadText} text-center mb-4`}>
            Resume
          </h2>
        </motion.div>

        {/* Resume Display */}
        <motion.div 
          variants={slideIn("up", "tween", 0.2, 1)}
          initial="hidden"
          animate="show"
          className="mb-8 flex flex-col items-center"
        >
          <div className="mb-8 w-full flex justify-center p-4 bg-tertiary/30 backdrop-blur-sm border border-white/10 rounded-xl shadow-xl">
            <Document 
              file={PDF_PATH} 
              className="flex justify-center"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <div className="flex justify-center items-center h-[400px]">
                  <div className="animate-pulse text-[#00CFFF] font-mono">Loading PDF...</div>
                </div>
              }
              error={
                <div className="flex flex-col justify-center items-center h-[400px] w-full">
                  <p className="text-white text-xl mb-4">Failed to load PDF file.</p>
                  <a 
                    href={PDF_PATH} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#00CFFF] underline hover:text-[#915EFF]"
                  >
                    Click here to view directly
                  </a>
                </div>
              }
            >
              {!error && !loading && (
                <Page 
                  pageNumber={1} 
                  scale={width > 786 ? 1.7 : 0.6} 
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              )}
            </Document>
          </div>

          <motion.button
            onClick={() => window.open(PDF_PATH, '_blank')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${styles.primaryButton} max-w-[250px] flex items-center gap-2`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </motion.button>
        </motion.div>
        
        {/* Stats Section */}
        <motion.div 
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className={`${styles.cardStyle} p-6 text-center`}>
            <div className="bg-[#00CFFF]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-[#00CFFF]/30">
              <svg className="w-8 h-8 text-[#00CFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className={`${styles.gradientText} text-2xl font-bold group-hover:scale-110 transition-transform`}>4.95/5</h3>
            <p className="text-white text-lg mt-2 font-semibold">GPA</p>
            <p className="text-secondary">King Abdulaziz University</p>
          </div>
          
          <div className={`${styles.cardStyle} p-6 text-center`}>
            <div className="bg-[#00CFFF]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-[#00CFFF]/30">
              <svg className="w-8 h-8 text-[#00CFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className={`${styles.gradientText} text-2xl font-bold group-hover:scale-110 transition-transform`}>3+</h3>
            <p className="text-white text-lg mt-2 font-semibold">Years Experience</p>
            <p className="text-secondary">Full-Stack & AI/ML</p>
          </div>
          
          <div className={`${styles.cardStyle} p-6 text-center`}>
            <div className="bg-[#00CFFF]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-[#00CFFF]/30">
              <svg className="w-8 h-8 text-[#00CFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className={`${styles.gradientText} text-2xl font-bold group-hover:scale-110 transition-transform`}>$1M+</h3>
            <p className="text-white text-lg mt-2 font-semibold">Revenue Generated</p>
            <p className="text-secondary">E-commerce Projects</p>
          </div>
        </motion.div>
      </div>
      <BackToTop />
    </div>
  );
};

export default ResumeNew;
