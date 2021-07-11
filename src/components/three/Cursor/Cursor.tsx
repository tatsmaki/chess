import React, { useState, useRef } from 'react'
import * as THREE from 'three'

const Cursor = (props: any) => {
  const mesh = useRef<THREE.Mesh>(null!)

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event: any) => setActive(!active)}
      onPointerOver={(event: any) => setHover(true)}
      onPointerOut={(event: any) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export { Cursor }
