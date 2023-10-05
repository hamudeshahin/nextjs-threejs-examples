'use client'

import { animate } from '@/utils'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

// types
type CameraSettingsProps = {
  fov: number
  aspect: number
  near: number
  far: number
}

// Camera Settings
const CAMERA_SETTINGS: CameraSettingsProps = {
  fov: 45, // AKA field of View
  aspect: window?.innerWidth / window?.innerHeight,
  near: 0.1, // the near clipping plane
  far: 100, // the far clipping plane
}

const useThree = (
  cameraSettings: CameraSettingsProps = CAMERA_SETTINGS,
  rendererCallback?: () => void
): {
  camera: THREE.PerspectiveCamera
  scene: THREE.Scene
  renderer: THREE.WebGLRenderer
} => {
  const scene = useRef<THREE.Scene>(new THREE.Scene())
  // states
  // const [scene, setScene] = useState<THREE.Scene>(new THREE.Scene())
  const camera = useRef<THREE.PerspectiveCamera>(
    new THREE.PerspectiveCamera(
      cameraSettings.fov,
      window.innerWidth / window.innerHeight,
      cameraSettings.near,
      cameraSettings.far
    )
  )

  // const [camera, setCamera] = useState<THREE.PerspectiveCamera>(
  //   new THREE.PerspectiveCamera(
  //     cameraSettings.fov,
  //     cameraSettings.aspect,
  //     cameraSettings.near,
  //     cameraSettings.far
  //   )
  // )
  const renderer = useRef<THREE.WebGLRenderer>(new THREE.WebGLRenderer())
  // const [renderer, setRenderer] = useState<THREE.WebGLRenderer>(
  //   new THREE.WebGLRenderer()
  // )

  useEffect(() => {
    // set renderer settings
    renderer.current.setSize(window.innerWidth, window.innerHeight)
    renderer.current.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    animate(renderer.current, scene.current, camera.current, rendererCallback)
  }, [])

  return {
    scene: scene.current,
    camera: camera.current,
    renderer: renderer.current,
  }
}

export default useThree
