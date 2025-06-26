import React, { Suspense, useEffect, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader";
import CanvasLoader from "../Loader";

const ComputerModel = ({ isMobile }) => {
  // Use a memo to prevent unnecessary re-renders
  const gltf = useGLTF(
    "./desktop_pc/scene.gltf",
    undefined,
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('/draco/'); 
      loader.setDRACOLoader(dracoLoader);
    }
  );

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow={false}
      />
      <pointLight intensity={1} />
      <primitive
        object={gltf.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Memoize the ComputerModel component to prevent unnecessary re-renders
const MemoizedComputerModel = React.memo(ComputerModel);

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Check if we're on mobile
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback as a listener for state changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    
    // Delay rendering to improve initial page load
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 200);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      clearTimeout(timer);
    };
  }, []);

  // Memoize canvas settings based on isMobile
  const canvasSettings = useMemo(() => ({
    camera: { position: [20, 3, 5], fov: 30 },
    style: { 
      width: '100%', 
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    }
  }), []);

  if (!isReady) {
    return <div className="w-full h-full bg-transparent" />;
  }

  return (
    <Canvas
      frameloop="demand"
      shadows={false}
      dpr={[0.8, 1.2]} // Lower DPR for better performance
      camera={canvasSettings.camera}
      gl={{ 
        preserveDrawingBuffer: false, // Set to false for better performance
        antialias: false,
        powerPreference: "default", // Changed from high-performance to default
        stencil: false,
        depth: true
      }}
      style={canvasSettings.style}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableRotate={true} // Enable rotation for user interaction
        />
        <MemoizedComputerModel isMobile={isMobile} />
      </Suspense>    </Canvas>
  );
};

export default ComputersCanvas;
