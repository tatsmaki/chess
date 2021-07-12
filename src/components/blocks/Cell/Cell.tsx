import React from 'react'

const Cell = (props: any) => {
  const {
    index,
    color,
    isActive,
    handleTurn
  } = props

  return (
    <group>
      <mesh receiveShadow onClick={() => handleTurn(index)}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {isActive && (
        <mesh position={[0, 0, 0.001]}>
          <planeGeometry args={[1, 1]}/>
          <meshStandardMaterial color="#5172DE" opacity={0.6} transparent />
        </mesh>
      )}
    </group>
  )
}

export { Cell }
