import React, { useState } from 'react'

import { Cell } from '@/components/blocks/Cell'
import { Pawn } from '@/components/blocks/Pawn'

const defaultBoard = {
  a8: { id: 'a8', x: 1, y: 8, mesh: null }, b8: { id: 'b8', x: 2, y: 8, mesh: null }, c8: { id: 'c8', x: 3, y: 8, mesh: null }, d8: { id: 'd8', x: 4, y: 8, mesh: null }, e8: { id: 'e8', x: 5, y: 8, mesh: null }, f8: { id: 'f8', x: 6, y: 8, mesh: null }, g8: { id: 'g8', x: 7, y: 8, mesh: null }, h8: { id: 'h8', x: 8, y: 8, mesh: null },
  a7: { id: 'a7', x: 1, y: 7, mesh: 'pb1' }, b7: { id: 'b7', x: 2, y: 7, mesh: 'pb2' }, c7: { id: 'c7', x: 3, y: 7, mesh: 'pb3' }, d7: { id: 'd7', x: 4, y: 7, mesh: 'pb4' }, e7: { id: 'e7', x: 5, y: 7, mesh: 'pb5' }, f7: { id: 'f7', x: 6, y: 7, mesh: 'pb6' }, g7: { id: 'g7', x: 7, y: 7, mesh: 'pb7' }, h7: { id: 'h7', x: 8, y: 7, mesh: 'pb8' },
  a6: { id: 'a6', x: 1, y: 6, mesh: null }, b6: { id: 'b6', x: 2, y: 6, mesh: null }, c6: { id: 'c6', x: 3, y: 6, mesh: null }, d6: { id: 'd6', x: 4, y: 6, mesh: null }, e6: { id: 'e6', x: 5, y: 6, mesh: null }, f6: { id: 'f6', x: 6, y: 6, mesh: null }, g6: { id: 'g6', x: 7, y: 6, mesh: null }, h6: { id: 'h6', x: 8, y: 6, mesh: null },
  a5: { id: 'a5', x: 1, y: 5, mesh: null }, b5: { id: 'b5', x: 2, y: 5, mesh: null }, c5: { id: 'c5', x: 3, y: 5, mesh: null }, d5: { id: 'd5', x: 4, y: 5, mesh: null }, e5: { id: 'e5', x: 5, y: 5, mesh: null }, f5: { id: 'f5', x: 6, y: 5, mesh: null }, g5: { id: 'g5', x: 7, y: 5, mesh: null }, h5: { id: 'h5', x: 8, y: 5, mesh: null },
  a4: { id: 'a4', x: 1, y: 4, mesh: null }, b4: { id: 'b4', x: 2, y: 4, mesh: null }, c4: { id: 'c4', x: 3, y: 4, mesh: null }, d4: { id: 'd4', x: 4, y: 4, mesh: null }, e4: { id: 'e4', x: 5, y: 4, mesh: null }, f4: { id: 'f4', x: 6, y: 4, mesh: null }, g4: { id: 'g4', x: 7, y: 4, mesh: null }, h4: { id: 'h4', x: 8, y: 4, mesh: null },
  a3: { id: 'a3', x: 1, y: 3, mesh: null }, b3: { id: 'b3', x: 2, y: 3, mesh: null }, c3: { id: 'c3', x: 3, y: 3, mesh: null }, d3: { id: 'd3', x: 4, y: 3, mesh: null }, e3: { id: 'e3', x: 5, y: 3, mesh: null }, f3: { id: 'f3', x: 6, y: 3, mesh: null }, g3: { id: 'g3', x: 7, y: 3, mesh: null }, h3: { id: 'h3', x: 8, y: 3, mesh: null },
  a2: { id: 'a2', x: 1, y: 2, mesh: 'pw1' }, b2: { id: 'b2', x: 2, y: 2, mesh: 'pw2' }, c2: { id: 'c2', x: 3, y: 2, mesh: 'pw3' }, d2: { id: 'd2', x: 4, y: 2, mesh: 'pw4' }, e2: { id: 'e2', x: 5, y: 2, mesh: 'pw5' }, f2: { id: 'f2', x: 6, y: 2, mesh: 'pw6' }, g2: { id: 'g2', x: 7, y: 2, mesh: 'pw7' }, h2: { id: 'h2', x: 8, y: 2, mesh: 'pw8' },
  a1: { id: 'a1', x: 1, y: 1, mesh: null }, b1: { id: 'b1', x: 2, y: 1, mesh: null }, c1: { id: 'c1', x: 3, y: 1, mesh: null }, d1: { id: 'd1', x: 4, y: 1, mesh: null }, e1: { id: 'e1', x: 5, y: 1, mesh: null }, f1: { id: 'f1', x: 6, y: 1, mesh: null }, g1: { id: 'g1', x: 7, y: 1, mesh: null }, h1: { id: 'h1', x: 8, y: 1, mesh: null },
}

type CellProps = {
  id: string
  x: number
  y: number
  mesh: string | null
  active?: boolean
  available?: boolean
}

type BoardState = {
  [key: string]: CellProps
}

const Board = () => {
  const [board, setBoard] = useState<BoardState>(defaultBoard)
  const [selectedFigure, setSelectedFigure] = useState<string | null>(null)

  const handlePawn = (id: string) => {
    setSelectedFigure(prevState => {
      const newState = prevState === id ? null : id
  
      return newState
    })
    setBoard(prevState => {
      const newState = { ...prevState }

      for (let key in newState) {
        newState[key].active = false
      }

      const { mesh } = prevState[id]
      const direction = mesh?.charAt(1) === 'w' ? 1 : -1
      const cell1 = `${id[0]}${Number(id[1]) + 1 * direction}`
      const cell2 = `${id[0]}${Number(id[1]) + 2 * direction}`

      return {
        ...newState,
        [cell1]: { ...prevState[cell1], active: !prevState[cell1].active },
        [cell2]: { ...prevState[cell2], active: !prevState[cell2].active }
      }
    })
  }

  const handleTurn = (id: string) => {
    setBoard(prevState => {
      if (selectedFigure) {
        const mesh = prevState[selectedFigure].mesh

        return {
          ...prevState,
          [selectedFigure]: { ...prevState[selectedFigure], mesh: null },
          [id]: { ...prevState[id], mesh }
        }
      }
      return prevState
    })
  }

  return (
    <group
      rotation={[-Math.PI / 2, 0, 0]}
    >
      {Object.values(board).map((cellProps: CellProps) => {
        const { id, mesh } = cellProps
        const meshColor = mesh?.charAt(1) === 'w' ? 'white' : 'black'

        return (
          <group key={id}>
            {mesh && (
              <Pawn
                pawnProps={cellProps}
                color={meshColor}
                handleClick={handlePawn}
              />
            )}
            <Cell cellProps={cellProps} handleTurn={handleTurn} />
          </group>
        )
      })}
    </group>
  )
}

export { Board }
