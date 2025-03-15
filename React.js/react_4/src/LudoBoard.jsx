import { useState } from "react";

export default function LudoBoard() {
    let [Moves, setMoves] = useState({blue: 0, red: 0, yellow:0, green: 0});
   
    return (
      <div>
        <p>Game Begins!</p>
        <div className="board">
          <p>Bluecmoves ={Moves.blue} </p>
          <button>+1</button>
          <p>Yellowcmoves = {Moves.red}</p>
          <button>+1</button>
          <p>Greencmoves = {Moves.yellow}</p>
          <button>+1</button>
          <p>Redmoves = {Moves.green}</p>
          <button>+1</button>
        </div>
    </div>
  );
}