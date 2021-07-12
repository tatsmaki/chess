import React, { useMemo } from 'react'
import { SphereGeometry, CylinderGeometry, TorusGeometry, Matrix4 } from 'three'
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils'

const Pawn = (props: any) => {
  const {
    index,
    color,
    handleClick
  } = props

  const pawnGeometry = useMemo(() => {
    const sphereGeometry = new SphereGeometry(0.2, 32, 32)
    const cylinderGeometry = new CylinderGeometry(0.1, 0.2, 1, 32)
    const torusGeometry = new TorusGeometry(0.2, 0.1, 16, 32)

    sphereGeometry.applyMatrix4(new Matrix4().makeTranslation(0, 0.5, 0))
    torusGeometry.applyMatrix4(new Matrix4().makeTranslation(0, 0, 0.4))
    torusGeometry.rotateX(Math.PI / 2)

    return BufferGeometryUtils.mergeBufferGeometries([
      sphereGeometry,
      cylinderGeometry,
      torusGeometry
    ])
  }, [])

  return (
    <mesh
      geometry={pawnGeometry}
      position={[0, 0, 0.5]}
      rotation={[Math.PI / 2, 0, 0]}
      receiveShadow
      castShadow
      onClick={() => handleClick(index)}
    >
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export { Pawn }
