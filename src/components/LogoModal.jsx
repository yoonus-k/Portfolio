import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';

const LogoModal = ({ logoSrc, isOpen, onClose }) => {
  // Handle Escape key press
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px'; // Prevent layout shift
      // Add event listener for escape key
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

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
            className="relative bg-transparent rounded-2xl max-w-xs w-full"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.02 }}
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute -top-12 right-0 text-[#00CFFF] hover:text-white text-3xl transition-all p-2 hover:bg-[#00CFFF]/20 rounded-full backdrop-blur-sm"
            >
              ×
            </motion.button>
            
            {/* Logo Image */}
            <div className="flex items-center justify-center">
              <motion.div 
                initial={{ scale: 1 }}
                animate={{ 
                  scale: [1, 1.05, 1], 
                  rotate: [0, 5, 0, -5, 0],
                  boxShadow: ["0 0 10px rgba(0, 207, 255, 0.3)", "0 0 20px rgba(0, 207, 255, 0.5)", "0 0 10px rgba(0, 207, 255, 0.3)"]
                }}
                transition={{ 
                  duration: 1.5, 
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="rounded-full overflow-hidden border-4 border-[#00CFFF]/30 shadow-lg shadow-[#00CFFF]/20"
              >
                <img 
                  src={logoSrc} 
                  alt="Portfolio Logo" 
                  className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoModal;
