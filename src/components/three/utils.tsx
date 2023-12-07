import { ThreeElements } from '@react-three/fiber'


export const meshes = {
    basic: (props: ThreeElements['meshBasicMaterial']) => (
      <meshBasicMaterial {...props} />
    ),
}

export type MaterialProps = {
  basic: ThreeElements['meshBasicMaterial']
  standard: ThreeElements['meshStandardMaterial']
}