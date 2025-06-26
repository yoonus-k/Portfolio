import React from 'react';
import { Html, useProgress } from "@react-three/drei";
import { styles } from "../styles";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html as="div" center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-20 h-20 border-4 border-t-[#00CFFF] border-b-[#915EFF] border-l-[#00CFFF]/50 border-r-[#915EFF]/50 rounded-full animate-spin"></div>
        <p className={`${styles.heroSubText} mt-4`}>{progress.toFixed(0)}%</p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
