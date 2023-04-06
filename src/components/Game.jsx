import React, { useState } from "react";
import "./Game.css";
import Board from "./Board";
import { calculateWinner } from "../helper";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "0";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
    return boardCopy
  };
  const startNewGame = () => {
    return (
      <button
        className="start__btn"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Սկսել նոր խաղ
      </button>
    );
  };
  const checkBordIsFull=()=>{
   if(board.includes(null)){  
    let turn =`Հիմա խաղում է ${xIsNext ? "x" : "0"}`
    return turn
   }else{
    return" ոչ ոքի"
   }
   }
  return (
    <div className="wrapper">
      {startNewGame()}
      <Board squares={board} click={handleClick} />
      <p className="game__info">
        { winner ? `Հաղթեց ${winner}` :checkBordIsFull()}
      </p>
    </div>
  );
};

export default Game;
