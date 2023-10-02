// animate function FPS
export function animate(
  renderer: THREE.Renderer,
  scene: THREE.Scene,
  camera: THREE.Camera,
  cb?: () => void
) {
  const FPSRefresher = () => {
    requestAnimationFrame(FPSRefresher)
    cb?.()
    renderer.render(scene, camera)
  }
  FPSRefresher()
}

export function renderOneTime(
  renderer: THREE.Renderer,
  scene: THREE.Scene,
  camera: THREE.Camera
) {
  renderer.render(scene, camera)
}
