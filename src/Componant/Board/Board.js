import React, { useState } from 'react';
import Square from '../Square/Square';
import './Board.css';
// jglkfjglhfsghkl
function Board() {
  const [data, setData] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  const handleclick = (index) => {
    if (data[index] === null) {
      const copydata = [...data];
      copydata[index] = xTurn ? 'X' : 'O';
      setData(copydata);
      setXTurn(!xTurn);
    }
  };

  const winnercheck = () => {
    const winerloogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winerloogic) {
      const [a, b, c] = logic;
      if (data[a] !== null && data[a] === data[b] && data[a] === data[c]) {
        return data[a]; // Return 'X' or 'O' as the winner
      }
    }

    return null;
  }

  const isWinner = winnercheck();

  const isDraw = data.every((square) => square !== null);

  const handlereset = () => {
    setData(Array(9).fill(null));
  }

  return (
    <div className="board">
      <h1 className='text'>Start Game withe help of key  O and x</h1>
      <div className="row">
        <Square onClick={() => handleclick(0)} value={data[0]} />
        <Square onClick={() => handleclick(1)} value={data[1]} />
        <Square onClick={() => handleclick(2)} value={data[2]} />
      </div>

      <div className="row">
        <Square onClick={() => handleclick(3)} value={data[3]} />
        <Square onClick={() => handleclick(4)} value={data[4]} />
        <Square onClick={() => handleclick(5)} value={data[5]} />
      </div>

      <div className="row">
        <Square onClick={() => handleclick(6)} value={data[6]} />
        <Square onClick={() => handleclick(7)} value={data[7]} />
        <Square onClick={() => handleclick(8)} value={data[8]} />
      </div>

      {isWinner && (
        <div>
          <h1>{isWinner} won the game!</h1>
          <button onClick={handlereset}>Play Again</button>
        </div>
      )}

      {!isWinner && isDraw && (
       <>
        <h1>Both players are equal! </h1>
         <button onClick={handlereset}> Play Again </button>
       </>
      )}
    </div>
  );
}

export default Board;
