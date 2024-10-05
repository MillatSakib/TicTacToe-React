import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg font-bold"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function calculateWinner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}

function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(square);
  let status;

  if (winner) {
    status = `Winner ${winner}`;
  } else {
    status = "Next Player " + (!xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    if (square[i] || calculateWinner(square)) {
      return;
    }
    const nextSquares = square.slice();
    xIsNext ? (nextSquares[i] = "O") : (nextSquares[i] = "X");
    setXIsNext(!xIsNext);
    setSquare(nextSquares);
  }

  return (
    <>
      <div>{status}</div>
      <div className="flex">
        <Square
          value={square[0]}
          onSquareClick={() => handleClick(0)}
          // onClick={handleClick}
        />
        <Square value={square[1]} onSquareClick={() => handleClick(1)} />
        <Square value={square[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={square[3]} onSquareClick={() => handleClick(3)} />
        <Square value={square[4]} onSquareClick={() => handleClick(4)} />
        <Square value={square[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={square[6]} onSquareClick={() => handleClick(6)} />
        <Square value={square[7]} onSquareClick={() => handleClick(7)} />
        <Square value={square[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default App;
