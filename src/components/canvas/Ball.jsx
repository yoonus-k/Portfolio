import React from "react";
import { motion } from "framer-motion";

// Premium animated tech icon with perfectly circular metallic glossy ball effect
const TechGrid = ({ icon }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.12,
        filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 8px rgba(200, 200, 255, 0.6)) drop-shadow(0 0 3px rgba(255, 215, 0, 0.4))"
      }}
      className="flex items-center justify-center"
      style={{
        aspectRatio: "1/1", // Enforce 1:1 aspect ratio
        width: "100%",
        height: "100%"
      }}
    >
      <div
        className="relative rounded-full flex items-center justify-center"
        style={{ 
          width: '100%', 
          height: '100%',
          overflow: 'hidden',
          aspectRatio: "1/1" // Ensure perfect circle
        }}
      >
        {/* Premium metallic white base sphere with enhanced metallic gradient */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{ 
            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 1), rgba(220, 220, 235, 0.8), rgba(180, 180, 210, 0.9))',
            boxShadow: '0 10px 30px rgba(255, 255, 255, 0.4), inset 0 -10px 20px rgba(160, 160, 180, 0.5), inset 0 10px 20px rgba(255, 255, 255, 0.8)',
            border: '1px solid rgba(230, 230, 250, 0.8)',
            zIndex: 1
          }}
        />

        {/* Enhanced metallic light reflection overlay */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.5) 20%, rgba(200, 200, 220, 0.2) 50%, rgba(150, 150, 170, 0.4) 80%, rgba(130, 130, 150, 0.6) 100%)',
            zIndex: 2
          }}
        />
        
        {/* Additional metallic highlight for enhanced 3D effect */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '60%',
            height: '60%',
            top: '5%',
            left: '5%',
            background: 'linear-gradient(120deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 60%)',
            zIndex: 3
          }}
        />

        {/* Metallic shine line */}
        <div 
          className="absolute"
          style={{
            width: '15%',
            height: '80%',
            top: '10%',
            left: '30%',
            background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%)',
            borderRadius: '50%',
            transform: 'rotate(-30deg)',
            zIndex: 3
          }}
        />

        {/* Enhanced metallic bottom reflection */}
        <div
          className="absolute rounded-full"
          style={{
            width: '80%',
            height: '40%',
            bottom: '0%',
            left: '10%',
            background: 'radial-gradient(ellipse at center, rgba(160, 160, 180, 0.6) 0%, rgba(100, 100, 120, 0.2) 50%, transparent 70%)',
            filter: 'blur(4px)',
            zIndex: 2
          }}
        />
        
        {/* Premium gold accent reflection */}
        <div
          className="absolute rounded-full"
          style={{
            width: '60%',
            height: '20%',
            bottom: '10%',
            left: '20%',
            background: 'radial-gradient(ellipse at center, rgba(255, 215, 0, 0.15) 0%, transparent 70%)',
            filter: 'blur(8px)',
            zIndex: 3
          }}
        />

        {/* Enhanced top-right highlight */}
        <div
          className="absolute rounded-full"
          style={{
            width: '30%',
            height: '30%',
            top: '10%',
            right: '20%',
            background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.9) 0%, transparent 70%)',
            filter: 'blur(3px)',
            zIndex: 3
          }}
        />

        {/* Tech icon with enhanced premium metallic glow */}
        <div className="relative z-10 flex items-center justify-center" style={{width: '100%', height: '100%'}}>
          <img
            src={icon}
            alt="Tech Icon"
            className="relative"
            style={{ 
              width: '60%',
              height: '60%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 2px 3px rgba(50, 50, 70, 0.4))',
              zIndex: 10
            }}
            loading="lazy"
          />
        </div>

        {/* Enhanced metallic outer glow with depth effect */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: '0 10px 30px rgba(255, 255, 255, 0.3), 0 5px 15px rgba(200, 200, 220, 0.5), 0 -5px 15px rgba(150, 150, 180, 0.15)',
            zIndex: 0
          }}
        />
        
        {/* Premium metallic rim with chrome effect and gold accent */}
        <div
          className="absolute rounded-full"
          style={{
            width: '100%',
            height: '100%',
            border: '1px solid rgba(255, 255, 255, 0.9)',
            boxShadow: 'inset 0 0 4px 1px rgba(180, 180, 210, 0.5), inset 0 0 2px 1px rgba(255, 215, 0, 0.2)',
            zIndex: 5
          }}
        />
        
        {/* Outer metallic ring for enhanced depth */}
        <div
          className="absolute rounded-full"
          style={{
            width: '104%',
            height: '104%',
            top: '-2%',
            left: '-2%',
            border: '1px solid rgba(220, 220, 240, 0.4)',
            boxShadow: '0 0 5px 1px rgba(255, 255, 255, 0.3)',
            zIndex: 1
          }}
        />
      </div>
    </motion.div>
  );
};

export default TechGrid;
