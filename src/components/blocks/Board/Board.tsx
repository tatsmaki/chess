import React, { useState } from 'react'

import { Cell } from '@/components/blocks/Cell'
import { Pawn } from '@/components/blocks/Pawn'

const defaultBoard = [
  [], [], [], [], [], [], [], [],
  ['pawn', 'white'], ['pawn', 'white'], ['pawn', 'white'], ['pawn', 'white'], ['pawn', 'white'], ['pawn', 'white'], ['pawn', 'white'], ['pawn', 'white'],
  [], [], [], [], [], [], [], [],
  [], [], [], [], [], [], [], [],
  [], [], [], [], [], [], [], [],
  [], [], [], [], [], [], [], [],
  ['pawn', 'black'], ['pawn', 'black'], ['pawn', 'black'], ['pawn', 'black'], ['pawn', 'black'], ['pawn', 'black'], ['pawn', 'black'], ['pawn', 'black'],
  [], [], [], [], [], [], [], []
]

type CellState = Array<string | boolean>
type BoardState = CellState[]

const Board = () => {
  const [board, setBoard] = useState<BoardState>(defaultBoard)
  const [from, setFrom] = useState<number | null>(null)

  const handlePawn = (pawnIndex: number) => {
    const direction = board[pawnIndex][1] === 'white' ? 8 : -8

    setFrom(pawnIndex)
    setBoard(prevState => {
      const newState = prevState.map((cell, cellIndex) => {
        const [meshType, meshColor] = cell
        // const isActive = cellIndex === pawnIndex + 1 * direction || cellIndex === pawnIndex + 2 * direction

        return [meshType, meshColor, false]
      })
      newState[pawnIndex + direction][2] = true
      newState[pawnIndex + 2 * direction][2] = true
      return newState
    })
  }

  const handleTurn = (to: number) => {
    if (from) {
      setFrom(null)
      setBoard(prevState => {
        const newState = prevState.map((cell) => {
          const [meshType, meshColor] = cell
  
          return [meshType, meshColor, false]
        })

        const fromCell = prevState[from]
        const toCell = prevState[to]
        const [toMesh, toColor, toActive] = toCell

        if (toActive === true) {
          newState[from] = [toMesh, toColor, false]
          newState[to] = fromCell
        }
        return newState
      })
    }
  }

  return (
    <group
      rotation={[-Math.PI / 2, 0, 0]}
    >
      {board.map((cell: CellState, index: number) => {
        const [meshType, meshColor, isActive] = cell
        const x = Math.floor(index / 8)
        const y = -index % 8
        const cellColor = (x + y) % 2 === 0 ? 'black' : 'white'

        return (
          <group key={index} position={[x, y, 0]}>
            {meshType && (
              <Pawn
                index={index}
                color={meshColor}
                handleClick={handlePawn}
              />
            )}
            <Cell
              index={index}
              color={cellColor}
              isActive={isActive}
              handleTurn={handleTurn}
            />
          </group>
        )
      })}
    </group>
  )
}

export { Board }
