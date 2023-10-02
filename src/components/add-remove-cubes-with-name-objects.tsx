'use client'

import useThree from '@/hooks/use-three'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import * as dat from 'dat.gui' // controller for three js
import useWindowSize from '@/hooks/use-window-size'

const AddRemoveCubesExample = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { camera, renderer, scene } = useThree()

  //   scene.background = new THREE.Color(0x262626)

  const __window = useWindowSize()

  const gui = new dat.GUI()

  useEffect(() => {
    ref.current?.appendChild(renderer.domElement)
  }, [])

  return <div ref={ref} />
}

export default AddRemoveCubesExample
