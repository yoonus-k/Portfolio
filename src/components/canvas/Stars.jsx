import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import "../../index.css";

const NUM_STARS = 1000; // Reduced for better performance

const Stars = () => {
  const ref = useRef();
  
  // Use useMemo to avoid recreating the sphere on each render
  const sphere = useMemo(() => {
    return random.inSphere(new Float32Array(NUM_STARS * 3), { radius: 1.2 });
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-full">
    <Canvas 
      camera={{ position: [0, 0, 1] }}
      style={{ width: '100%', height: '100%' }}
      frameloop="demand"
      dpr={[1, 1.5]}
      gl={{ 
        powerPreference: 'default',
        antialias: false,
        stencil: false,
        depth: false 
      }}
    >
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
