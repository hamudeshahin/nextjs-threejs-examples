'use client'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Box from './three/box'

const MultipleCubesExample = () => {
  return (
    <main className="flex h-screen w-full">
      <Canvas className="w-full h-full">
        <Box
          cubeName="Box1"
          mesh={{ position: [2, 0, 0] }}
          materialType="basic"
          materialProps={{ color: 'red' }}
        />
        <Box
          cubeName="Box2"
          mesh={{ position: [-2, 0, 0] }}
          materialType="basic"
          materialProps={{ color: 'green' }}
        />
      </Canvas>
    </main>
  )
}

export default MultipleCubesExample
