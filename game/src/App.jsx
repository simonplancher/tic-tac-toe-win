import "./App.css";
import { useState } from "react";
import StartScreen from "./components/StartScreen";
import Board from "./components/Board";
import WinScreen from "./components/WinScreen";
import LoseScreen from "./components/LoseScreen";

import { checkWinner } from "./utils/gameLogic";

export default function App() {
  const [screen, setScreen] = useState("start");
  const [mode, setMode] = useState("tictactoe");

  const [board, setBoard] = useState(Array(9).fill(null));

  function computerMove(newBoard) {
    const empty = [];

    newBoard.forEach((v, i) => {
      if (v === null) empty.push(i);
    });

    if (empty.length === 0) return;

    const move = empty[Math.floor(Math.random() * empty.length)];

    newBoard[move] = "O";
  }

  function clickTicTacToe(index) {
    if (board[index]) return;

    const newBoard = [...board];

    newBoard[index] = "X";

    if (checkWinner(newBoard) === "X") {
      setBoard(Array(9).fill(null));

      setScreen("puzzle-game");

      setMode("puzzle");

      return;
    }

    computerMove(newBoard);

    if (checkWinner(newBoard) === "O") {
      setBoard(newBoard);

      setScreen("lose");

      return;
    }

    if (!newBoard.includes(null)) {
      setScreen("lose");
    }

    setBoard(newBoard);
  }

  function clickPuzzle(index, value) {
    const newBoard = [...board];

    newBoard[index] = value;

    setBoard(newBoard);
  }

  const solution = ["1", "4", "9", "2", "7", "3", "5", "8", "6"];

  function checkPuzzleSolution() {
    const correct = board.every((value, index) => value === solution[index]);
    if (correct) {
      setScreen("win");
    } else {
      setScreen("lose");
    }
  }

  if (screen === "start")
    return <StartScreen onStart={() => setScreen("tictactoe-game")} />;

  if (screen === "win")
    return (
      <WinScreen
        retry={() => {
          setBoard(Array(9).fill(null));
          setScreen("tictactoe-game");
          setMode("tictactoe");
        }}
      />
    );

  if (screen === "lose")
    return (
      <LoseScreen
        retry={() => {
          setBoard(Array(9).fill(null));
          if (mode === "puzzle") {
            setScreen("puzzle-game");
          } else {
            setScreen("tictactoe-game");
          }
        }}
      />
    );

  if (screen === "tictactoe-game")
    return <Board mode={mode} board={board} onClick={clickTicTacToe} />;

  if (screen === "puzzle-game")
    return <Board mode={mode} board={board} onInput={clickPuzzle} />;

  return <></>;
}
