'use client'
import useThree from '@/hooks/use-three'
import { animate } from '@/utils'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

// Camera Settings
const CAMERA_SETTINGS = {
  fov: 45, // AKA field of View
  aspect: window.innerWidth / window.innerHeight,
  near: 0.1, // the near clipping plane
  far: 100, // the far clipping plane
}

export default function BasicExample() {
  // refs
  const ref = useRef<HTMLCanvasElement | null>(null)
  // states
  const { scene, camera, renderer } = useThree()

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
    createScene()

    // camera settings
    camera.position.set(0, 0, 8)
    // add it to the dom
    ref.current?.appendChild(renderer.domElement)
  }, [])

  return <main className="" ref={ref}></main>
}
