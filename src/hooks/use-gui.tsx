'use client'
import { GUI, GUIParams } from 'dat.gui' // controller for three js
import { useCallback, useEffect, useRef, useState } from 'react'

type GuiProps = GUIParams
type GuiAddVectorFuncParams = {
  name: string
  target: THREE.Vector3
  propName: keyof THREE.Vector3
  min?: number
  max?: number
  step?: number
}
type GuiAddVectorFunc = (params: GuiAddVectorFuncParams) => void

type UseGuiReturnProps = {
  gui: GUI
  guiAddVector: GuiAddVectorFunc
}

const datGuiPositionClassNames = ' fixed top-2 right-2 z-50'
export default function useGui(props?: GuiProps): UseGuiReturnProps {
  const gui = useRef<GUI>(new GUI({ ...props }))

  const guiAddVector: GuiAddVectorFunc = ({ name, ...rest }) => {
    console.log('Gui Add Worked !')
    console.log(gui.current)
    // check if exist before
    if (
      gui.current.__controllers.find((item) => item.property === rest.propName)
    ) {
      return
    }

    gui.current
      .add(rest.target, rest.propName, rest?.min, rest?.max, rest?.step)
      .name(name)
  }

  //   useEffect(() => {
  //   }, [])

  return {
    gui: gui.current,
    guiAddVector,
  }
}
