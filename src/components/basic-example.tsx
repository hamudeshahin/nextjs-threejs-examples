'use client'
import { Canvas } from '@react-three/fiber'
import Box from './three/box'
import { OrbitControls } from '@react-three/drei' // OrbitControls a camera control for interactive 3D scenes
export default function BasicExample() {
  return (
    <main className="h-screen flex">
      <Canvas className="w-full h-full">
        <Box mesh={{ position: [0, 0, 0] }} />
        <OrbitControls />
      </Canvas>
    </main>
  )
}
