'use client'
import { useCallback, useEffect, useState } from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{ w: number; h: number }>({
    w: window.innerWidth,
    h: window.innerHeight,
  })

  // on window size change
  const onResizeWindow = useCallback((ev: UIEvent): any => {
    setWindowSize({
      w: window.innerWidth,
      h: window.innerHeight,
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResizeWindow)
    return () => {
      window.removeEventListener('resize', onResizeWindow)
    }
  }, [])
  return {
    ...windowSize,
  }
}

export default useWindowSize
