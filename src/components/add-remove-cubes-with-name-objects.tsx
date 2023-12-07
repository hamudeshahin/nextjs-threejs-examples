'use client'

import { OrbitControls } from '@react-three/drei'

import { Canvas } from '@react-three/fiber'
import Button from '@zyxui/button'
import { Box, Circle, TestTube2 } from 'lucide-react'
import Capsule from './three/capsule'

const AddRemoveCubesExample = () => {
  
  return (
    <main className="h-screen flex">
      <div className='fixed z-50 top-2 w-[98%] left-1/2 text-sm transform -translate-x-1/2 bg-black/10 rounded-lg border border-black/50 p-4 backdrop:blur'>
        <div className='flex gap-2 flex-wrap'>
          <Button size={'sm'} startContent={<Box size={12} />}>Add Cube</Button>
          <Button size={'sm'} startContent={<TestTube2 size={12} />}>Add Capsule</Button>
          <Button size={'sm'} startContent={<Circle size={12} />}>Add Circle</Button>
        </div>
      </div>
      <Canvas className="w-full h-full">
        <Capsule mesh={{ position: [0, 0, 0] }}  />
        <OrbitControls />
      </Canvas>
    </main>
  )
}

export default AddRemoveCubesExample
