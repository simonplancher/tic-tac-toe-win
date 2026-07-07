import "./App.css";
import { useState } from "react";
import StartScreen from "./components/StartScreen";
import Board from "./components/Board";
import WinScreen from "./components/WinScreen";
import LoseScreen from "./components/LoseScreen";

import { checkWinner } from "./utils/gameLogic";

export default function App(){

    const [screen,setScreen]=useState("start");

    const [board,setBoard]=useState(Array(9).fill(null));

    function computerMove(newBoard){

        const empty=[];

        newBoard.forEach((v,i)=>{

            if(v===null)
                empty.push(i);

        });

        if(empty.length===0)
            return;

        const move=empty[Math.floor(Math.random()*empty.length)];

        newBoard[move]="O";

    }

    function click(index){

        if(board[index])
            return;

        const newBoard=[...board];

        newBoard[index]="X";

        if(checkWinner(newBoard)==="X"){

            setBoard(newBoard);

            setScreen("win");

            return;

        }

        computerMove(newBoard);

        if(checkWinner(newBoard)==="O"){

            setBoard(newBoard);

            setScreen("lose");

            return;

        }

        if(!newBoard.includes(null)){

            setScreen("lose");

        }

        setBoard(newBoard);

    }

    if(screen==="start")
        return <StartScreen onStart={()=>setScreen("game")}/>

    if(screen==="win")
        return (
            <WinScreen
              retry={()=>{
                      setBoard(Array(9).fill(null))
                      setScreen("game")
                  }}
            />
          )

    if(screen==="lose")
        return(
            <LoseScreen
                retry={()=>{
                    setBoard(Array(9).fill(null))
                    setScreen("game")
                }}
            />
        )

    return(
        <Board
            board={board}
            onClick={click}
        />
    )

}