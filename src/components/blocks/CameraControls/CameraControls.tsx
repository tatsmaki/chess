import React, { useRef, useEffect } from 'react'
import { Vector3 } from 'three'
import { extend, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

const CameraControls = () => {
  const { camera, gl } = useThree()
  const controls = useRef<any>()

  useEffect(() => {
    camera.position.set(0, 6, 0)
    controls.current.target = new Vector3(4.5, 0, -4.5)
    controls.current.update()
  }, [camera.position])

  useFrame(() => {
    controls.current.update()
  })

  return (
    <orbitControls ref={controls} args={[camera, gl.domElement]} />
  )
}

export { CameraControls }
