'use client'

import React, { Suspense } from 'react'
import { MeshProps, ThreeElements } from '@react-three/fiber'
import { FC, useRef } from 'react'
import { useControls } from 'leva'
import { Mesh } from 'three'
import { meshes } from './utils'

export type CapsuleProps = {
    meshType?: keyof typeof meshes,
    mesh: MeshProps
} & Partial<Pick<ThreeElements, 'capsuleGeometry'>>

const Capsule:FC<CapsuleProps> = ({
    meshType = 'basic',
    mesh,
    capsuleGeometry,
}) => {
    const meshRef = useRef<Mesh | null>(null)

    const [_x, _y, _z] = mesh?.position as any

    const {
        position: { x, y, z },
      } = useControls({ position: { x: _x || 0, y: _y || 0, z: _z || 0 } })

    const MeshMaterialElement = meshes[meshType]

  return (
    <mesh {...mesh} position={[x, y, z]} ref={meshRef}>
      <capsuleGeometry {...capsuleGeometry} />
      <MeshMaterialElement color={'red'} />
    </mesh>
  )
}

export default Capsule