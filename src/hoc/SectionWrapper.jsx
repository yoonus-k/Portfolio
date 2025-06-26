import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) => {
  return function HOC() {
    const [isVisible, setIsVisible] = React.useState(false);
    
    // Force visibility after a timeout (fail-safe)
    React.useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500); // Force visibility after 1.5 seconds
      
      return () => clearTimeout(timer);
    }, []);
    
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"} 
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }} // Reduced threshold for earlier animation
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        onViewportEnter={() => setIsVisible(true)}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
};

export default StarWrapper;
