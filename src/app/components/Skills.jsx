import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Center } from '@react-three/drei'
import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

function HtmlModel() {
  const { scene } = useGLTF('/html-3d.glb')
  const ref = useRef()

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.02
    }
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.014}
      position={[0, -1.8, 0]}
      rotation={[0, 4.6, 0]}
    />
  )
}

function CssModel() {
  const { scene } = useGLTF('/css-3d.glb')
  const ref = useRef()

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y -= 0.02
    }
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.014}
      position={[0, -1.8, 0]}
      rotation={[0, -4.6, 0]}
    />
  )
}

function JsModel3D() {
  const { scene } = useGLTF('/js-3d.glb')
  const ref = useRef()

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.02
    }
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.014}
      position={[0, -1.8, 0]}
      rotation={[0, 0, 0]}
    />
  )
}

function JsModel() {
  // Try to load the GLB model first
  try {
    const { scene } = useGLTF('/js-3d.glb')
    const ref = useRef()

    useFrame(() => {
      if (ref.current) {
        ref.current.rotation.y += 0.02
      }
    })

    return (
      <primitive
        ref={ref}
        object={scene}
        scale={0.014}
        position={[0, -1.8, 0]}
        rotation={[0, 0, 0]}
      />
    )
  } catch (error) {
    // Fallback to a simple 3D JS logo using primitives
    const ref = useRef()
    
    useFrame(() => {
      if (ref.current) {
        ref.current.rotation.y += 0.02
      }
    })

    // Yellow color for JS
    const jsYellow = '#F7DF1E'
    
    return (
      <group ref={ref} position={[0, -1.8, 0]}>
        {/* JS text - using simple 3D shapes */}
        <mesh position={[-0.5, 0, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.6, 1.2, 0.2]} />
          <meshStandardMaterial color={jsYellow} metalness={0.5} roughness={0.2} />
        </mesh>
        <mesh position={[0.5, 0, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.6, 1.2, 0.2]} />
          <meshStandardMaterial color={jsYellow} metalness={0.5} roughness={0.2} />
        </mesh>
        <mesh position={[0, -0.2, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.3, 0.4, 0.2]} />
          <meshStandardMaterial color={jsYellow} metalness={0.5} roughness={0.2} />
        </mesh>
      </group>
    )
  }
}

useGLTF.preload('/html-3d.glb')
useGLTF.preload('/css-3d.glb')
useGLTF.preload('/js-3d.glb')

export default function App() {
  return (
    <div className="mx-auto my-10 max-w-7xl">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="w-50 h-50 bg-none backdrop-blur-[2px] rounded-[40px] shadow-2xl flex items-center justify-center">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <Center>
              <HtmlModel />
            </Center>
            <OrbitControls enableZoom={true} minDistance={3} maxDistance={10} enableRotate={true} />
          </Canvas>
        </div>
        <div className="w-50 h-50 bg-none backdrop-blur-[2px] rounded-[40px] shadow-2xl flex items-center justify-center">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <Center>
              <CssModel />
            </Center>
            <OrbitControls enableZoom={true} minDistance={3} maxDistance={10} enableRotate={true} />
          </Canvas>
        </div>
        <div className="w-50 h-50 bg-none backdrop-blur-[2px] rounded-[40px] shadow-2xl flex items-center justify-center">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <Center>
              <JsModel />
            </Center>
            <OrbitControls enableZoom={true} minDistance={3} maxDistance={10} enableRotate={true} />
          </Canvas>
        </div>
      </div>
    </div>
  )
}
