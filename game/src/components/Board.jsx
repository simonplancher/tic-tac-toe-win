import Square from "./Square";

export default function Board({ board, onClick }) {
    return (
        <div className="container">

            <h1>Tic Tac Toe</h1>

            <div className="board">
                {board.map((square, index) => (
                    <Square
                        key={index}
                        value={square}
                        onClick={() => onClick(index)}
                    />
                ))}
            </div>

        </div>
    );
}