'use client';

import { useGLTF, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function Laptop3D() {
  const { scene } = useGLTF('/gcomputer.glb');
  return <primitive object={scene} scale={7.1} position={[-0.7, -1.5, 0]} rotation={[0.21, -0.21, 0]} />;
}

export default function LaptopModel() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.4} color="#404040" />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1.2} 
          color="#ffffff"
          castShadow
        />
        <directionalLight 
          position={[-5, 5, -5]} 
          intensity={0.8} 
          color="#4a90e2"
        />
        <hemisphereLight 
          intensity={0.5} 
          color="#4a90e2" 
          groundColor="#1a1a2e"
        />
        <Laptop3D />
        <OrbitControls 
          enableZoom
          enablePan
          autoRotate={false}
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}
