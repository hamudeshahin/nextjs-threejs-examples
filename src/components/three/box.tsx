'use client'

import { ThreeElements, useFrame } from '@react-three/fiber'
import { FC, useRef } from 'react'
import { useControls } from 'leva'
import { Mesh } from 'three'

const materials = {
  basic: (props: ThreeElements['meshBasicMaterial']) => (
    <meshBasicMaterial {...props} />
  ),
  standard: (props?: ThreeElements['meshStandardMaterial']) => (
    <meshStandardMaterial {...props} />
  ),
}

type MaterialProps = {
  basic: ThreeElements['meshBasicMaterial']
  standard: ThreeElements['meshStandardMaterial']
}

export type BoxProps<T extends keyof typeof materials> = {
  cubeName: string
  materialType?: T
  materialProps?: MaterialProps[T]
} & Partial<Pick<ThreeElements, 'mesh' | 'boxGeometry'>>

const Box: FC<BoxProps<keyof typeof materials>> = ({
  cubeName,
  materialType = 'basic',
  materialProps,
  mesh,
  boxGeometry,
}) => {
  const meshRef = useRef<Mesh | null>(null)

  const [_x, _y, _z] = mesh?.position as any

  const {
    position: { x, y, z },
  } = useControls(cubeName, {
    position: { x: _x || 0, y: _y || 0, z: _z || 0 },
  })

  //   useFrame((state, delta, xrFrame) => {
  //     meshRef.current!.position.set(x, y, z)
  //   })

  // Assert materialProps to the appropriate type based on materialType
  const MeshMaterialElement = materials[materialType] as (
    props: MaterialProps[keyof typeof materials]
  ) => JSX.Element

  return (
    <mesh {...mesh} position={[x, y, z]} ref={meshRef}>
      <boxGeometry {...boxGeometry} />
      <MeshMaterialElement {...materialProps} />
    </mesh>
  )
}

export default Box
