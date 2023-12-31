'use client'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { animate } from '../utils'

// Camera Settings
const CAMERA_SETTINGS = {
  fov: 45, // AKA field of View
  aspect: window.innerWidth / window.innerHeight,
  near: 0.1, // the near clipping plane
  far: 100, // the far clipping plane
}

export default function Home() {
  // refs
  const ref = useRef<HTMLCanvasElement | null>(null)
  // states
  const [scene, setScene] = useState<THREE.Scene>(new THREE.Scene())
  const [camera, setCamera] = useState<THREE.PerspectiveCamera>(
    new THREE.PerspectiveCamera(
      CAMERA_SETTINGS.fov,
      CAMERA_SETTINGS.aspect,
      CAMERA_SETTINGS.near,
      CAMERA_SETTINGS.far
    )
  )
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer>(
    new THREE.WebGLRenderer()
  )

  // create a cube & add it to the scene
  const createCube = (boxGeometryParams?: {
    width?: number
    height?: number
    depth?: number
    widthSegments?: number
    heightSegments?: number
    depthSegments?: number
  }) => {
    const geometry = new THREE.BoxGeometry(
      boxGeometryParams?.width,
      boxGeometryParams?.height,
      boxGeometryParams?.depth,
      boxGeometryParams?.widthSegments,
      boxGeometryParams?.heightSegments,
      boxGeometryParams?.depthSegments
    )
    const material = new THREE.MeshBasicMaterial({
      wireframe: false,
      color: 0x00ffff,
    })
    const cube = new THREE.Mesh(geometry, material)

    scene.add(cube)
  }

  // creating a scene & call createCube function
  const createScene = () => {
    scene.background = new THREE.Color('#00b140')
    createCube()
  }

  useEffect(() => {
    // renderer settings
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    createScene()

    // camera settings
    camera.position.set(0, 0, 8)
    // add it to the dom
    ref.current?.appendChild(renderer.domElement)
    animate(renderer, scene, camera)
  }, [])

  return <main className="" ref={ref}></main>
}
