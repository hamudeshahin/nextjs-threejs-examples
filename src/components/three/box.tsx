'use client'

import { ThreeElements, useFrame } from '@react-three/fiber'
import { FC, useRef } from 'react'
import { useControls } from 'leva'
import { Mesh } from 'three'

const meshes = {
  basic: (props: ThreeElements['meshBasicMaterial']) => (
    <meshBasicMaterial {...props} />
  ),
}
export type BoxProps = {
  meshType?: keyof typeof meshes
} & Partial<Pick<ThreeElements, 'mesh' | 'boxGeometry'>>

const Box: FC<BoxProps> = ({ meshType = 'basic', mesh, boxGeometry }) => {
  const meshRef = useRef<Mesh | null>(null)

  const [_x, _y, _z] = mesh?.position as any

  const {
    position: { x, y, z },
  } = useControls({ position: { x: _x || 0, y: _y || 0, z: _z || 0 } })

  //   useFrame((state, delta, xrFrame) => {
  //     meshRef.current!.position.set(x, y, z)
  //   })

  const MeshMaterialElement = meshes[meshType]

  return (
    <mesh {...mesh} position={[x, y, z]} ref={meshRef}>
      <boxGeometry {...boxGeometry} />
      <MeshMaterialElement color={'green'} />
    </mesh>
  )
}

export default Box
