import Square from "./Square";

export default function Board({
    board,
    onClick,
    mode = "tictactoe",
    onInput
}) {
    return (
        <div className="container">

            <h1>
                {mode === "tictactoe" ? "Tic Tac Toe" : "Puzzle"}
            </h1>

            <div className="board">
                {board.map((square, index) => (
                    <Square
                        key={index}
                        value={square}
                        mode={mode}
                        onClick={() => onClick?.(index)}
                        onInput={(value) => onInput?.(index, value)}
                    />
                ))}
            </div>

        </div>
    );
}