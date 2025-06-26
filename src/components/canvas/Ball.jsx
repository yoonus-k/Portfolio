import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = React.memo(({ iconUrl }) => {
  // Try-catch block to handle errors
  let decal;
  try {
    [decal] = useTexture([iconUrl]);
  } catch (error) {
    console.error("Error in useTexture:", error);
    // Return a simplified ball without decal in case of error
    return (
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color='#ff5555' polygonOffset polygonOffsetFactor={-5} flatShading />
        </mesh>
      </Float>
    );
  }

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color='#fff8eb' polygonOffset polygonOffsetFactor={-5} flatShading />
        {decal && <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} flatShading />}
      </mesh>
    </Float>
  );
});

const BallCanvas = ({ icon }) => {
  // Use state to track if the texture is loaded
  const [isReady, setIsReady] = useState(false);
  // Track if we're on mobile for performance optimizations
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile for performance optimization
  useEffect(() => {
    // Media query for mobile devices
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);
    
    // Handle resize events to update mobile status
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    
    // Add listener for screen size changes
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  
  // Force immediate loading of the texture
  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.src = icon;
    img.onload = () => setIsReady(true);
    
    // Set a backup timeout in case the image load event doesn't fire
    const timer = setTimeout(() => {
      setIsReady(true);
    }, isMobile ? 100 : 300); // Faster timeout on mobile for better performance
    
    return () => clearTimeout(timer);
  }, [icon, isMobile]);
    return (
    <Canvas 
      frameloop={isMobile ? "demand" : "always"} // Use demand on mobile for better performance
      dpr={isMobile ? [0.5, 1.0] : [0.8, 1.2]} // Lower resolution on mobile for better performance
      gl={{ 
        preserveDrawingBuffer: true,
        powerPreference: isMobile ? 'low-power' : 'default',
        antialias: !isMobile, // Disable antialiasing on mobile for performance
      }}
      style={{ willChange: 'transform' }} // Performance optimization
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.8} // Slightly faster rotation for better visibility
          rotateSpeed={0.4}
        />
        {isReady && <Ball iconUrl={icon} />}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
