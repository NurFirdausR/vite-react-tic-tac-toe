import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface SquareProps {
  value: string;
  onSquareClick: () => void;
}


function Square({ value, onSquareClick }: SquareProps) {
  return <button className="square" onClick={onSquareClick} >{value}</button>
}
function calculateWinner(squares: any) {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [2,5,8],
      [0,4,8],
      [3,4,6],
    ]
    for (let index = 0; index < lines.length; index++) {
      const [a,b,c] = lines[index]
      if (squares[a] && squares[b] === squares[a] && squares[c] === squares[a]) {
        return squares[a]
      }
      
    }
    return false;
}
function Board() {
  const [squares,setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const  handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    } 
    const nextSquares = squares.slice();
     
      nextSquares[i] = (xIsNext ? 'X' : 'O')
      setSquares(nextSquares)
      setXIsNext(!xIsNext)
  }
  const winner = calculateWinner(squares)
  let status = '';
  if (winner) {
    status = winner + ' won';
  }else{
    status = 'next player: '+ (xIsNext ? 'X' : 'O');

  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Tic Tac Toe</h1>
      <div className="status"><h2>{status}</h2></div>
      <br />
      
      <div className="board">
      {squares.map((square, index) => (
    <Square key={index} value={square} onSquareClick={() => handleClick(index)} />
))}
      {/* <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square /> */}
      </div>

    </>
  )
}

export default Board
