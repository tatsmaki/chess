import React from 'react'

type CellProps = {
  cellProps: {
    id: string,
    x: number,
    y: number,
    active?: boolean
  }
  handleTurn: (id: string) => void
}

const Cell = (props: CellProps) => {
  const {
    cellProps: { id, x, y, active },
    handleTurn
  } = props

  const cellColor = (x + y) % 2 === 0 ? '#000000' : '#ffffff'

  return (
    <group>
      <mesh position={[x, y, 0]} receiveShadow onClick={() => handleTurn(id)}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color={cellColor} />
      </mesh>
      {active && (
        <mesh position={[x, y, 0.001]}>
          <planeGeometry args={[1, 1]}/>
          <meshStandardMaterial color="#5172DE" opacity={0.6} transparent />
        </mesh>
      )}
    </group>
  )
}

export { Cell }
