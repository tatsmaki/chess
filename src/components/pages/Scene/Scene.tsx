import React from 'react'
import { Canvas } from '@react-three/fiber'

import { Board } from '@/components/blocks/Board'
import { CameraControls } from '@/components/blocks/CameraControls'

import { StyledScene } from './style'

const Scene = () => {
  return (
    <StyledScene>
      <Canvas shadows>
        <Board />
        <ambientLight intensity={0.2} />
        <pointLight position={[4.5, 1, -4.5]} intensity={1} castShadow />
        <CameraControls />
      </Canvas>
    </StyledScene>
  )
}

export { Scene }
