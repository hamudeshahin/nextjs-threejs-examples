'use client'

import useThree from '@/hooks/use-three'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import * as dat from 'dat.gui'
import useWindowSize from '@/hooks/use-window-size'
import useGui from '@/hooks/use-gui'

const AddRemoveCubesExample = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { camera, renderer, scene } = useThree()
  const { gui, guiAddVector } = useGui()
  // const __window = useWindowSize()

  //   scene.background = new THREE.Color(0x262626)

  console.info('Rendered !')

  useEffect(() => {
    console.log('useEffect')

    scene.background = new THREE.Color('#0ff')

    // const cameraFolder = gui?.addFolder('Camera')

    // cameraFolder?.add(camera.position, 'z', 1, 200, 1).name('camera-z')
    guiAddVector({
      name: 'camera-z',
      propName: 'z',
      target: camera.position,
      max: 200,
      min: 10,
      step: 1,
    })
    const light = new THREE.PointLight(0xffffff, 0.5)
    light.position.set(-10, 10, -10)
    // for shadow
    light.castShadow = true
    light.shadow.mapSize.width = 1024
    light.shadow.mapSize.height = 1024
    light.shadow.camera.near = 0.1
    light.shadow.camera.far = 0.1
    scene.add(light)
    camera.position.set(0, 10, 40)
    camera.lookAt(0, 0, 0)
    // plane
    const planeGeometry = new THREE.PlaneGeometry(100, 100)
    const plane = new THREE.Mesh(
      planeGeometry,
      new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide })
    )
    // settings of plane
    plane.rotateX(Math.PI / 2)
    plane.rotation.y = -1.75
    plane.receiveShadow = true
    scene.add(plane)
    ref.current?.appendChild(renderer.domElement)
    ref.current?.getElementsByTagName('div')[0].appendChild(gui.domElement)
  }, [])

  return (
    <div ref={ref} className="absolute">
      <div className="fixed w-fit top-1 right-1"></div>
    </div>
  )
}

export default AddRemoveCubesExample
